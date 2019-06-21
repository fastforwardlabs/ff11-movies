import React from 'react'
import Link from '../parts/PrefixedLink'
import * as _ from 'lodash'
import * as d3 from 'd3'
import * as chroma from 'chroma-js'
import Bar from '../parts/Bar'
import {
  red,
  blue,
  scaleRed,
  scaleBlue,
  readableSentiment,
} from '../parts/Static'

let class_labels = ['negative', 'positive']

class Index extends React.Component {
  componentDidMount() {
    // let boxed = data.reduce((dict, current) => {
    //   let slice = Object.assign({}, dict)
    //   if (slice[current.url] === undefined) {
    //     slice[current.url] = 'exists'
    //   }
    //   return slice
    // }, {})
    // let movie_keys = Object.keys(boxed)
    // var promises = movie_keys.map((k, i) => {
    //   return fetch(`http://www.omdbapi.com/?apikey=af4abd65&i=${k}`)
    //     .then(r => r.json())
    //     .then(json => {
    //       let og_id = k
    //       if (json.Title === '#DUPE#') {
    //         return fetch(
    //           `http://www.omdbapi.com/?apikey=af4abd65&i=${json.imdbID}`
    //         )
    //           .then(r => r.json())
    //           .then(json => {
    //             let json_mod = Object.assign({}, json)
    //             json_mod.og_id = og_id
    //             return json_mod
    //           })
    //       } else {
    //         let json_mod = Object.assign({}, json)
    //         json_mod.og_id = og_id
    //         return json_mod
    //       }
    //     })
    // })
    // Promise.all(promises).then(function(results) {
    //   console.log(JSON.stringify(results))
    // })
  }

