import { withRouter } from 'next/router'
import Link from 'next/link'
import * as chroma from 'chroma-js'
import Head from 'next/head'
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
  Border,
} from '../parts/Static'
import Sentences from '../parts/Sentences'
import Reviews from '../parts/Reviews'

let link_prefix = process.env.BACKEND_URL

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
      data_select,
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
      compare,
      setCompare,
      nbsvm_data,
      hl_options,
      tour = false,
    } = this.props

    let info_ids = info.map(o => o.og_id)
    let topic_info = info[info_ids.indexOf(router.query.id)]
    let reviews = data.filter(o => o.url === router.query.id)
    let nreviews = nbsvm_data.filter(o => o.url === router.query.id)

    // compare and show_accuracy only when analyze is on
    show_accuracy = show_accuracy && analyze
    compare = compare && analyze

    let stick_top = grem * 2
    if (show_accuracy || compare) stick_top = grem * 3
    if (show_accuracy && compare) {
      stick_top = grem * 5
    } else if (show_accuracy) {
      stick_top = grem * 3
    } else if (compare) {
      stick_top = grem * 4
    }

    return (
      <div>
        <Head>
          <title>Textflix: {topic_info.Title}</title>
        </Head>

        <Bar
          grem={grem}
          setAnalyze={setAnalyze}
          analyze={analyze}
          setAlgo={this.props.setAlgo}
          algnames={this.props.algnames}
          data_select={this.props.data_select}
          show_accuracy={show_accuracy}
          setAccuracy={setAccuracy}
          compare={compare}
          setCompare={setCompare}
          data={reviews}
          nbsvm_data={nreviews}
          hl_options={hl_options}
        />

        <div style={{}}>
          <div
            style={{
              maxWidth: 700,
              margin: '0 auto',
              padding: grem / 2,
            }}
          >
            <div style={{ marginBottom: grem * 0 }}>
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
          </div>
        </div>

        {analyze ? (
          <div
            id={tour ? 'sentences-block' : null}
            style={{
              zIndex: 998,
              position: 'relative',
              background: hl_options.highlight_sentences_block
                ? '#eee'
                : 'white',
              transition: 'background 0.1s linear',
            }}
          >
            {compare ? <Border /> : null}
            <div
              style={{
                maxWidth: compare ? 700 * 2 + grem + 2 : 700,
                margin: '0 auto',
                display: compare ? 'grid' : 'block',
                gridTemplateColumns: '1fr 1fr',
              }}
            >
              {compare ? (
                <div style={{ borderRight: 'solid 1px black' }}>
                  <Sentences grem={grem} reviews={nreviews} analyze={analyze} />
                </div>
              ) : null}
              <div style={{ borderLeft: compare ? 'solid 1px black' : 'none' }}>
                <Sentences grem={grem} reviews={reviews} analyze={analyze} />
              </div>
            </div>
            {compare ? <Border /> : null}
          </div>
        ) : null}

        <div
          id={tour ? 'reviews-block' : null}
          style={{
            // position: 'sticky',
            position: 'relative',
            // top: stick_top,
            background: hl_options.highlight_reviews_block ? '#eee' : 'white',
          }}
        >
          <div
            style={{
              maxWidth: 700,
              margin: '0 auto',
              padding: grem / 2,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
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
                    key={a[0]}
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
                    key={a[0]}
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
        </div>

        <div
          style={{
            position: 'relative',
            background: hl_options.highlight_reviews_block ? '#eee' : 'white',
            transition: 'background 0.1s linear',
          }}
        >
          {compare ? <Border /> : null}
          <div
            style={{
              maxWidth: compare ? 700 * 2 + grem + 2 : 700,
              margin: '0 auto',
              display: compare ? 'grid' : 'block',
              gridTemplateColumns: '1fr 1fr',
            }}
          >
            {compare ? (
              <div style={{ borderRight: 'solid 1px black' }}>
                <Reviews
                  reviews={nreviews}
                  grem={grem}
                  analyze={analyze}
                  show_accuracy={show_accuracy}
                  review_sort={review_sort}
                  setReviewSort={setReviewSort}
                  data_type="compare"
                />
              </div>
            ) : null}
            <div style={{ borderLeft: compare ? 'solid 1px black' : 'none' }}>
              <Reviews
                reviews={reviews}
                grem={grem}
                analyze={analyze}
                show_accuracy={show_accuracy}
                review_sort={review_sort}
                setReviewSort={setReviewSort}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Page)
