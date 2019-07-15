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

class Review extends React.Component {
  render() {
    let {
      r,
      i,
      grem,
      analyze,
      show_accuracy,
      is_review,
      info,
      threshold = 0.5,
      hide_author = false,
      classification_label = '',
      show_title = false,
    } = this.props

    let winner_index, scaleWinner, scaleLoser
    let winner_name = r.class
    if (r.class_probabilities[1] > r.class_probabilities[0]) {
      winner_index = 1
      scaleWinner = scaleBlue
      scaleLoser = scaleRed
    } else {
      winner_index = 0
      scaleWinner = scaleRed
      scaleLoser = scaleBlue
    }

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

    let topic_info = null
    if (show_title) {
      topic_info = _.find(info, { og_id: r.url })
    }

    return (
      <div
        style={{
          marginBottom: is_review ? 0 : grem,
        }}
      >
        {analyze ? (
          <div style={{ marginTop: grem * 0, marginBottom: grem * 0 }}>
            <div
              style={{
                background: scaleWinner(r.class_probabilities[winner_index]),
              }}
            >
              <span>
                {classification_label}classification:{' '}
                {class_labels[winner_index]}
              </span>{' '}
              &middot;{' '}
              <span style={{}}>
                {Math.floor(r.class_probabilities[winner_index] * 1000) / 10}%
                certainty
              </span>
            </div>
            {show_accuracy ? (
              <div
                style={{
                  background: r.label === 'pos' ? scaleBlue(1) : scaleRed(1),
                }}
              >
                label: {r.label === 'pos' ? 'positive' : 'negative'} &middot;{' '}
                {r.label === r.class ? 'accurate' : 'inaccurate'} classification
              </div>
            ) : null}
          </div>
        ) : null}
        {!hide_author ? (
          <div style={{ textIndent: grem * 0 }}>
            {show_title ? (
              <span>
                Review for{' '}
                <Link href={`/topic2?id=${topic_info.og_id}`}>
                  <a>{topic_info.Title}</a>
                </Link>{' '}
              </span>
            ) : null}
            by {r.author} &middot;{' '}
            {is_review ? (
              <span>{r.date} days ago</span>
            ) : (
              <Link href={`/review?id=${r.index}`}>
                <a>{r.date} days ago</a>
              </Link>
            )}
          </div>
        ) : null}

        <div style={{ marginBottom: grem * 0 }}>
          <div>
            <div>
              <div style={{ textIndent: grem * 1 }}>
                {r.lime_tokens.map((t, i) => {
                  let score = r.lime_scores[i]
                  let background = analyze
                    ? Math.abs(score) / max > threshold
                      ? scaleScore(score)
                      : 0
                    : 'transparent'
                  return (
                    <span key={t}>
                      {' '}
                      <span
                        style={{
                          backgroundImage: `linear-gradient(${background}, ${background})`,
                          backgroundSize: '4px 5px',
                          backgroundRepeat: 'repeat-x',
                          backgroundPosition: `0 0.85em`,
                          paddingBottom: 2,
                        }}
                      >
                        {t}
                      </span>{' '}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Review
