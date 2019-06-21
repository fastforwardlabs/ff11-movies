import React from 'react'
import * as chroma from 'chroma-js'
import { scaleRed, scaleBlue } from './Static'

class Bar extends React.Component {
  render() {
    let {
      grem,
      analyze,
      setAnalyze,
      combined,
      total,
      setAlgo,
      accuracy,
      rightwrong,
      show_accuracy,
      setAccuracy,
    } = this.props

    let counts = [
      combined.filter(r => r.class === 'neg').length,
      combined.filter(r => r.class === 'pos').length,
    ]

    return (
      <div
        style={{
          // background: analyze ? chroma('orchid').luminance(0.25) : 'white',
          // color: 'white',
          border: 'solid 1px black',
          borderBottom: 'solid 3px black',
          borderRight: 'solid 2px black',
          background: 'white',
          position: 'fixed',
          left: grem / 2,
          bottom: show_accuracy ? grem * 1 : grem * 1.5,
          paddingLeft: grem / 4,
          paddingRight: grem / 4,
          zIndex: 99,
          width: analyze ? `calc(100% - ${grem}px)` : 'auto',
        }}
      >
        <div
          style={{
            height: show_accuracy ? grem * 3 : grem * 2,
            paddingTop: show_accuracy ? grem / 2 : 0,
            // borderBottom: 'solid 1px black',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', height: grem }}>
            <button
              className="no-opacity-hover"
              style={{
                paddingTop: grem / 2,
                paddingBottom: grem / 2,
                paddingLeft: grem / 4,
                paddingRight: grem / 4,
                display: 'flex',
                height: grem * 2,
              }}
              onClick={() => {
                if (analyze) {
                  setAnalyze(false)
                } else {
                  setAnalyze(true)
                }
              }}
            >
              <div style={{ paddingLeft: grem / 4, paddingRight: grem / 4 }}>
                Analysis:
              </div>
              {[['on', true], ['off', false]].map(a => (
                <div
                  className={analyze !== a[1] ? 'opacity-inner-hover' : ''}
                  style={{
                    paddingLeft: grem / 4,
                    paddingRight: grem / 4,
                    background: analyze === a[1] ? '#222' : 'none',
                    color: analyze === a[1] ? 'white' : 'black',
                    textDecoration: analyze === a[1] ? 'none' : 'underline',
                  }}
                >
                  {a[0]}
                </div>
              ))}
            </button>
            {analyze ? (
              <>
                <div
                  style={{
                    display: 'flex',
                    paddingRight: grem / 4,
                    paddingTop: grem / 2,
                    paddingBottom: grem / 2,
                  }}
                >
                  <div
                    style={{ paddingLeft: grem / 4, paddingRight: grem / 4 }}
                  >
                    Model:
                  </div>
                  {this.props.algnames.map((n, i) =>
                    this.props.data_select === i ? (
                      <div
                        style={{
                          paddingLeft: grem / 4,
                          paddingRight: grem / 4,
                          height: grem,
                          background: '#222',
                          color: 'white',
                        }}
                      >
                        {n}
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setAlgo(i)
                        }}
                        style={{
                          paddingLeft: grem / 4,
                          paddingRight: grem / 4,
                          textDecoration: 'underline',
                          height: grem,
                        }}
                      >
                        {n}
                      </button>
                    )
                  )}
                </div>
                <div style={{ display: 'flex' }}>
                  <button
                    className="no-opacity-hover"
                    style={{
                      paddingTop: grem / 2,
                      paddingBottom: grem / 2,
                      paddingLeft: grem / 4,
                      paddingRight: grem / 4,
                      height: grem * 2,
                      display: 'flex',
                    }}
                    onClick={() => {
                      if (show_accuracy) {
                        setAccuracy(false)
                      } else {
                        setAccuracy(true)
                      }
                    }}
                  >
                    <div style={{ paddingLeft: grem / 4, paddingRight: 0 }}>
                      Accuracy:
                    </div>
                    <div
                      className={'opacity-inner-hover'}
                      style={{
                        paddingLeft: grem / 4,
                        paddingRight: grem / 4,
                        textDecoration: 'underline',
                      }}
                    >
                      {show_accuracy ? 'hide' : 'show'}
                    </div>
                  </button>
                </div>
              </>
            ) : null}
          </div>

          <div
            style={{
              paddingLeft: grem / 2,
              paddingRight: grem / 2,
              flexGrow: 1,
              paddingTop: show_accuracy ? 0 : grem / 2,
            }}
          >
            <div>
              <div style={{ position: 'relative' }}>
                {analyze ? (
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      mixBlendMode: 'multiply',
                      overflow: 'hidden',
                    }}
                  >
                    {combined.map((c, i) => (
                      <div
                        style={{
                          position: 'absolute',
                          left: `${(1 / combined.length) * i * 100}%`,
                          top: 0,
                          bottom: 0,
                          width: `${(1 / combined.length) * 100 + 0.05}%`,
                          background:
                            c.class === 'pos'
                              ? scaleBlue(c.certainty)
                              : scaleRed(c.certainty),
                        }}
                      />
                    ))}
                  </div>
                ) : null}
                {combined.length} {total ? 'total ' : ''} review
                {combined.length > 1 ? 's' : ''}
                {analyze ? (
                  <span>
                    {' '}
                    &middot; {counts[1]} positive (
                    {Math.round((counts[1] / combined.length) * 100)}%)
                  </span>
                ) : null}
              </div>
            </div>
            {show_accuracy ? (
              <div>
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {combined.map((c, i) => (
                    <div
                      style={{
                        position: 'absolute',
                        left: `${(1 / combined.length) * i * 100}%`,
                        bottom: 0,
                        height: grem,
                        width: `${(1 / combined.length) * 100 + 0.05}%`,
                        background:
                          c.label !== c.class
                            ? c.label === 'pos'
                              ? scaleBlue(1)
                              : scaleRed(1)
                            : '#ddd',
                      }}
                    />
                  ))}

                  <div style={{ position: 'relative' }}>
                    {rightwrong[0] > 0 ? (
                      <span>
                        {Math.floor((accuracy * 1000) / 10)}% accuracy (
                        {rightwrong[0]} wrong)
                      </span>
                    ) : (
                      <span>
                        {Math.floor((accuracy * 1000) / 10)}% accuracy
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default Bar
