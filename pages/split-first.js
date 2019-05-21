import React from 'react'
import { data } from '../data/bert_lime_grouped_pretty'
import * as _ from 'lodash'
import * as d3 from 'd3'
import * as chroma from 'chroma-js'

let class_labels = ['negative', 'positive']
let red = chroma('red').luminance(0.35)
let blue = chroma('blue').luminance(0.35)
let scaleRed = chroma.scale(['white', red]).mode('lch')
let scaleBlue = chroma.scale(['white', blue]).mode('lch')

function App() {
  let negative = data.filter(r => r.class === 'neg')
  let positive = data.filter(r => r.class === 'pos')

  return (
    <div>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          font-family: sans-serif;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          font-size: 16;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
      `}</style>
      <div
        style={{ display: 'none', width: 20 * 20, margin: `20px auto 40px` }}
      >
        <div style={{ display: 'flex' }}>
          {scaleRed
            .colors(10)
            .reverse()
            .map(c => (
              <div style={{ height: 20, width: 20, background: c }} />
            ))}
        </div>
        <div style={{ display: 'flex' }}>
          {scaleBlue.colors(10).map(c => (
            <div style={{ height: 20, width: 20, background: c }} />
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ height: '100vh', overflow: 'auto' }}>
          <div>{positive.length} positive class reviews</div>
          {positive.map(r => {
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
                style={{ maxWidth: 660, padding: `0px 20px`, margin: `0 auto` }}
              >
                <div>
                  <a
                    href={`https://www.imdb.com/title/${r.url}`}
                  >{`https://www.imdb.com/title/${r.url}`}</a>
                </div>
                <div style={{ padding: `10px 0 10px 0` }}>
                  {r.lime_tokens.map((t, i) => {
                    let score = r.lime_scores[i]
                    return (
                      <span>
                        <span
                          style={{
                            background: scaleScore(score),
                          }}
                        >
                          {t} ({r.lime_scores[i]})
                        </span>{' '}
                      </span>
                    )
                  })}
                </div>
                <div
                  style={{
                    marginBottom: 20,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                  }}
                >
                  <div
                    style={{
                      padding: 10,
                      background: scaleWinner(
                        r.class_probabilities[winner_index]
                      ),
                    }}
                  >
                    {class_labels[winner_index]}:{' '}
                    {Math.round(r.class_probabilities[winner_index] * 100)}%
                  </div>
                  <div
                    style={{
                      padding: 10,
                      background:
                        r.label === 'pos' ? scaleRed(1) : scaleBlue(1),
                    }}
                  >
                    label: {r.label}
                  </div>
                </div>
                <hr />
              </div>
            )
          })}
        </div>
        <div style={{ height: '100vh', overflow: 'auto' }}>
          <div>{negative.length} negative class reviews</div>
          {negative.map(r => {
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
                style={{ maxWidth: 660, padding: `0px 20px`, margin: `0 auto` }}
              >
                <div>
                  <a
                    href={`https://www.imdb.com/title/${r.url}`}
                  >{`https://www.imdb.com/title/${r.url}`}</a>
                </div>
                <div style={{ padding: `10px 0 10px 0` }}>
                  {r.lime_tokens.map((t, i) => {
                    let score = r.lime_scores[i]
                    return (
                      <span>
                        <span
                          style={{
                            background: scaleScore(score),
                          }}
                        >
                          {t} ({r.lime_scores[i]})
                        </span>{' '}
                      </span>
                    )
                  })}
                </div>
                <div
                  style={{
                    marginBottom: 20,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                  }}
                >
                  <div
                    style={{
                      padding: 10,
                      background: scaleWinner(
                        r.class_probabilities[winner_index]
                      ),
                    }}
                  >
                    {class_labels[winner_index]}:{' '}
                    {Math.round(r.class_probabilities[winner_index] * 100)}%
                  </div>
                  <div
                    style={{
                      padding: 10,
                      background:
                        r.label === 'pos' ? scaleRed(1) : scaleBlue(1),
                    }}
                  >
                    label: {r.label}
                  </div>
                </div>
                <hr />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
