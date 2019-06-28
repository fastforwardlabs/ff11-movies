import React from 'react'
import App, { Container } from 'next/app'
import { nouns, adjectives } from '../data/corpora.js'
import { red, blue, Border } from '../parts/Static'
import Scene from '../parts/Scene'
import Topic2 from '../pages/Topic2'
import Index from '../pages/Index'

let choreography = [0, 1]

class Tour extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: 0,
      step: 0,
      offsets: null,
      wh: null,
    }
    this.scrollRef = React.createRef()
    this.overviewBlank = this.overviewBlank.bind(this)
  }
  componentDidMount() {
    this.setState({ wh: window.innerHeight })

    let scroller = this.scrollRef.current
    let wh = this.state.wh || window.innerHeight
    let offsets =
      this.state.offsets ||
      Array.from(scroller.querySelectorAll('.scene')).map(n => n.offsetTop)

    this.setState({
      offsets: offsets,
    })

    scroller.addEventListener('scroll', () => {
      for (let i = 0; i < offsets.length; i++) {
        let r = offsets.length - 1 - i
        let thresh = offsets[r]
        if (scroller.scrollTop > thresh - wh * (7 / 8)) {
          this.setState({ step: r })
          break
        }
      }
    })
  }

  overviewBlank() {
    this.props.router.push('/test', { shallow: true })
  }

  render() {
    let {
      font_size,
      line_height,
      data_select,
      grem,
      router,
      analyze,
      data,
      info,
      setAnalyze,
      review_sort,
      setReviewSort,
      show_accuracy,
      setAccuracy,
      compare,
      setCompare,
      nbsvm_data,
      sort,
      setSort,
    } = this.props
    let { show_info, reviews_length, movies_length } = this.props
    let { wh, step } = this.state

    let index_sort = 'reviews'
    if (step === 3) index_sort = 'positive'
    if (step === 4) index_sort = 'negative'

    let hl_options = {}
    if (step > 2) hl_options.highlight_first_in_grid = true

    return (
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
        }}
      >
        {step > 0 ? (
          <div
            style={{
              position: 'fixed',
              left: 0,
              top: grem * 2,
              right: 0,
              bottom: 0,
              background: 'white',
              overflow: 'hidden',
              border: 'solid 6px red',
              height: 'calc(100vh - 3rem)',
            }}
          >
            {data !== null && nbsvm_data !== null ? (
              <div>
                {step > 0 && step < 5 ? (
                  <Index
                    grem={grem}
                    font_size={font_size}
                    line_height={line_height}
                    grem={grem}
                    analyze={step === 1 ? false : true}
                    data={data}
                    info={info}
                    sort={index_sort}
                    review_sort={review_sort}
                    setAnalyze={setAnalyze}
                    setSort={setSort}
                    setReviewSort={setReviewSort}
                    show_accuracy={show_accuracy}
                    setAccuracy={setAccuracy}
                    router={{ query: { id: 'tt0762073' } }}
                    compare={compare}
                    setCompare={setCompare}
                    nbsvm_data={nbsvm_data}
                    hl_options={hl_options}
                  />
                ) : null}

                {step > 4 ? (
                  <Topic2
                    grem={grem}
                    font_size={font_size}
                    line_height={line_height}
                    grem={grem}
                    analyze={step < 6 ? false : true}
                    data={data}
                    info={info}
                    sort={sort}
                    review_sort={review_sort}
                    setAnalyze={setAnalyze}
                    setSort={setSort}
                    setReviewSort={setReviewSort}
                    show_accuracy={show_accuracy}
                    setAccuracy={setAccuracy}
                    router={{ query: { id: 'tt0762073' } }}
                    compare={compare}
                    setCompare={setCompare}
                    nbsvm_data={nbsvm_data}
                    hl_options={hl_options}
                  />
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}

        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            overflow: 'auto',
          }}
          ref={this.scrollRef}
        >
          <div style={{ position: 'fixed', left: 0, top: 0, right: 0 }}>
            <div
              style={{
                background: 'white',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  padding: grem / 2,
                }}
              >
                Tour
              </div>
              <div style={{ display: 'flex' }}>
                {wh !== null ? (
                  <div style={{ paddingTop: grem / 2, paddingLeft: grem / 2 }}>
                    {step}
                  </div>
                ) : null}
                <button
                  style={{
                    padding: grem / 2,
                    textDecoration: 'underline',
                  }}
                >
                  Pause
                </button>
              </div>
            </div>
            <Border />
          </div>
          <div
            style={{
              background: 'transparent',
              position: 'absolute',
              left: 0,
              top: 0,
              right: 0,
              paddingBottom: '100vh',
            }}
          >
            <Scene grem={grem} one_screen={true}>
              <div
                style={{
                  paddingTop: grem / 4,
                  paddingBottom: grem / 4,
                  paddingLeft: grem / 2,
                  paddingRight: grem / 2,
                  marginTop: -grem / 2,
                  marginLeft: -grem / 2,
                  marginRight: -grem / 2,
                  marginBottom: grem / 2,
                  background: '#222',
                  color: '#fff',
                }}
              >
                Info
              </div>
              <div>
                <p>
                  Textflicks is a sentiment analysis prototype by Cloudera Fast
                  Forward Labs, built to accompany our report on transfer
                  learning for natural language generation. It uses movie
                  reviews to show how NLP techniques can unlock the data
                  embedded in large amounts of unstructured text.
                </p>
                <p>
                  Textflicks features over 1,000 text reviews for 50 movies and
                  TV shows. The "Analyze" function uses a neural network to
                  classify each review as positive or negative. The "accuracy"
                  option lets you check the model's predictions against each
                  review's original label, and the "model comparison" option
                  lets you compare this model to one trained without transfer
                  learning. Sentence highlights in individual reviews show which
                  sentences are driving the positive or negative classification.
                </p>
                <p>
                  You can{' '}
                  <button style={{ textDecoration: 'underline' }}>
                    jump in now
                  </button>{' '}
                  or{' '}
                  <button style={{ textDecoration: 'underline' }}>
                    scroll to take the tour ↓
                  </button>
                  .
                </p>
              </div>
            </Scene>
            <Scene grem={grem} spacer={1} wh={wh}>
              <p>The overview page shows 50 movie and TV shows.</p>
            </Scene>
            <Scene grem={grem} spacer={1} wh={wh}>
              <p>Analyze shows you the sentiment.</p>
            </Scene>
            <Scene grem={grem} spacer={1} wh={wh}>
              <p>Then you can see the most liked movie..</p>
            </Scene>
            <Scene grem={grem} spacer={1} wh={wh}>
              <p>Or the most disliked.</p>
            </Scene>
            <Scene grem={grem} spacer={1} wh={wh}>
              <p>What about a review page?</p>
            </Scene>
            <Scene grem={grem} spacer={1} wh={wh}>
              <p>Analyzed!</p>
            </Scene>
          </div>
        </div>
      </div>
    )
  }
}

export default Tour
