import React from 'react'
import Link from 'next/link'
import * as _ from 'lodash'
import {
  scaleRed,
  scaleBlue,
  scaleTextBlue,
  scaleTextRed,
  colorExtend,
  class_labels,
} from '../parts/Static'

class Sentences extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show_all_positive: false,
      show_all_negative: false,
    }
  }

  render() {
    let { reviews, analyze, grem } = this.props
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
    return analyze ? (
      <div style={{ padding: grem / 2 }}>
        {[
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
        ].map((a, i) => (
          <div style={{ marginBottom: i == 0 ? grem : 0 }}>
            <div>
              {a[1].length} {a[0]} review highlights
            </div>
            <div style={{ textIndent: grem }}>
              {a[1].slice(0, a[2] ? Infinity : show_limit).map((s, i) => (
                <span style={{}}>
                  <span
                    style={{
                      backgroundImage: `linear-gradient(${s.background}, ${
                        s.background
                      })`,
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
        ))}
      </div>
    ) : null
  }
}

export default Sentences
