import React from 'react'
import Link from '../parts/PrefixedLink'
import * as _ from 'lodash'
import {
  red,
  blue,
  scaleRed,
  scaleBlue,
  readableSentiment,
  class_labels,
} from '../parts/Static'
import Review from '../parts/Review'

class Reviews extends React.Component {
  render() {
    let {
      data,
      info,
      sort,
      grem,
      reviews,
      analyze,
      show_accuracy,
      review_sort,
      setReviewSort,
    } = this.props

    let sorted = reviews.slice()
    if (review_sort === 'date') {
      sorted = _.sortBy(sorted, 'date')
    } else if (review_sort === 'positive') {
      sorted = _.sortBy(sorted, function(r) {
        let sort_val
        if (r.class === 'pos') sort_val = 1 - r.class_probabilities[1] - 1
        if (r.class === 'neg') sort_val = r.class_probabilities[0] - 0
        return sort_val
      })
    } else if (review_sort === 'negative') {
      sorted = _.sortBy(sorted, function(r) {
        let sort_val
        if (r.class === 'pos') sort_val = r.class_probabilities[1] - 0
        if (r.class === 'neg') sort_val = 1 - r.class_probabilities[0] - 1
        return sort_val
      })
    } else if (review_sort === 'accurate') {
      sorted = _.sortBy(sorted, [
        function(r) {
          return r.class === r.label ? 0 : 1
        },
        function(r) {
          let sort_val
          if (r.class === 'pos') sort_val = 1 - r.class_probabilities[1]
          if (r.class === 'neg') sort_val = 1 - r.class_probabilities[0]
          return sort_val
        },
      ])
    } else if (review_sort === 'inaccurate') {
      sorted = _.sortBy(sorted, [
        function(r) {
          return r.class === r.label ? 1 : 0
        },
        function(r) {
          let sort_val
          if (r.class === 'pos') sort_val = 1 - r.class_probabilities[1]
          if (r.class === 'neg') sort_val = 1 - r.class_probabilities[0]
          return sort_val
        },
      ])
    }

    return (
      <div style={{ padding: grem / 2 }}>
        {sorted.map((r, i) => (
          <Review
            r={r}
            i={i}
            grem={grem}
            analyze={analyze}
            show_accuracy={show_accuracy}
          />
        ))}
      </div>
    )
  }
}

export default Reviews