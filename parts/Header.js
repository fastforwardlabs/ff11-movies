import React from 'react'
import Link from 'next/Link'
import { blue, red, Border } from './Static'

class Header extends React.Component {
  render() {
    let { is_front, grem, analyze, show_accuracy, showInfo } = this.props
    return (
      <div
        style={{
          position: 'relative',
          background: '#222',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          className={!is_front ? '' : 'no-opacity-hover'}
          style={{
            display: 'block',
            textDecoration: 'none',
            fontWeight: 700,
            display: 'flex',
          }}
        >
          {is_front ? (
            <div style={{ padding: grem / 2 }}>Textflix</div>
          ) : (
            <Link href="/">
              <a style={{ textDecoration: 'none', padding: grem / 2 }}>
                Textflix
              </a>
            </Link>
          )}
        </div>
        <button
          onClick={() => {
            showInfo(true)
          }}
          style={{
            padding: grem / 2,
            textDecoration: 'underline',
          }}
        >
          Info
        </button>
      </div>
    )
  }
}

export default Header
