import { withRouter } from 'next/router'
import Review from '../parts/Review'
import Link from '../parts/PrefixedLink'
import Bar from '../parts/Bar'
import * as _ from 'lodash'

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
    } = this.props
    let r = data[router.query.id]

    let topic_info = _.find(info, { og_id: r.url })

    let combined = [
      {
        class: r.class,
        label: r.label,
        certainty:
          r.class === 'pos'
            ? r.class_probabilities[1]
            : r.class_probabilities[0],
      },
    ]
    let rightwrong = [r.class === r.label ? 0 : 1, r.class === r.label ? 1 : 0]
    let accuracy = rightwrong[1] / 1

    return (
      <div
        style={{
          maxWidth: 700,
          margin: '0 auto',
          padding: grem / 2,
        }}
      >
        <div style={{ marginBottom: grem }}>Review for {topic_info.Title}:</div>
        <div style={{ marginBottom: 0 }}>
          <Review
            r={r}
            i={router.query.id}
            grem={grem}
            analyze={analyze}
            class_labels={class_labels}
            show_accuracy={show_accuracy}
            is_review={true}
          />
        </div>
        <div>
          <Link href={`/topic2?id=${r.url}`}>
            <a>See all reviews for {topic_info.Title}</a>
          </Link>
        </div>
        <Bar
          grem={grem}
          setAnalyze={setAnalyze}
          analyze={analyze}
          combined={combined}
          total={false}
          setAlgo={this.props.setAlgo}
          algnames={this.props.algnames}
          data_select={this.props.data_select}
          rightwrong={rightwrong}
          accuracy={accuracy}
          show_accuracy={show_accuracy}
          setAccuracy={setAccuracy}
        />
      </div>
    )
  }
}

export default withRouter(ReviewPage)
