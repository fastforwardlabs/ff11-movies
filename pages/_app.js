import React from 'react'
import App, { Container } from 'next/app'
import { info } from '../data/sample_movie_info.js'
import getConfig from 'next-server/config'
import { nouns, adjectives } from '../data/corpora.js'
import { red, blue, Border } from '../parts/Static'
let { publicRuntimeConfig } = getConfig()
let linkPrefix = publicRuntimeConfig.linkPrefix
import Link from '../parts/PrefixedLink'
import Bar from '../parts/Bar'
import Header from '../parts/Header'
import Tour from '../parts/Tour'

let algnames = ['NBSVM', 'BERT']
let algfiles = [
  'nbsvm_lime_grouped_pretty.json',
  'bert_lime_grouped_pretty.json',
  'nbsvm_lime_grouped_pretty_word.json',
]
let data_keys = [
  ['nbsvm_data', 'nbsvm_lime_grouped_pretty.json', 'NBSVM'],
  ['bert_data', 'bert_lime_grouped_pretty.json', 'BERT'],
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
      analyze: true,
      data_select: 1,
      show_accuracy: false,
      sort: 'reviews',
      review_sort: 'date',
      nbsvm_data: null,
      compare: false,
      bert_data: null,
      show_info: true,
    }
    this.setAnalyze = this.setAnalyze.bind(this)
    this.setReviewSort = this.setReviewSort.bind(this)
    this.setAccuracy = this.setAccuracy.bind(this)
    this.setSort = this.setSort.bind(this)
    this.setAlgo = this.setAlgo.bind(this)
    this.setCompare = this.setCompare.bind(this)
    this.showInfo = this.showInfo.bind(this)
  }

  fetchData() {
    fetch(linkPrefix + '/static/data/' + algfiles[0])
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
            let key = data_keys[0][0]
            this.setState({ [key]: reviews })
          })
      })
    fetch(linkPrefix + '/static/data/' + algfiles[1])
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
            let key = data_keys[1][0]
            this.setState({ [key]: reviews })
          })
      })
  }

  componentDidMount() {
    this.fetchData()
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

  setCompare(value) {
    this.setState({ compare: value })
  }

  showInfo(value) {
    this.setState({ show_info: value })
  }

  render() {
    let { analyze, sort, review_sort, show_accuracy, show_info } = this.state

    let data = this.state[data_keys[this.state.data_select][0]]

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
          p {
            margin: 0;
            text-indent: 1.5rem;
          }
          p:first-child {
            text-indent: 0;
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
          .hover-block {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
          }
          .hover-block-container .hover-block {
            display: block;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.1s linear;
            background: rgba(0, 0, 0, 0.0625);
          }
          .hover-block-container:hover .hover-block {
            display: block;
            opacity: 1;
          }
        `}</style>
        <style jsx global>{`
          body {
            overflow: ${show_info ? 'hidden' : 'auto'};
          }
        `}</style>
        <Header
          is_front={is_front}
          grem={grem}
          analyze={analyze}
          show_accuracy={show_accuracy}
          showInfo={this.showInfo}
        />
        <div
          style={{
            minHeight: `calc(100vh - ${grem * 4 + 1}px)`,
          }}
        >
          {data && this.state.nbsvm_data ? (
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
                compare={this.state.compare}
                setCompare={this.setCompare}
                nbsvm_data={this.state.nbsvm_data}
                hl_options={{}}
              />
            </Container>
          ) : (
            <div style={{ padding: grem / 2 }}>Loading...</div>
          )}
        </div>
        <div
          style={{
            padding: grem / 2,
            background: '#222',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            Textflix is a natural language processing prototype by Cloudera Fast
            Forward Labs
          </div>
          <div>
            <Link href="/disagreements">
              <a style={{ textDecoration: 'underline' }}>Disagreements</a>
            </Link>
          </div>
        </div>
        {show_info ? (
          <Tour
            router={this.props.router}
            grem={grem}
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
            compare={this.state.compare}
            setCompare={this.setCompare}
            nbsvm_data={this.state.nbsvm_data}
            showInfo={this.showInfo}
          />
        ) : null}
      </div>
    )
  }
}

export default MyApp
