import React from 'react'
// import { data } from '../data/nbsvm_lime_grouped_pretty_word'
// import { data } from '../data/bert_lime_grouped_pretty'
import { data } from '../data/nbsvm_lime_grouped_pretty'
import { info } from '../data/sample_movie_info'
import Link from '../parts/PrefixedLink'
import * as _ from 'lodash'
import * as d3 from 'd3'
import * as chroma from 'chroma-js'

let class_labels = ['negative', 'positive']
let red = chroma('red').luminance(0.35)
let blue = chroma('blue').luminance(0.35)
let scaleRed = chroma.scale(['white', red]).mode('lch')
let scaleBlue = chroma.scale(['white', blue]).mode('lch')

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
    let { font_size, line_height, grem, analyze, data } = this.props
    let sorted = info.map(o => {
      return { title: o.Title, id: o.og_id, plot: o.Plot, children: [] }
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
      sorted = _.sortBy(sorted, [
        function(o) {
          return o.children.length
        },
      ])
      sorted.reverse()
    }
    return (
      <div>
        <div>
          <div style={{ paddingTop: grem, paddingBottom: grem * 3 }}>
            <div
              style={{
                maxWidth: 840,
                border: 'solid 1px black',
                borderBottom: 'none',
                margin: `0 auto`,
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `1fr ${grem * 6}px`,
                  borderBottom: 'solid 1px black',
                  fontWeight: 700,
                  fontSize: font_size * 0.875,
                }}
              >
                <div
                  style={{
                    lineHeight: line_height,
                    padding: grem / 2,
                  }}
                >
                  TOPIC
                </div>
                <div
                  style={{
                    padding: grem / 2,
                    textAlign: 'center',
                  }}
                >
                  REVIEWS
                </div>
              </div>

              {data ? (
                <div>
                  {sorted.map((o, i) => {
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

                    return (
                      <Link href={`/topic?id=${o.id}`}>
                        <a
                          className="no-underline gray-hover"
                          style={{
                            display: 'grid',
                            gridTemplateColumns: `1fr ${grem * 6}px`,
                            borderBottom: 'solid 1px black',
                          }}
                        >
                          <div
                            style={{
                              padding: grem / 2,
                            }}
                          >
                            <div
                              style={{
                                fontWeight: 700,
                                textDecoration: 'underline',
                              }}
                            >
                              {o.title}
                            </div>
                            <div
                              style={{
                                fontSize: font_size * 0.875,
                                lineHeight: line_height,
                              }}
                            >
                              {o.plot}
                            </div>
                          </div>
                          <div
                            style={{
                              padding: grem / 2,
                              fontSize: font_size * 0.875,
                              textAlign: 'center',
                              display: 'grid',
                              alignItems: 'center',
                              position: 'relative',
                            }}
                          >
                            {analyze ? (
                              <>
                                <div
                                  style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: `${(counts[1] / reviews.length) *
                                      100}%`,
                                    background: scaleBlue(1),
                                  }}
                                />
                                <div
                                  style={{
                                    position: 'absolute',
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: `${(counts[0] / reviews.length) *
                                      100}%`,
                                    background: scaleRed(1),
                                  }}
                                />
                              </>
                            ) : null}

                            <div style={{ position: 'relative' }}>
                              <div>{o.children.length}</div>
                              {analyze ? (
                                <>
                                  <div>
                                    {Math.round(
                                      (counts[winner_count_index] /
                                        reviews.length) *
                                        1000
                                    ) / 10}
                                    % {winner_name}
                                  </div>
                                  <div>
                                    {counts[1]} | {counts[0]}
                                  </div>
                                  <div>
                                    actual: {actual[1]} | {actual[0]}
                                  </div>
                                  <div>
                                    accuracy: {Math.round(accuracy * 1000) / 10}
                                    %
                                  </div>
                                </>
                              ) : null}
                            </div>
                          </div>
                        </a>
                      </Link>
                    )
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