  render() {
    let {
      font_size,
      line_height,
      grem,
      analyze,
      data,
      info,
      reviews,
      setAnalyze,
      sort,
      setSort,
      show_accuracy,
      setAccuracy,
    } = this.props
    let sorted = info.map(o => {
      let new_o = Object.assign({}, o)
      new_o.children = []
      new_o.id = o.og_id
      return new_o
    })
    let ids = sorted.map(o => o.id)
    if (data !== null) {
      for (let i = 0; i < data.length; i++) {
        let o = data[i]
        let id = o.url
        let index = ids.indexOf(id)
        if (index === -1) {
          console.log('miss')
        } else {
          sorted[index].children.push(o)
        }
      }
      if (sort === 'reviews') {
        sorted = _.sortBy(sorted, [
          function(o) {
            return o.children.length
          },
        ])
        sorted.reverse()
      } else if (sort === 'positive') {
        sorted = _.sortBy(sorted, [
          function(o) {
            return (
              o.children.reduce(
                (total, r) => (r.class === 'neg' ? total + 1 : total),
                0
              ) / o.children.length
            )
          },
          function(o) {
            return -o.children.length
          },
        ])
      } else if (sort === 'negative') {
        sorted = _.sortBy(sorted, [
          function(o) {
            return (
              -o.children.reduce(
                (total, r) => (r.class === 'neg' ? total + 1 : total),
                0
              ) / o.children.length
            )
          },
          function(o) {
            return -o.children.length
          },
        ])
      } else if (sort === 'accurate') {
        sorted = _.sortBy(sorted, [
          function(o) {
            return (
              o.children.reduce(
                (total, r) => (r.label !== r.class ? total + 1 : total),
                0
              ) / o.children.length
            )
          },
          function(o) {
            return -o.children.length
          },
        ])
      } else if (sort === 'inaccurate') {
        sorted = _.sortBy(sorted, [
          function(o) {
            return (
              -o.children.reduce(
                (total, r) => (r.label !== r.class ? total + 1 : total),
                0
              ) / o.children.length
            )
          },
          function(o) {
            return -o.children.length
          },
        ])
      }
    }

    let pos_count = data.reduce((total, o) => {
      if (o.class === 'pos') {
        return (total = total + 1)
      } else {
        return total
      }
    }, 0)

    let neg_count = data.reduce((total, o) => {
      if (o.class === 'neg') {
        return (total = total + 1)
      } else {
        return total
      }
    }, 0)

    // overloading this variables, will probably come back to bite me
    let winner_name = 'positive'
    if (neg_count > pos_count) winner_name = 'negative'
    let total_counts = [neg_count, pos_count]

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

    let total_rightwrong = data.reduce(
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
    let total_accuracy = total_rightwrong[1] / data.length

    return (
      <div style={{ paddingBottom: grem / 2 }}>
        <Bar
          grem={grem}
          setAnalyze={setAnalyze}
          analyze={analyze}
          combined={combined}
          total={true}
          setAlgo={this.props.setAlgo}
          algnames={this.props.algnames}
          data_select={this.props.data_select}
          rightwrong={total_rightwrong}
          accuracy={total_accuracy}
          show_accuracy={show_accuracy}
          setAccuracy={setAccuracy}
        />

        <div
          style={{
            display: 'flex',
            position: 'sticky',
            top: 0,
            background: 'white',
            borderBottom: 'solid 1px black',
            zIndex: 999,
          }}
        >
          <div
            style={{
              paddingTop: grem / 2,
              paddingBottom: grem / 2,
              paddingLeft: grem / 2,
              paddingRight: grem / 4,
            }}
          >
            {sorted.length} movies & shows sorted by most:
          </div>
          <div
            style={{
              display: 'flex',
              paddingRight: grem / 4,
              paddingTop: grem / 2,
              paddingBottom: grem / 2,
            }}
          >
            {(analyze
              ? show_accuracy
                ? [
                    ['reviews', 'reviews'],
                    ['positive', 'positive'],
                    ['negative', 'negative'],
                    ['accurate', 'accurate'],
                    ['inaccurate', 'inaccurate'],
                  ]
                : [
                    ['reviews', 'reviews'],
                    ['positive', 'positive'],
                    ['negative', 'negative'],
                  ]
              : [['reviews', 'reviews']]
            ).map(a =>
              sort === a[1] ? (
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
                    setSort(a[1])
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
          <div style={{ paddingBottom: grem / 2, paddingTop: grem / 2 }}>
            <div
              style={{
                borderBottom: 'none',
                margin: `-1px -1px -1px -1px`,
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
                gridColumnGap: grem,
                gridRowGap: grem,
                padding: `0 ${grem / 2}px`,
              }}
            >
              {data ? (
                <>
                  {sorted.map((o, i) => {
                    let topic_info = o
                    let reviews = data.filter(r => r.url === o.id)

                    let counts = reviews.reduce(
                      (counts, r) => {
                        let slice = counts.slice()
                        if (r.logits[1] > r.logits[0]) {
                          slice[1] += 1
                        } else {
                          slice[0] += 1
                        }
                        return slice
                      },
                      [0, 0]
                    )

                    let actual = reviews.reduce(
                      (counts, r) => {
                        let slice = counts.slice()
                        if (r.label === 'pos') {
                          slice[1] += 1
                        } else if (r.label === 'neg') {
                          slice[0] += 1
                        }
                        return slice
                      },
                      [0, 0]
                    )

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

                    let winner_count_index = 0
                    if (counts[1] > counts[0]) winner_count_index = 1
                    let winner_names = ['negative', 'positive']
                    let winner_name = winner_names[winner_count_index]

                    let certainty_array = reviews.map(r => {
                      if (r.logits[1] > r.logits[0]) {
                        return {
                          class: r.class,
                          label: r.label,
                          certainty: r.class_probabilities[1],
                          correct: r.class === r.label,
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

                    return (
                      <Link href={`/topic2?id=${o.id}`}>
                        <a
                          className="no-underline hover-block-container no-opacity-hover"
                          style={{
                            position: 'relative',
                            height: 12 * grem,
                            cursor: 'zoom-in',
                          }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              left: -grem / 2 - 0.5,
                              top: -grem / 2 - 0.5,
                              right: -grem / 2 - 0.5,
                              bottom: -grem / 2 - 0.5,
                              backgroundImage: `url(${o.Poster})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center center',
                              filter: `grayscale(1) contrast(10) opacity(0.0875)`,
                              display: 'none',
                            }}
                          />
                          <div
                            style={{
                              position: 'absolute',
                              left: -grem / 2 - 0.5,
                              top: -grem / 2 - 0.5,
                              right: -grem / 2 - 0.5,
                              bottom: -grem / 2 - 0.5,
                              border: 'solid 1px black',
                            }}
                          />
                          {analyze ? (
                            <div
                              style={{
                                position: 'absolute',
                                left: 0,
                                bottom: show_accuracy ? grem : 0,
                                right: 0,
                                height: grem,
                              }}
                            >
                              <div
                                style={{
                                  position: 'relative',
                                  overflow: 'hidden',
                                  height: grem,
                                }}
                              >
                                {combined.map((c, i) => (
                                  <div
                                    style={{
                                      position: 'absolute',
                                      left: `${(1 / combined.length) *
                                        i *
                                        100}%`,
                                      bottom: 0,
                                      height: grem,
                                      width: `${(1 / combined.length) * 100 +
                                        0.05}%`,
                                      background:
                                        c.class === 'pos'
                                          ? scaleBlue(c.certainty)
                                          : scaleRed(c.certainty),
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                          ) : null}
                          <div
                            style={{
                              display: '-webkit-box',
                              webkitBoxOrient: 'vertical',
                              WebkitLineClamp: 7,
                              overflow: 'hidden',
                            }}
                          >
                            <div
                              style={{
                                textDecoration: 'underline',
                                position: 'relative',
                              }}
                            >
                              {topic_info.Title}
                            </div>
                            <div style={{ textIndent: grem }}>
                              {topic_info.Year} &middot; {topic_info.Runtime}{' '}
                              &middot; {topic_info.Rated}
                            </div>
                            <div style={{ textIndent: grem }}>
                              {topic_info.Plot}
                            </div>
                          </div>
                          <div
                            style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                            }}
                          >
                            <div>
                              {reviews.length} reviews
                              {analyze ? (
                                <span>
                                  &middot; {counts[1]} positive (
                                  {Math.floor(
                                    (counts[1] / combined.length) * 100
                                  ) / 1}
                                  %)
                                </span>
                              ) : null}
                            </div>
                            {show_accuracy ? (
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
                                      left: `${(1 / combined.length) *
                                        i *
                                        100}%`,
                                      bottom: 0,
                                      height: grem,
                                      width: `${(1 / combined.length) * 100 +
                                        0.05}%`,
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
                                      {Math.floor((accuracy * 1000) / 10)}%
                                      accuracy ({rightwrong[0]} wrong)
                                    </span>
                                  ) : (
                                    <span>
                                      {Math.floor((accuracy * 1000) / 10)}%
                                      accuracy
                                    </span>
                                  )}
                                </div>
                              </div>
                            ) : null}
                          </div>
                          <div
                            className="hover-block"
                            style={{
                              position: 'absolute',
                              left: -grem / 2 - 0.5,
                              top: -grem / 2 - 0.5,
                              right: -grem / 2 - 0.5,
                              bottom: -grem / 2 - 0.5,
                              background: 'rgba(0,0,0,0.0625)',
                            }}
                          />
                        </a>
                      </Link>
                    )
                  })}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
