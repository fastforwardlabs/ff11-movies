import React from 'react'
import Head from 'next/head'
import * as _ from 'lodash'
import * as d3 from 'd3'
import * as chroma from 'chroma-js'
import Bar from '../parts/Bar'
import { p } from '../parts/Utils'
import {
  red,
  blue,
  scaleRed,
  scaleBlue,
  readableSentiment,
  class_labels,
  Border,
} from '../parts/Static'
import MovieGrid from '../parts/MovieGrid'

class Index extends React.Component {
  componentDidMount() {
    // let data = this.props.data
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
      compare,
      setCompare,
      nbsvm_data,
      hl_options = {},
    } = this.props

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
      <div style={{ paddingBottom: grem / 2 }}>
        <Head>
          <title>Textflix</title>
        </Head>
        <Bar
          grem={grem}
          setAnalyze={setAnalyze}
          analyze={analyze}
          total={true}
          setAlgo={this.props.setAlgo}
          algnames={this.props.algnames}
          data_select={this.props.data_select}
          show_accuracy={show_accuracy}
          setAccuracy={setAccuracy}
          compare={compare}
          setCompare={setCompare}
          data={data}
          nbsvm_data={nbsvm_data}
          is_front={true}
          hl_options={hl_options}
        />

        <div
          style={{
            position: 'relative',
            // top: stick_top,
            background: 'white',
            zIndex: 99,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              padding: p(grem / 2, grem / 4),
            }}
          >
            <div
              style={{
                padding: p(0, grem / 4),
              }}
            >
              {data.length} movies & shows sorted by most:
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
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
                    key={a[0]}
                    style={{
                      background: '#222',
                      color: 'white',
                      padding: p(0, grem / 4),
                    }}
                  >
                    {a[0]}
                  </div>
                ) : (
                  <button
                    key={a[0]}
                    onClick={() => {
                      setSort(a[1])
                    }}
                    style={{
                      textDecoration: 'underline',
                      padding: p(0, grem / 4),
                    }}
                  >
                    {a[0]}
                  </button>
                )
              )}
            </div>
          </div>
          <Border />
        </div>
        <div
          style={{
            display: compare ? 'grid' : 'block',
            gridTemplateColumns: '1fr 1fr',
            marginBottom: -grem / 2,
          }}
        >
          {compare ? (
            <div style={{ marginRight: -1, borderRight: 'solid 2px black' }}>
              <div style={{ marginRight: -1 }}>
                <MovieGrid
                  data={nbsvm_data}
                  info={info}
                  grem={grem}
                  sort={sort}
                  analyze={analyze}
                  show_accuracy={show_accuracy}
                  hl_options={hl_options}
                />
              </div>
            </div>
          ) : null}

          <MovieGrid
            data={data}
            info={info}
            grem={grem}
            sort={sort}
            analyze={analyze}
            show_accuracy={show_accuracy}
            hl_options={hl_options}
          />
        </div>
      </div>
    )
  }
}

export default Index
