import { withRouter } from 'next/router'
import Link from 'next/link'
import * as chroma from 'chroma-js'
import * as _ from 'lodash'
import { nouns, adjectives } from '../data/corpora.js'
import getConfig from 'next-server/config'
import Bar from '../parts/Bar'
import {
  scaleRed,
  scaleBlue,
  scaleTextRed,
  scaleTextBlue,
  colorExtend,
  class_labels,
} from '../parts/Static'
import Review from '../parts/Review'

let { publicRuntimeConfig } = getConfig()
let linkPrefix = publicRuntimeConfig.linkPrefix

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show_all_positive: false,
      show_all_negative: false,
    }
  }

  render() {
    let {
      font_size,
      line_height,
      grem,
      router,
      analyze,
      data,
      info,
      setAnalyze,
      review_sort,
      setReviewSort,
      show_accuracy,
      setAccuracy,
    } = this.props
    let info_ids = info.map(o => o.og_id)
    let topic_info = info[info_ids.indexOf(router.query.id)]

    let reviews = data.filter(o => o.url === router.query.id)
    let counts = reviews.reduce(
      (counts, r) => {
        let slice = counts.slice()
        if (r.class_probabilities[1] > r.class_probabilities[0]) {
          slice[1] += 1
        } else {
          slice[0] += 1
        }
        return slice
      },
      [0, 0]
    )

    let certainty_array = reviews.map(r => {
      if (r.logits[1] > r.logits[0]) {
        return {
          class: r.class,
          label: r.label,
          certainty: r.class_probabilities[1],
        }
      } else {
        return {
          class: r.class,
          label: r.label,
          certainty: r.class_probabilities[0],
        }
      }
    })
    let pos = _.sortBy(
      certainty_array.filter(r => r.class === 'pos'),
      'certainty'
    ).reverse()
    let neg = _.sortBy(
      certainty_array.filter(r => r.class === 'neg'),
      'certainty'
    )
    let combined = [...pos, ...neg]
    console.log(combined)

    let sorted = reviews.slice()
    if (review_sort === 'date') {
      sorted = _.sortBy(sorted, 'date')
    } else if (review_sort === 'positive') {
      sorted = _.sortBy(sorted, function(r) {
        let sort_val
        if (r.class === 'pos') sort_val = 1 - r.class_probabilities[1] - 1
        if (r.class === 'neg') sort_val = r.class_probabilities[0] - 0
        return sort_val
      })
    } else if (review_sort === 'negative') {
      sorted = _.sortBy(sorted, function(r) {
        let sort_val
        if (r.class === 'pos') sort_val = r.class_probabilities[1] - 0
        if (r.class === 'neg') sort_val = 1 - r.class_probabilities[0] - 1
        return sort_val
      })
    } else if (review_sort === 'accurate') {
      sorted = _.sortBy(sorted, [
        function(r) {
          return r.class === r.label ? 0 : 1
        },
        function(r) {
          let sort_val
          if (r.class === 'pos') sort_val = 1 - r.class_probabilities[1]
          if (r.class === 'neg') sort_val = 1 - r.class_probabilities[0]
          return sort_val
        },
      ])
    } else if (review_sort === 'inaccurate') {
      sorted = _.sortBy(sorted, [
        function(r) {
          return r.class === r.label ? 1 : 0
        },
        function(r) {
          let sort_val
          if (r.class === 'pos') sort_val = 1 - r.class_probabilities[1]
          if (r.class === 'neg') sort_val = 1 - r.class_probabilities[0]
          return sort_val
        },
      ])
    }

    let top_sentences = reviews.map(r => {
      let max = Math.max(
        Math.abs(_.min(r.lime_scores)),
        Math.abs(_.max(r.lime_scores))
      )

      function scaleScore(value) {
        if (value < 0) {
          return scaleTextRed(Math.abs(value) / max)
        } else {
          return scaleTextBlue(Math.abs(value) / max)
        }
      }

      let sentences = r.lime_tokens.map((t, i) => {
        let score = r.lime_scores[i]
        let scaled = Math.abs(r.lime_scores[i]) / max
        return {
          token: t,
          score: score,
          class: r.class,
          scaled_score: scaled,
          background: scaleScore(score),
          author: r.author,
          date: r.date,
          index: r.index,
        }
      })
      let sorted = _.sortBy(sentences, 'score')
      if (r.class === 'pos') sorted = sorted.reverse()
      return sorted[0]
    })

    let top_pos = _.sortBy(top_sentences.filter(s => s.class === 'pos'), 'date')
    let top_neg = _.sortBy(top_sentences.filter(s => s.class === 'neg'), 'date')

    let show_limit = 4

    let rightwrong = reviews.reduce(
      (counts, r) => {
        let slice = counts.slice()
        if (r.label === r.class) {
          slice[1] += 1
        } else {
          slice[0] += 1
        }
        return slice
      },
      [0, 0]
    )
    let accuracy = rightwrong[1] / reviews.length

    return (
      <div>
        <Bar
          grem={grem}
          setAnalyze={setAnalyze}
          analyze={analyze}
          combined={combined}
          total={false}
          setAlgo={this.props.setAlgo}
          algnames={this.props.algnames}
          data_select={this.props.data_select}
          rightwrong={rightwrong}
          accuracy={accuracy}
          show_accuracy={show_accuracy}
          setAccuracy={setAccuracy}
        />

        <div
          style={{
            maxWidth: 700,
            margin: '0 auto',
            padding: grem / 2,
          }}
        >
          <div style={{ marginBottom: grem }}>
            <div>{topic_info.Title}</div>
            <div style={{ textIndent: grem }}>
              {topic_info.Year} &middot; {topic_info.Runtime} &middot;{' '}
              {topic_info.Rated}
            </div>
            <div style={{ textIndent: grem }}>
              {topic_info.Plot}{' '}
              <a href={`https://www.imdb.com/title/${topic_info.imdbID}`}>
                IMDB →
              </a>
            </div>
          </div>
          {analyze ? (
            <div style={{ marginBottom: grem }}>
              <div
                style={{
                  height: grem,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {analyze
                  ? combined.map((c, i) => (
                      <div
                        style={{
                          position: 'absolute',
                          left: `${(1 / combined.length) * i * 100}%`,
                          top: 0,
                          bottom: 0,
                          width: `${(1 / combined.length) * 100 + 0.05}%`,
                          background:
                            c.class === 'pos'
                              ? scaleBlue(c.certainty)
                              : scaleRed(c.certainty),
                        }}
                      />
                    ))
                  : null}
                <span style={{ position: 'relative' }}>
                  <span>
                    {reviews.length} review{reviews.length > 1 ? 's' : ''}
                    {analyze ? (
                      <span>
                        &middot; {counts[1]} positive (
                        {Math.floor((counts[1] / combined.length) * 1000) / 10}
                        %)
                      </span>
                    ) : null}
                  </span>
                </span>
              </div>
              {show_accuracy ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  {combined.map((c, i) => (
                    <div
                      style={{
                        position: 'absolute',
                        left: `${(1 / combined.length) * i * 100}%`,
                        bottom: 0,
                        height: grem,
                        width: `${(1 / combined.length) * 100 + 0.05}%`,
                        background:
                          c.label !== c.class
                            ? c.label === 'pos'
                              ? scaleBlue(1)
                              : scaleRed(1)
                            : '#ddd',
                      }}
                    />
                  ))}

                  <div style={{ position: 'relative' }}>
                    {rightwrong[0] > 0 ? (
                      <span>
                        {Math.floor((accuracy * 1000) / 10)}% accuracy (
                        {rightwrong[0]} wrong)
                      </span>
                    ) : (
                      <span>
                        {Math.floor((accuracy * 1000) / 10)}% accuracy
                      </span>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
          {analyze
            ? [
                [
                  'positive',
                  top_pos,
                  this.state.show_all_positive,
                  'show_all_positive',
                ],
                [
                  'negative',
                  top_neg,
                  this.state.show_all_negative,
                  'show_all_negative',
                ],
              ].map(a => (
                <div style={{ marginBottom: grem }}>
                  <div>
                    {a[1].length} {a[0]} review highlights
                  </div>
                  <div style={{ textIndent: grem }}>
                    {a[1].slice(0, a[2] ? Infinity : show_limit).map((s, i) => (
                      <span style={{}}>
                        <span
                          style={{
                            backgroundImage: `linear-gradient(${
                              s.background
                            }, ${s.background})`,
                            backgroundSize: '4px 7px',
                            backgroundRepeat: 'repeat-x',
                            backgroundPosition: `0 0.85em`,
                            paddingBottom: 2,
                          }}
                        >
                          {s.token}
                        </span>{' '}
                        by {s.author}{' '}
                        <Link href={`/review?id=${s.index}`}>
                          <a>{s.date} days ago</a>
                        </Link>{' '}
                        {a[1].length < show_limit && a[1].length - 1 === i ? (
                          ''
                        ) : (
                          <span>&middot;</span>
                        )}{' '}
                      </span>
                    ))}{' '}
                    {a[1].length > show_limit ? (
                      !a[2] ? (
                        <button
                          style={{ textDecoration: 'underline' }}
                          onClick={() => this.setState({ [a[3]]: true })}
                        >
                          show all
                        </button>
                      ) : (
                        <button
                          style={{ textDecoration: 'underline' }}
                          onClick={() => this.setState({ [a[3]]: false })}
                        >
                          show less
                        </button>
                      )
                    ) : null}
                  </div>
                </div>
              ))
            : null}
          <div>
            <div
              style={{
                display: 'flex',
                paddingBottom: grem / 2 - 0.5,
                marginBottom: grem / 2 - 0.5,
                marginLeft: -grem / 2,
                marginRight: -grem / 2,
                position: 'sticky',
                top: 0,
                paddingTop: grem / 2,
                paddingLeft: grem / 2,
                paddingRight: grem / 2,
                marginTop: -grem / 2,
                background: 'white',
                zIndex: 99,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  paddingRight: grem / 4,
                  marginLeft: -grem / 4,
                }}
              >
                <div style={{ paddingLeft: grem / 4, paddingRight: grem / 4 }}>
                  {reviews.length} reviews sorted by most:
                </div>
                {(analyze
                  ? show_accuracy
                    ? [
                        ['recent', 'date'],
                        ['positive', 'positive'],
                        ['negative', 'negative'],
                        ['accurate', 'accurate'],
                        ['inaccurate', 'inaccurate'],
                      ]
                    : [
                        ['recent', 'date'],
                        ['positive', 'positive'],
                        ['negative', 'negative'],
                      ]
                  : [['recent', 'date']]
                ).map(a =>
                  review_sort === a[1] ? (
                    <div
                      style={{
                        paddingLeft: grem / 4,
                        paddingRight: grem / 4,
                        background: '#222',
                        color: 'white',
                      }}
                    >
                      {a[0]}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setReviewSort(a[1])
                      }}
                      style={{
                        paddingLeft: grem / 4,
                        paddingRight: grem / 4,
                        textDecoration: 'underline',
                      }}
                    >
                      {a[0]}
                    </button>
                  )
                )}
              </div>
            </div>
            <div>
              {sorted.map((r, i) => (
                <Review
                  r={r}
                  i={i}
                  grem={grem}
                  analyze={analyze}
                  show_accuracy={show_accuracy}
                />
              ))}
            </div>
            <div style={{ marginBottom: 0 }}>
              <Link href="/">
                <a>See all movies and shows</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Page)
