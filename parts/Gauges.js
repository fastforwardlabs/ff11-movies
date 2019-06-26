import React from 'react'
import {
  scaleRed,
  scaleBlue,
  scaleTextRed,
  scaleTextBlue,
  colorExtend,
  class_labels,
} from '../parts/Static'

class Gauges extends React.Component {
  render() {
    let { grem, data, total = false, analyze, show_accuracy } = this.props

    let certainty_array = data.map(r => {
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

    let rightwrong = data.reduce(
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
    let accuracy = rightwrong[1] / data.length

    let counts = [
      combined.filter(r => r.class === 'neg').length,
      combined.filter(r => r.class === 'pos').length,
    ]

    return (
      <div
        style={{
          maxWidth: 700,
          margin: '0 auto',
          paddingLeft: grem / 2,
          paddingRight: grem / 2,
        }}
      >
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {combined.map((c, i) => (
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
          ))}

          <div style={{ position: 'relative' }}>
            {combined.length} {total ? 'total ' : ''} review
            {combined.length > 1 ? 's' : ''}
            {analyze ? (
              <span>
                {' '}
                &middot; {counts[1]} positive (
                {Math.round((counts[1] / combined.length) * 100)}%)
              </span>
            ) : null}
          </div>
        </div>
        {show_accuracy ? (
          <div>
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
              }}
            >
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
                  <span>{Math.floor((accuracy * 1000) / 10)}% accuracy</span>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Gauges
