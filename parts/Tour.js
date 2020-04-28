import React from 'react'
import Head from 'next/Head'
import App, { Container } from 'next/app'
import { nouns, adjectives } from '../data/corpora.js'
import { red, blue, Border } from '../parts/Static'
import Scene from '../parts/Scene'
import Topic2 from '../pages/Topic2'
import Index from '../pages/Index'
import Disagreements from '../pages/Disagreements'

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
    this.frameRef = React.createRef()
    this.scrollNext = this.scrollNext.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.setSize = this.setSize.bind(this)
    this.escFunction = this.escFunction.bind(this)
  }

  setSize() {
    let scroller = this.scrollRef.current
    let offsets = Array.from(scroller.querySelectorAll('.scene')).map(
      n => n.offsetTop
    )
    this.setState({
      offsets: offsets,
    })

    this.setState({ wh: window.innerHeight, offsets: offsets })
  }

  onScroll() {
    let wh = this.state.wh || window.innerHeight
    let offsets = this.state.offsets
    if (offsets) {
      let scroller = this.scrollRef.current
      let framer = this.frameRef.current
      let last = offsets.length * wh
      for (let i = 0; i < offsets.length; i++) {
        let r = offsets.length - 1 - i
        let thresh = offsets[r]
        if (scroller.scrollTop > thresh - wh * (31 / 32)) {
          if (r === offsets.length - 1) {
            this.props.showInfo(false)
            this.setState({ step: 0 })
          } else {
            this.setState({ step: r })
          }
          break
        }
      }
    }
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      //Do whatever when esc is pressed
      this.props.showInfo(false)
    }
  }

  componentDidMount() {
    let scroller = this.scrollRef.current
    window.addEventListener('resize', this.setSize)
    this.setSize()
    scroller.addEventListener('scroll', this.onScroll)
    document.addEventListener('keydown', this.escFunction, false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false)
    window.removeEventListener('resize', this.setSize, false)
    document.removeEventListener('keydown', this.escFunction, false)
  }

  componentDidUpdate(prevProps, prevState) {
    let grem = this.props.grem
    let step = this.state.step
    let prev_step = prevState.step
    let smooth = 'smooth'
    if (step !== 0 && step !== prev_step) {
      let scroller = document.getElementById('frame-scroller')
      if (step === 8) {
        let scroll_to =
          document.getElementById('sentences-block').offsetTop - grem * 2
        scroller.scroll({ left: 0, top: scroll_to, behavior: smooth })
      } else if (step === 7) {
        let scroll_to =
          document.getElementById('reviews-block').offsetTop - grem * 2
        scroller.scroll({ left: 0, top: scroll_to, behavior: smooth })
      } else if (step === 9) {
        scroller.scroll({ left: 0, top: 0 })
      } else if (step === 12) {
        let scroll_to =
          document.getElementById('reviews-block').offsetTop - grem * 3
        scroller.scroll({ left: 0, top: scroll_to, behavior: smooth })
      } else if (step === 13) {
        let scroll_to =
          document.getElementById('reviews-block').offsetTop - grem * 5
        scroller.scroll({ left: 0, top: scroll_to, behavior: smooth })
      } else if (step === 14) {
        let scroll_to =
          document.getElementById('reviews-block').offsetTop - grem * 5
        scroller.scroll({ left: 0, top: scroll_to, behavior: smooth })
      } else if (step < 16) {
        scroller.scroll({ left: 0, top: 0, behavior: 'auto' })
      }
    }
  }

  scrollNext() {
    let current = this.state.step
    let scroller = this.scrollRef.current
    scroller.scroll({
      left: 0,
      top: this.state.offsets[current + 1] - this.state.wh * (10 / 16),
      behavior: 'smooth',
    })
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
      showInfo,
      setSort,
    } = this.props
    let { show_info, reviews_length, movies_length } = this.props
    let { wh, step } = this.state

    let index_sort = 'reviews'
    if (step === 3) index_sort = 'positive'
    if (step === 4) index_sort = 'negative'

    let index_accuracy = false
    if (step > 9) index_accuracy = true

    let reviews_accuracy = false
    if (step > 9) reviews_accuracy = true

    let review_id = 'tt0120786'
    if (step > 9) review_id = 'tt0120786'

    let reviews_sort = 'date'
    if (step > 11) reviews_sort = 'inaccurate'
    if (step > 13) reviews_sort = 'date'

    let reviews_compare = false
    if (step > 12) reviews_compare = true

    let hl_options = {}
    // if (step === 2 || step === 6) hl_options.highlight_analysis_bar = true
    // if (step === 3 || step === 4) hl_options.highlight_first_in_grid = true
    // if (step === 7) hl_options.highlight_reviews_block = true
    // if (step === 8) hl_options.highlight_sentences_block = true

    let space = 0.75

    let next = (
      <div style={{ marginTop: grem * 0, textIndent: grem }}>
        <button
          onClick={this.scrollNext}
          style={{ textDecoration: 'underline' }}
        >
          Next ↓
        </button>
      </div>
    )

    let scene_bar = false
      ? null
      : num => (
          <div
            style={{
              marginTop: -grem / 2,
              marginLeft: -grem / 2,
              marginRight: -grem / 2,
              marginBottom: grem / 2,
              display: 'none',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  paddingTop: grem / 4,
                  paddingBottom: grem / 4,
                  paddingLeft: grem / 2,
                  paddingRight: grem / 2,
                }}
              >
                Screen {num}
              </div>
              <button
                style={{
                  paddingTop: grem / 4,
                  paddingBottom: grem / 4,
                  paddingLeft: grem / 2,
                  paddingRight: grem / 2,
                  textDecoration: 'underline',
                }}
                onClick={() => {
                  showInfo(false)
                }}
              >
                &times;
              </button>
            </div>
            <Border />
          </div>
        )

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
        ref={this.frameRef}
      >
        {step > 0 && step < 16 ? (
          <div
            id="frame-scroller"
            style={{
              position: 'fixed',
              left: 0,
              top: grem * 2,
              right: 0,
              bottom: 0,
              background: 'white',
              overflow: 'hidden',
              // borderLeft: `solid ${grem / 2}px #222`,
              height: 'calc(100vh - 3rem)',
            }}
          >
            {data !== null && nbsvm_data !== null ? (
              <div>
                {(step > 0 && step < 5) || (step > 8 && step < 11) ? (
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
                    show_accuracy={index_accuracy}
                    setAccuracy={setAccuracy}
                    router={{ query: { id: 'tt0762073' } }}
                    compare={reviews_compare}
                    setCompare={setCompare}
                    nbsvm_data={nbsvm_data}
                    hl_options={hl_options}
                  />
                ) : null}

                {step > 4 && step < 15 ? (
                  <Topic2
                    grem={grem}
                    font_size={font_size}
                    line_height={line_height}
                    grem={grem}
                    analyze={step < 6 ? false : true}
                    data={data}
                    info={info}
                    sort={sort}
                    review_sort={reviews_sort}
                    setAnalyze={setAnalyze}
                    setSort={setSort}
                    setReviewSort={setReviewSort}
                    show_accuracy={reviews_accuracy}
                    setAccuracy={setAccuracy}
                    router={{ query: { id: review_id } }}
                    compare={reviews_compare}
                    setCompare={setCompare}
                    nbsvm_data={nbsvm_data}
                    hl_options={hl_options}
                    tour={true}
                  />
                ) : null}

                {step === 15 ? (
                  <Disagreements
                    grem={grem}
                    font_size={font_size}
                    line_height={line_height}
                    grem={grem}
                    analyze={step < 6 ? false : true}
                    data={data}
                    info={info}
                    sort={sort}
                    review_sort={reviews_sort}
                    setAnalyze={setAnalyze}
                    setSort={setSort}
                    setReviewSort={setReviewSort}
                    show_accuracy={reviews_accuracy}
                    setAccuracy={setAccuracy}
                    router={{ query: { id: review_id } }}
                    compare={reviews_compare}
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
            background: 'rgba(0, 0, 0, 0.1)',
            cursor: step > 0 ? 's-resize' : 'pointer',
          }}
          ref={this.scrollRef}
          onClick={() => {
            if (step === 0) {
              showInfo(false)
            } else {
              this.scrollNext()
            }
          }}
        >
          <div>
            {step > 0 ? (
              <div
                style={{
                  position: 'fixed',
                  right: grem / 2,
                  top: grem / 2,
                  color: 'white',
                  zIndex: 999,
                }}
              >
                <button
                  style={{ textDecoration: 'underline' }}
                  onClick={() => {
                    showInfo(false)
                  }}
                >
                  Quit
                </button>
              </div>
            ) : null}
          </div>

          {step > 0 ? (
            <div>
              <div style={{ position: 'fixed', left: 0, top: 0, right: 0 }}>
                <div
                  style={{
                    background: '#222',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      padding: grem / 2,
                    }}
                  >
                    <b>Tour</b>
                  </div>
                  <div style={{ display: 'flex' }}>
                    {wh !== null ? (
                      <div
                        style={{ paddingTop: grem / 2, paddingLeft: grem / 2 }}
                      >
                        {step} of 16
                      </div>
                    ) : null}
                    <div style={{ padding: grem / 2, opacity: 0 }}>Quit</div>
                  </div>
                </div>
                <Border />
              </div>
            </div>
          ) : null}
          <div
            style={{
              background: 'transparent',
              position: 'absolute',
              left: 0,
              top: 0,
              right: 0,
              paddingLeft: grem / 3,
              paddingRight: grem / 3,
              paddingBottom: '100vh',
            }}
          >
            <Scene grem={grem} one_screen={true}>
              <div
                style={{
                  marginTop: -grem / 2,
                  marginLeft: -grem / 2,
                  marginRight: -grem / 2,
                  marginBottom: grem / 2,
                  background: '#222',
                  color: 'white',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      paddingTop: grem / 4,
                      paddingBottom: grem / 4,
                      paddingLeft: grem / 2,
                      paddingRight: grem / 2,
                    }}
                  >
                    Info
                  </div>
                  <button
                    style={{
                      paddingTop: grem / 4,
                      paddingBottom: grem / 4,
                      paddingLeft: grem / 2,
                      paddingRight: grem / 2,
                      textDecoration: 'underline',
                    }}
                    onClick={() => {
                      showInfo(false)
                    }}
                  >
                    &times;
                  </button>
                </div>
                <Border />
              </div>
              <div>
                <p>
                  Textflix is a sentiment analysis prototype by{' '}
                  <a href="https://www.cloudera.com/products/fast-forward-labs-research.html">
                    Cloudera Fast Forward Labs
                  </a>
                  , built to accompany our report on{' '}
                  <a href="https://textflix-report.fastforwardlabs.com">
                    transfer learning for natural language processing
                  </a>
                  . It uses movie reviews to show how machine learning can
                  unlock the data embedded in large amounts of unstructured
                  text.
                </p>
                <p>
                  Textflix features over 1,000 text reviews for 50 movies and TV
                  shows from the{' '}
                  <a href="https://www.kaggle.com/iarunava/imdb-movie-reviews-dataset">
                    IMDB review dataset
                  </a>
                  . The{' '}
                  <span style={{ whiteSpace: 'nowrap' }}>
                    <span
                      style={{
                        width: grem * 0.5,
                        height: grem * 0.5,
                        border: 'solid 1px black',
                        background: analyze ? 'black' : 'white',
                        display: 'inline-block',
                        marginLeft: grem * (1 / 8),
                        marginRight: grem * (1 / 16),
                      }}
                    />{' '}
                    Analyze
                  </span>{' '}
                  option uses a model pretrained with{' '}
                  <a href="https://github.com/google-research/bert">BERT</a> to
                  classify each review as{' '}
                  <span style={{ background: blue }}>positive</span> or{' '}
                  <span style={{ background: red }}>negative</span>. Trained on
                  only 500 labeled reviews, the model achieves an accuracy (92%)
                  roughly equivalent to a state-of-the art model. Textflix lets
                  you explore each classification at the sentence level and
                  compare the model's performance to a baseline NB-SVM model.
                </p>{' '}
                <p>
                  We recommend{' '}
                  <button
                    style={{ textDecoration: 'underline' }}
                    onClick={this.scrollNext}
                  >
                    scrolling to take the interactive tour ↓
                  </button>{' '}
                  but you can also{' '}
                  <button
                    style={{ textDecoration: 'underline' }}
                    onClick={() => {
                      showInfo(false)
                    }}
                  >
                    jump right in
                  </button>
                  .
                </p>
              </div>
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                1. The overview page features an eclectic mix of fifty movie and
                TV shows. Without sentiment analysis, the only thing we can tell
                you about their reviews is how many there are.
              </p>
              {next}
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                2. With sentiment analysis, we can show the percent of positive
                reviews for each movie. Now a user can see the general sentiment
                for a movie without reading every review. Our app is now much
                more useful to a user trying to decide which movie to see.
              </p>
              {next}
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                3. We can now do things like sort by most positive reviews, and
                find out that <i>What Alice Found</i>, an indie thriller from
                2003, is the most liked movie.
              </p>
              {next}
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                4. Or sort by most negative and find out <i>Flood</i>, a
                disaster movie that most reviewers found unconvincing, is the
                most disliked.
              </p>
              {next}
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                5. Now let's look at an individual movie. Without sentiment
                analysis you would have to read through the reviews one-by-one
                to get a sense for how people feel about the 1998 Steven Segal
                movie <i>The Patriot</i>.
              </p>
              {next}
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                6. With analysis you can immediately see that the reviews are{' '}
                only (28%) positive.
              </p>
              {next}
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                7. For each review you can see both the model's classification
                and certainty. We use an interpretability technique called LIME
                to determine how each sentence is affecting the classification.
                We underline the sentences that contribute most strongly to the
                classification. This added interpretability helps us understand
                the model's decisions.
              </p>
              {next}
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                8. In addition to underlining important sentences within the
                review, we use the highest scoring sentences as highlights. The
                highlights provide a summary of what people most liked and
                disliked about the movie.
              </p>
              {next}
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                9. So far we've shown you how analysis can unlock the data
                embedded within text. Now we're going to look at model
                performance.
              </p>
              {next}
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                10. The <i>show accuracy</i> option exposes how the model's
                classifications compare to the original rating entered by the
                reviewer. Our model achieves 92% accuracy for the 1,011 reviews
                in the dataset.
              </p>
              {next}
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                11. On the topic page, you can examine the model's accuracy on a
                review by review basis.
              </p>
              {next}
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                12. You can sort the reviews by <i>inaccurate</i> to focus on
                the ones it got wrong.
              </p>
              {next}
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                13. Finally, you can use the <i>model comparison</i> option to
                see how our model compares to one trained without the benefit of
                transfer learning. This mode introduces a split-screen, with the
                baseline NB-SVM model on the left and the pretrained model on
                the right.
              </p>
              {next}
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                14. You can sort the reviews by recent to get a view of each
                review side-by-side. Often the underlined sentences can help you
                understand disagreements between the two models.
              </p>
              {next}
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                15. If you want to get a more thorough look at the
                disagreements, check out the <i>Disagreements</i> page, linked
                at the bottom of the page, to see a list of all the reviews
                where the models disagreed. You'll notice that the pretrained
                model is the winner of the majority of the disagreements.
              </p>
              {next}
            </Scene>
            <Scene grem={grem} spacer={space} wh={wh}>
              <p>
                Fin. That's the end of our tour. Now you're ready to explore
                Textflix yourself.
              </p>
              <div style={{ marginTop: grem * 0, textIndent: grem }}>
                <button
                  onClick={this.scrollNext}
                  style={{ textDecoration: 'underline' }}
                >
                  End tour ↓
                </button>
              </div>
            </Scene>
            <Scene grem={grem} spacer={1} wh={wh} trans={true} />
          </div>
        </div>
      </div>
    )
  }
}

export default Tour
