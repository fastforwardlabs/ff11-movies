import React from 'react'
import Link from '../parts/PrefixedLink'
import * as d3 from 'd3'
import * as chroma from 'chroma-js'
import Bar from '../parts/Bar'
import {
  red,
  blue,
  scaleRed,
  scaleBlue,
  readableSentiment,
  class_labels,
} from '../parts/Static'
import getConfig from 'next-server/config'
let { publicRuntimeConfig } = getConfig()
let linkPrefix = publicRuntimeConfig.linkPrefix
import Review from '../parts/Review'
import * as _ from 'lodash'

let algfiles = [
  'nbsvm_lime_grouped_pretty.json',
  'bert_lime_grouped_pretty.json',
]

let data_keys = [
  ['nbsvm_data', 'nbsvm_lime_grouped_pretty.json', 'NBSVM'],
  ['bert_data', 'bert_lime_grouped_pretty.json', 'BERT'],
]

class Disagree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nbsvm_data: null,
      bert_data: null,
    }
  }

  componentDidMount() {
    data_keys.map(k => {
      fetch(linkPrefix + '/static/data/' + k[1])
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
              this.setState({ [k[0]]: reviews })
            })
        })
    })
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
      setAccuracy,
    } = this.props
    let { nbsvm_data, bert_data } = this.state

    let loaded = nbsvm_data && bert_data

    let combined, disagreements
    if (loaded) {
      combined = nbsvm_data.map((n, i) => {
        return { nbsvm: n, bert: bert_data[i] }
      })
      disagreements = combined.filter(c => c.nbsvm.class !== c.bert.class)
    }

    return loaded ? (
      <div>
        <div
          style={{
            position: 'sticky',
            zIndex: 99,
            top: 0,
            padding: grem / 2,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridColumnGap: grem,
            borderBottom: 'solid 1px black',
            background: 'white',
            display: 'none',
          }}
        >
          <div>NBSVM</div>
          <div>BERT</div>
        </div>
        <div
          style={{
            maxWidth: 700 * 2 + grem * 2,
            padding: grem / 2,
            margin: `0 auto`,
          }}
        >
          <div style={{ marginBottom: grem }}>
            Reviews where the NBSVM and BERT classification disagree:
          </div>
          {disagreements.map((d, i) => {
            let review_info = _.find(info, { og_id: d.nbsvm.url })
            return (
              <div style={{ paddingBottom: grem }}>
                <div>
                  Review for{' '}
                  <Link href={`/topic2?id=${review_info.id}`}>
                    <a>{review_info.Title}</a>
                  </Link>{' '}
                  by {d.nbsvm.author} &middot;{' '}
                  <Link href={`/review?id=${d.index}`}>
                    <a>{d.nbsvm.date} days ago</a>
                  </Link>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    margin: '0 auto',
                    gridColumnGap: grem,
                  }}
                >
                  <div style={{ padding: 0 }}>
                    <Review
                      r={d.nbsvm}
                      i={i}
                      grem={grem}
                      analyze={true}
                      show_accuracy={false}
                      threshold={0}
                      hide_author={true}
                      classification_label="NBSVM "
                    />
                  </div>
                  <div style={{ padding: 0 }}>
                    <Review
                      r={d.bert}
                      i={i}
                      grem={grem}
                      analyze={true}
                      show_accuracy={false}
                      threshold={0}
                      hide_author={true}
                      classification_label="BERT "
                    />
                  </div>
                </div>
                <div
                  style={{
                    marginTop: -grem,
                    marginBottom: grem,
                    background:
                      d.nbsvm.label === d.nbsvm.class
                        ? d.nbsvm.label === 'pos'
                          ? scaleBlue(1)
                          : scaleRed(1)
                        : d.bert.label === 'pos'
                        ? scaleBlue(1)
                        : scaleRed(1),
                  }}
                >
                  label: {d.nbsvm.label === 'pos' ? 'positive' : 'negative'}{' '}
                  &middot;{' '}
                  {d.nbsvm.label === d.nbsvm.class
                    ? 'NBSVM correct'
                    : 'BERT correct'}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    ) : (
      <div style={{ padding: grem / 2 }}>Loading...</div>
    )
  }
}

export default Disagree
