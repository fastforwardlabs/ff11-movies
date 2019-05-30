import React from 'react'
import App, { Container } from 'next/app'
import Link from 'next/link'

let algnames = ['bert', 'nbsvm', 'nbsvm_words']
let algfiles = [
  'bert_lime_grouped_pretty.json',
  'nbsvm_lime_grouped_pretty.json',
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
      analyze: true,
      data: null,
      data_select: 0,
    }
  }

  componentDidMount() {
    fetch('/static/data/' + algfiles[this.state.data_select])
      .then(r => r.json())
      .then(r => {
        this.setState({ data: r })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data_select !== prevState.data_select) {
      fetch('/static/data/' + algfiles[this.state.data_select])
        .then(r => r.json())
        .then(r => {
          this.setState({ data: r })
        })
    }
  }

  render() {
    let { analyze, data } = this.state
    let { Component, pageProps } = this.props
    let font_size = 16
    let line_height = 1.5
    let grem = font_size * line_height

    return (
      <div>
        <style jsx global>{`
          * {
            box-sizing: border-box;
            font-family: sans-serif;
          }
          html {
          }
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            font-size: 16;
            line-height: 1.5;
            background: white;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }
          a {
            color: black;
          }
          a.no-underline {
            text-decoration: none;
          }
          a.gray-hover:hover {
            background: rgba(0, 0, 0, 0.1);
          }
        `}</style>
        <div
          style={{
            padding: grem / 2,
            borderBottom: 'solid 1px black',
            fontWeight: 700,
          }}
        >
          <Link href="/">
            <a>Movie and TV Review Message Board</a>
          </Link>
        </div>

        {data ? (
          <Container>
            <Component
              {...pageProps}
              font_size={font_size}
              line_height={line_height}
              grem={grem}
              analyze={analyze}
              data={data}
            />
          </Container>
        ) : (
          <div>loading</div>
        )}

        <div
          style={{
            padding: grem / 2,
            background: analyze ? 'orchid' : 'white',
            // color: 'white',
            borderTop: 'solid 1px black',
            fontFamily: 'IBM Plex Mono',
            fontSize: 14,
            lineHeight: 1.5,
            position: 'fixed',
            left: 0,
            bottom: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>Sentiment Analyzer</div>
          <div>
            <div>
              {algnames.map((n, i) =>
                this.state.data_select === i ? (
                  <span>{n}</span>
                ) : (
                  <button
                    onClick={() => {
                      this.setState({ data_select: i })
                    }}
                  >
                    {n}
                  </button>
                )
              )}
            </div>
            <div>
              {analyze ? (
                <button
                  onClick={() => {
                    this.setState({ analyze: false })
                  }}
                >
                  Off
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.setState({ analyze: true })
                  }}
                >
                  On
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyApp
