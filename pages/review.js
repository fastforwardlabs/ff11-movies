import { withRouter } from 'next/router'
import Review from '../parts/Review'
import Bar from '../parts/Bar'
import Link from 'next/Link'
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
import * as _ from 'lodash'

let link_prefix = process.env.BACKEND_URL

class ReviewPage extends React.Component {
  render() {
    let {
      data,
      grem,
      analyze,
      class_labels,
      show_accuracy,
      router,
      setAnalyze,
      setAccuracy,
      info,
      data_select,
      nbsvm_data,
      compare,
      setCompare,
      hl_options = {},
    } = this.props
    let r = [data[router.query.id]]
    let nr = [nbsvm_data[router.query.id]]
    let topic_info = _.find(info, { og_id: r[0].url })

    // compare and show_accuracy only when analyze is on
    show_accuracy = show_accuracy && analyze
    compare = compare && analyze

    return (
      <div>
        <Bar
          grem={grem}
          setAnalyze={setAnalyze}
          analyze={analyze}
          setAlgo={this.props.setAlgo}
          algnames={this.props.algnames}
          data_select={this.props.data_select}
          show_accuracy={show_accuracy}
          setAccuracy={setAccuracy}
          compare={compare}
          setCompare={setCompare}
          data={r}
          nbsvm_data={nr}
          hl_options={hl_options}
        />
        <div
          style={{
            maxWidth: 700,
            margin: '0 auto',
            padding: grem / 2,
          }}
        >
          <div style={{ marginBottom: 0 }}>Review for {topic_info.Title}:</div>
        </div>

        <div>
          {compare ? <Border /> : null}
          <div
            style={{
              maxWidth: compare ? 700 * 2 + grem + 2 : 700,
              margin: `0 auto`,
              display: compare ? 'grid' : 'block',
              gridTemplateColumns: '1fr 1fr',
            }}
          >
            {compare ? (
              <div
                style={{
                  padding: grem / 2,
                  borderRight: 'solid 1px black',
                }}
              >
                <Review
                  key={data_select + '_' + nr[0].index}
                  r={nr[0]}
                  i={router.query.id}
                  grem={grem}
                  analyze={analyze}
                  class_labels={class_labels}
                  show_accuracy={show_accuracy}
                  is_review={true}
                />
              </div>
            ) : null}
            <div
              style={{
                padding: grem / 2,
                borderLeft: compare ? 'solid 1px black' : 'none',
              }}
            >
              <Review
                key={data_select + '_' + r.index}
                r={r[0]}
                i={router.query.id}
                grem={grem}
                analyze={analyze}
                class_labels={class_labels}
                show_accuracy={show_accuracy}
                is_review={true}
              />
            </div>
          </div>
          {compare ? <Border /> : null}
        </div>

        <div>
          <div
            style={{
              maxWidth: 700,
              margin: '0 auto',
              padding: grem / 2,
              marginTop: -grem,
            }}
          >
            <Link href={link_prefix + `/topic2?id=${r[0].url}`}>
              <a>See all reviews for {topic_info.Title}</a>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ReviewPage)
