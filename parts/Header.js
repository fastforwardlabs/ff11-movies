import React from 'react'
import Link from '../parts/PrefixedLink'
import { blue, red, Border } from './Static'

class Header extends React.Component {
  render() {
    let { is_front, grem, analyze, show_accuracy } = this.props
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
        <Link href="/">
          <a
            className={!is_front ? '' : 'no-opacity-hover'}
            style={{
              padding: grem / 2,
              display: 'block',
              cursor: is_front ? 'default' : 'pointer',
              textDecoration: 'none',
              fontWeight: 700,
              display: 'flex',
            }}
          >
            <div
              style={{
                width: grem,
                height: grem,
                marginRight: grem / 2,
                position: 'relative',
                display: 'none',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: grem / 2,
                  height: grem / 2,
                  background: analyze ? blue : 'white',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: grem / 2,
                  top: 0,
                  width: grem / 2,
                  height: grem / 2,
                  background: analyze ? red : 'white',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: grem / 2,
                  width: grem / 2,
                  height: grem / 2,
                  background: show_accuracy ? '#ddd' : 'white',
                }}
              />
            </div>
            Textflicks
          </a>
        </Link>
        <button
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
