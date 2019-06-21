import React from 'react'
import App, { Container } from 'next/app'
import { info } from '../data/sample_movie_info.js'
import getConfig from 'next-server/config'
import { nouns, adjectives } from '../data/corpora.js'
import { red, blue } from '../parts/Static'
let { publicRuntimeConfig } = getConfig()
let linkPrefix = publicRuntimeConfig.linkPrefix
import Link from '../parts/PrefixedLink'
import Bar from '../parts/Bar'
import * as chroma from 'chroma-js'

let algnames = ['NBSVM', 'BERT']
let algfiles = [
  'nbsvm_lime_grouped_pretty.json',
  'bert_lime_grouped_pretty.json',
  'nbsvm_lime_grouped_pretty_word.json',
]

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  constructor(props) {
    super(props)
    this.state = {
      analyze: false,
      data: null,
      data_select: 1,
      show_accuracy: false,
      sort: 'reviews',
      review_sort: 'date',
    }
    this.setAnalyze = this.setAnalyze.bind(this)
    this.setReviewSort = this.setReviewSort.bind(this)
    this.setAccuracy = this.setAccuracy.bind(this)
    this.setSort = this.setSort.bind(this)
    this.setAlgo = this.setAlgo.bind(this)
  }

  componentDidMount() {
    fetch(linkPrefix + '/static/data/' + algfiles[this.state.data_select])
      .then(r => r.json())
      .then(r => {
        fetch(linkPrefix + '/static/data/names_and_dates.json')
          .then(nd => nd.json())
          .then(nd => {
            let reviews = r.map((r, i) => {
              let new_r = Object.assign({}, r)

              new_r.index = i
              new_r.author = nd[i].author
              new_r.date = nd[i].date

              return new_r
            })
            this.setState({ data: reviews })
          })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data_select !== prevState.data_select) {
      fetch(linkPrefix + '/static/data/' + algfiles[this.state.data_select])
        .then(r => r.json())
        .then(r => {
          fetch(linkPrefix + '/static/data/names_and_dates.json')
            .then(nd => nd.json())
            .then(nd => {
              let reviews = r.map((r, i) => {
                let new_r = Object.assign({}, r)

                new_r.index = i
                new_r.author = nd[i].author
                new_r.date = nd[i].date

                return new_r
              })
              this.setState({ data: reviews })
            })
        })
    }
  }

  setAnalyze(value) {
    this.setState({ analyze: value })
  }

  setReviewSort(value) {
    this.setState({ review_sort: value })
  }

  setSort(value) {
    this.setState({ sort: value })
  }

  setAlgo(index) {
    this.setState({ data_select: index })
  }

  setAccuracy(value) {
    this.setState({ show_accuracy: value })
  }

  render() {
    let { analyze, data, sort, review_sort, show_accuracy } = this.state

    if (analyze === false) show_accuracy = false

    let { Component, pageProps } = this.props
    let font_size = 16
    let line_height = 1.5
    let grem = font_size * line_height

    const { pathname } = this.props.router

    let is_front = pathname === '/'
    let is_topic = pathname.startsWith('/topic')

    return (
      <div>
        <style jsx global>{`
          * {
            box-sizing: border-box;
            font-family: sans-serif;
          }
          html {
            background: #222;
          }
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            font-size: 16px;
            line-height: 1.5;
            background: white;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }
          a,
          button {
            color: inherit;
            transition: opacity 0.1s linear;
          }
          a:hover,
          button:hover {
            opacity: 0.75;
          }
          a.no-opacity-hover:hover,
          button.no-opacity-hover:hover {
            opacity: 1;
          }
          a.no-underline {
            text-decoration: none;
          }
          .opacity-inner-hover {
            transition: opacity 0.1s linear;
          }
          a:hover .opacity-inner-hover,
          button:hover .opacity-inner-hover {
            opacity: 0.75;
          }
          button {
            font: inherit;
            font-size: inherit;
            line-height: inherit;
            border: none;
            padding: 0;
            margin: 0;
            background: transparent;
            cursor: pointer;
          }
          button:focus {
            outline: none;
          }
          .hover-block-container .hover-block {
            display: block;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.1s linear;
          }
          .hover-block-container:hover .hover-block {
            display: block;
            opacity: 1;
          }
        `}</style>
        <div
          style={{
            borderBottom: 'solid 1px black',
            background: '#222',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Link href="/">
            <a
              className={is_topic ? '' : 'no-opacity-hover'}
              style={{
                padding: grem / 2,
                display: 'block',
                cursor: is_front ? 'default' : 'pointer',
                textDecoration: 'none',
                fontWeight: 700,
                display: 'flex',
              }}
            >
              <div
                style={{
                  width: grem,
                  height: grem,
                  marginRight: grem / 2,
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: grem / 2,
                    height: grem / 2,
                    background: analyze ? blue : 'white',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    left: grem / 2,
                    top: 0,
                    width: grem / 2,
                    height: grem / 2,
                    background: analyze ? red : 'white',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: grem / 2,
                    width: grem / 2,
                    height: grem / 2,
                    background: show_accuracy ? '#ddd' : 'white',
                  }}
                />
              </div>
              TextFlicks
            </a>
          </Link>
          <button
            style={{
              padding: grem / 2,
              textDecoration: 'underline',
              display: 'none',
            }}
          >
            Info
          </button>
        </div>
        <div
          style={{
            minHeight: `calc(100vh - ${grem * 2 + 1}px)`,
            paddingBottom: show_accuracy ? grem * 4.5 : grem * 4,
          }}
        >
          {data ? (
            <Container>
              <Component
                {...pageProps}
                font_size={font_size}
                line_height={line_height}
                grem={grem}
                analyze={analyze}
                data={data}
                info={info}
                sort={sort}
                review_sort={review_sort}
                setAnalyze={this.setAnalyze}
                setSort={this.setSort}
                setReviewSort={this.setReviewSort}
                setAlgo={this.setAlgo}
                algnames={algnames}
                data_select={this.state.data_select}
                show_accuracy={show_accuracy}
                setAccuracy={this.setAccuracy}
              />
            </Container>
          ) : (
            <div style={{ padding: grem / 2 }}>Loading...</div>
          )}
        </div>
      </div>
    )
  }
}

export default MyApp
