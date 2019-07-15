import React from 'react'
import Link from 'next/Link'
import * as chroma from 'chroma-js'
import { scaleRed, scaleBlue, Border } from './Static'
import { p } from './Utils'

class Bar extends React.Component {
  render() {
    let {
      data,
      nbsvm_data,
      grem,
      analyze,
      setAnalyze,
      total,
      setAlgo,
      show_accuracy,
      setAccuracy,
      compare,
      setCompare,
      is_front = false,
      hl_options,
      analyze_locked = false,
    } = this.props

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

    let ncertainty_array = nbsvm_data.map(r => {
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
    let npos = _.sortBy(
      ncertainty_array.filter(r => r.class === 'pos'),
      'certainty'
    ).reverse()
    let nneg = _.sortBy(
      ncertainty_array.filter(r => r.class === 'neg'),
      'certainty'
    )
    let ncombined = [...npos, ...nneg]

    let nrightwrong = nbsvm_data.reduce(
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
    let naccuracy = nrightwrong[1] / data.length

    let counts = [
      combined.filter(r => r.class === 'neg').length,
      combined.filter(r => r.class === 'pos').length,
    ]
    let ncounts = [
      ncombined.filter(r => r.class === 'neg').length,
      ncombined.filter(r => r.class === 'pos').length,
    ]

    return (
      <div
        style={{
          background: 'white',
          transition: 'background 0.1s linear',
          position: 'sticky',
          zIndex: 999,
          top: 0,
          minWidth: compare ? 600 : 'auto',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              padding: p(grem / 2, grem / 4),
              alignItems: 'top',
            }}
          >
            {!is_front && false ? (
              <Link href="/">
                <a
                  className="hover-block-container no-opacity-hover"
                  style={{
                    display: 'block',
                    padding: p(grem / 2 + grem * 0.125, grem / 2),
                    marginLeft: -grem / 4,
                    marginTop: -grem / 4,
                    marginRight: grem / 4,
                    marginBottom: -(grem / 4 + 1),
                    borderRight: 'solid 1px black',
                    borderBottom: 'solid 1px black',
                    position: 'relative',
                    textDecoration: 'none',
                  }}
                >
                  <div
                    style={{
                      width: grem * 0.75,
                      height: grem * 0.75,
                      border: 'solid 1px black',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: (grem * 0.75) / 2 - 1,
                        height: grem * 0.75 - 2,
                        borderRight: 'solid 1px black',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: (grem * 0.75) / 2 - 1,
                        width: grem * 0.75 - 2,
                        borderBottom: 'solid 1px black',
                      }}
                    />
                  </div>
                  <div className="hover-block" />
                </a>
              </Link>
            ) : null}
            <button
              onClick={() => {
                if (!analyze_locked) setAnalyze(!analyze)
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: p(0, grem / 4),
                opacity: analyze_locked ? 1 : null,
                cursor: analyze_locked ? 'default' : 'pointer',
                height: grem,
              }}
            >
              <div
                style={{
                  width: grem * 0.5,
                  height: grem * 0.5,
                  border: 'solid 1px black',
                  background: analyze ? 'black' : 'white',
                  marginRight: grem / 4,
                }}
              />
              <div
                style={{
                  textDecoration: analyze_locked ? 'none' : 'underline',
                }}
              >
                Analyze{analyze ? ':' : ''}
              </div>
            </button>
            {analyze ? (
              <>
                <div style={{ display: 'flex' }}>
                  <button
                    onClick={() => {
                      if (!analyze_locked) setAccuracy(!show_accuracy)
                    }}
                    style={{
                      display: 'flex',
                      opacity: analyze_locked ? 1 : null,
                      cursor: analyze_locked ? 'default' : 'pointer',
                      padding: p(0, grem / 4),
                      alignItems: 'center',
                      height: grem,
                    }}
                  >
                    <div
                      style={{
                        width: grem * 0.5,
                        height: grem * 0.5,
                        marginRight: grem / 4,
                        border: 'solid 1px black',
                        background: show_accuracy ? 'black' : 'white',
                      }}
                    />
                    <div
                      style={{
                        textDecoration: analyze_locked ? 'none' : 'underline',
                      }}
                    >
                      accuracy
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      if (!analyze_locked) setCompare(!compare)
                    }}
                    style={{
                      display: 'flex',
                      opacity: analyze_locked ? 1 : null,
                      cursor: analyze_locked ? 'default' : 'pointer',
                      padding: p(0, grem / 4),
                      alignItems: 'center',

                      height: grem,
                    }}
                  >
                    <div
                      style={{
                        width: grem * 0.5,
                        height: grem * 0.5,
                        border: 'solid 1px black',
                        background: compare ? 'black' : 'white',
                        marginRight: grem / 4,
                      }}
                    />
                    <div
                      style={{
                        textDecoration: analyze_locked ? 'none' : 'underline',
                      }}
                    >
                      model comparison
                    </div>
                  </button>
                </div>
              </>
            ) : null}
            {analyze && !compare ? (
              <div
                style={{
                  padding: p(show_accuracy && false ? 0 : 0, grem / 4),
                  flexGrow: 1,
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  {combined.map((c, i) => (
                    <div
                      key={'certainty_' + i}
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
                          key={'certainty2_' + i}
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
                                : 'white',
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
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
          <Border />
        </div>
        {compare && analyze ? (
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
              }}
            >
              {[['NBSVM'], ['BERT']].map((item, i) => {
                let n = i === 0
                let cert = n ? ncombined : combined
                let co = n ? ncounts : counts
                let rw = n ? nrightwrong : rightwrong
                let acc = n ? naccuracy : accuracy
                return (
                  <div
                    key={'items_' + item[0]}
                    style={{
                      borderLeft: i === 1 ? 'solid 2px black' : 'none',
                      marginLeft: i === 1 ? -1 : 0,
                      background: 'white',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        paddingLeft: grem / 2,
                        paddingTop: grem / 2,
                        paddingBottom: grem / 2,
                      }}
                    >
                      {item[0]}
                    </div>
                    <div
                      style={{
                        padding: `${
                          show_accuracy && false ? 0 : grem / 2
                        }px ${grem / 2}px`,
                        flexGrow: 1,
                      }}
                    >
                      <div style={{ position: 'relative', overflow: 'hidden' }}>
                        {cert.map((c, i) => (
                          <div
                            key={'certaint3_' + i}
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
                              &middot; {co[1]} positive (
                              {Math.round((co[1] / combined.length) * 100)}
                              %)
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
                            {cert.map((c, i) => (
                              <div
                                key={'accuracy_' + i}
                                style={{
                                  position: 'absolute',
                                  left: `${(1 / combined.length) * i * 100}%`,
                                  bottom: 0,
                                  height: grem,
                                  width: `${(1 / combined.length) * 100 +
                                    0.05}%`,
                                  background:
                                    c.label !== c.class
                                      ? c.label === 'pos'
                                        ? scaleBlue(1)
                                        : scaleRed(1)
                                      : '#fff',
                                }}
                              />
                            ))}

                            <div style={{ position: 'relative' }}>
                              {rw[0] > 0 ? (
                                <span>
                                  {Math.floor((acc * 1000) / 10)}% accuracy (
                                  {rw[0]} wrong)
                                </span>
                              ) : (
                                <span>
                                  {Math.floor((acc * 1000) / 10)}% accuracy
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                )
              })}
            </div>
            <Border />
          </div>
        ) : null}
      </div>
    )
  }
}
export default Bar
