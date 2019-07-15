import React from 'react'
import Link from 'next/Link'
import * as _ from 'lodash'
import {
  red,
  blue,
  scaleRed,
  scaleBlue,
  readableSentiment,
  class_labels,
} from '../parts/Static'
import { p } from './Utils'

let link_prefix = process.env.BACKEND_URL

class MovieGrid extends React.Component {
  render() {
    let {
      data,
      info,
      sort,
      grem,
      analyze,
      show_accuracy,
      hl_options,
    } = this.props

    let sorted = info.map(o => {
      let new_o = Object.assign({}, o)
      new_o.children = []
      new_o.id = o.og_id
      return new_o
    })
    let ids = sorted.map(o => o.id)
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
      sorted = _.sortBy(sorted, function(o) {
        return -o.children.length
      })
    } else if (sort === 'positive') {
      sorted = _.sortBy(sorted, [
        function(o) {
          return (
            o.children.reduce(
              (total, r) => (r.class === 'pos' ? total - 1 : total),
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

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
          gridColumnGap: 1,
          gridRowGap: 1,
        }}
      >
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
            <Link key={'link' + o.id} href={link_prefix + `/topic2?id=${o.id}`}>
              <a
                className="no-underline hover-block-container no-opacity-hover"
                style={{
                  position: 'relative',
                  height: 12 * grem,
                  cursor: 'zoom-in',
                  outline: 'solid 1px black',
                  padding: p(grem / 2, grem / 2),
                }}
              >
                <div
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
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
                    {topic_info.Year} &middot; {topic_info.Runtime} &middot;{' '}
                    {topic_info.Rated}
                  </div>
                  <div style={{ textIndent: grem }}>{topic_info.Plot}</div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: grem / 2,
                    left: grem / 2,
                    right: grem / 2,
                  }}
                >
                  {analyze ? (
                    <div
                      style={{
                        position: 'absolute',
                        overflow: 'hidden',
                        width: '100%',
                        height: grem,
                      }}
                    >
                      {combined.map((c, i) => (
                        <div
                          key={c.certainty}
                          style={{
                            position: 'absolute',
                            left: `${(1 / combined.length) * i * 100}%`,
                            bottom: 0,
                            height: grem,
                            width: `${(1 / combined.length) * 100 + 0.05}%`,
                            background:
                              c.class === 'pos'
                                ? scaleBlue(c.certainty)
                                : scaleRed(c.certainty),
                          }}
                        />
                      ))}
                    </div>
                  ) : null}

                  <div style={{ position: 'relative' }}>
                    {reviews.length} reviews
                    {analyze ? (
                      <span>
                        &middot; {counts[1]} positive (
                        {Math.floor((counts[1] / combined.length) * 100) / 1}
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
                          key={'cert' + c.certainty}
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
                                : '#fff',
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
                <div
                  className="hover-block"
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.0625)',
                    opacity:
                      hl_options.highlight_first_in_grid && i === 0 ? 1 : null,
                  }}
                />
              </a>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default MovieGrid
