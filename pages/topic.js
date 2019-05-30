import { withRouter } from 'next/router'
import { info } from '../data/sample_movie_info.js'
import { names } from '../data/first_names.js'
import * as chroma from 'chroma-js'
import * as _ from 'lodash'
import { nouns, adjectives } from '../data/corpora.js'

let class_labels = ['negative', 'positive']
let red = chroma('red').luminance(0.35)
let blue = chroma('blue').luminance(0.35)
let scaleRed = chroma.scale(['white', red]).mode('lch')
let scaleBlue = chroma.scale(['white', blue]).mode('lch')

const Page = withRouter(
  ({ font_size, line_height, grem, router, analyze, data }) => {
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

    let winner_count_index = 0
    if (counts[1] > counts[0]) winner_count_index = 1
    let winner_names = ['negative', 'positive']
    let winner_name = winner_names[winner_count_index]

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
              padding: grem / 2,
              borderBottom: 'solid 1px black',
            }}
          >
            <div
              style={{
                fontSize: font_size * 2,
                lineHeight: 1.25,
                marginBottom: grem / 2,
              }}
            >
              {topic_info.Title}
            </div>
            <div>{topic_info.Plot}</div>
          </div>

          {analyze ? (
            <div
              style={{
                padding: grem / 2,
                position: 'relative',
                borderBottom: 'solid 1px black',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: `${(counts[1] / reviews.length) * 100}%`,
                  background: scaleBlue(1),
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: `${(counts[0] / reviews.length) * 100}%`,
                  background: scaleRed(1),
                }}
              />

              <div style={{ position: 'relative', textAlign: 'center' }}>
                {Math.round(
                  (counts[winner_count_index] / reviews.length) * 1000
                ) / 10}
                % {winner_name} reviews ({Math.round(accuracy * 1000) / 10}%
                accuracy)
              </div>
            </div>
          ) : null}
          <div>
            {reviews.map(r => {
              let winner_name = r.class
              let winner_index, scaleWinner, scaleLoser
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
                  return scaleRed(Math.abs(value) / max)
                } else {
                  return scaleBlue(Math.abs(value) / max)
                }
              }

              return (
                <div
                  style={{
                    borderBottom: 'solid 1px black',
                    display: 'grid',
                    gridTemplateColumns: `180px 1fr`,
                  }}
                >
                  <div
                    style={{
                      padding: grem / 2,
                    }}
                  >
                    <img
                      src={`/static/images/cifar_${Math.floor(
                        Math.random() * 130
                      )}.png`}
                      style={{
                        width: grem * 2,
                        height: grem * 2,
                        filter: `grayscale(100%) contrast(2) brightness(2)`,
                        imageRendering: 'pixelated',
                      }}
                    />
                    <div
                      style={{
                        fontSize: font_size * 0.875,
                        lineHeight: 1.5,
                        wordBreak: 'break-word',
                      }}
                    >
                      {_.sample(adjectives)
                        .toLowerCase()
                        .replace('-', '') +
                        _.sample(nouns)
                          .toLowerCase()
                          .replace('-', '')}
                    </div>
                  </div>
                  <div
                    style={{
                      borderLeft: 'solid 1px black',
                    }}
                  >
                    {analyze ? (
                      <div
                        style={{
                          padding: `${grem / 4}px ${grem / 2}px`,
                          background: scaleWinner(
                            r.class_probabilities[winner_index]
                          ),
                        }}
                      >
                        classification: {class_labels[winner_index]} (
                        {Math.round(r.class_probabilities[winner_index] * 100)}
                        %)
                      </div>
                    ) : null}
                    <div
                      style={{
                        padding: grem,
                      }}
                    >
                      {r.lime_tokens.map((t, i) => {
                        let score = r.lime_scores[i]
                        return (
                          <span>
                            {' '}
                            <span
                              style={{
                                background: analyze
                                  ? scaleScore(score)
                                  : 'transparent',
                              }}
                            >
                              {t}
                            </span>
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
)

export default Page
