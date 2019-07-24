import React from 'react'
import Link from 'next/Link'
import * as chroma from 'chroma-js'
import Head from 'next/Head'
import Bar from '../parts/Bar'
import {
  red,
  blue,
  scaleRed,
  scaleBlue,
  readableSentiment,
  class_labels,
  Border,
} from '../parts/Static'
import getConfig from 'next-server/config'
import Reviews from '../parts/Reviews'
import * as _ from 'lodash'

let linkPrefix = process.env.BACKEND_URL

class Disagree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show_all: false,
    }
  }

  render() {
    let {
      font_size,
      line_height,
      grem,
      analyze,
      info,
      reviews,
      setAnalyze,
      sort,
      setSort,
      show_accuracy,
      nbsvm_data,
      data,
      hl_options,
      setAccuracy,
      compare,
      review_sort,
      setReviewSort,
      setCompare,
    } = this.props
    let { show_all } = this.state

    compare = true

    let disagreements = []
    let ndisagreements = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].class !== nbsvm_data[i].class) {
        disagreements.push(data[i])
        ndisagreements.push(nbsvm_data[i])
      }
    }

    disagreements = _.sortBy(disagreements, 'date')
    ndisagreements = _.sortBy(ndisagreements, 'date')

    // overwrite
    analyze = true
    show_accuracy = true
    compare = true

    return (
      <div>
        <Head>
          <title>Textflix: Disagreements</title>
        </Head>

        <Bar
          grem={grem}
          setAnalyze={setAnalyze}
          analyze={analyze}
          setAlgo={this.props.setAlgo}
          algnames={this.props.algnames}
          data_select={this.props.data_select}
          show_accuracy={true}
          setAccuracy={setAccuracy}
          compare={true}
          setCompare={setCompare}
          data={disagreements}
          nbsvm_data={ndisagreements}
          hl_options={hl_options}
          analyze_locked={true}
        />

        <div
          style={{
            maxWidth: 700,
            padding: grem / 2,
            margin: `0 auto`,
          }}
        >
          <div style={{}}>
            Reviews where the NB-SVM model and the pretrained BERT model
            disagree on the classification.
          </div>
        </div>

        <div>
          <div
            style={{
              position: 'relative',
              background: hl_options.highlight_reviews_block ? '#eee' : 'white',
              transition: 'background 0.1s linear',
            }}
          >
            {compare ? <Border /> : null}
            <div
              style={{
                maxWidth: compare ? 700 * 2 + grem + 2 : 700,
                margin: '0 auto',
                display: compare ? 'grid' : 'block',
                gridTemplateColumns: '1fr 1fr',
              }}
            >
              {compare ? (
                <div style={{ borderRight: 'solid 1px black' }}>
                  <Reviews
                    reviews={
                      show_all ? ndisagreements : ndisagreements.slice(0, 40)
                    }
                    grem={grem}
                    analyze={analyze}
                    show_accuracy={show_accuracy}
                    review_sort={'date'}
                    setReviewSort={setReviewSort}
                    info={info}
                    show_title={true}
                  />
                </div>
              ) : null}
              <div style={{ borderLeft: compare ? 'solid 1px black' : 'none' }}>
                <Reviews
                  reviews={
                    show_all ? disagreements : disagreements.slice(0, 40)
                  }
                  grem={grem}
                  analyze={analyze}
                  show_accuracy={show_accuracy}
                  review_sort={'date'}
                  setReviewSort={setReviewSort}
                  info={info}
                  show_title={true}
                />
              </div>
            </div>
          </div>
          <Border />
        </div>
        {!show_all ? (
          <div style={{ maxWidth: 700, margin: '0 auto', padding: grem / 2 }}>
            <button
              style={{
                textDecoration: 'underline',
              }}
              onClick={() => {
                this.setState({ show_all: true })
              }}
            >
              show all
            </button>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Disagree
