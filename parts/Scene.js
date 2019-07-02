import React from 'react'

class Scene extends React.Component {
  render() {
    let {
      grem,
      one_screen = false,
      spacer = false,
      wh = null,
      trans = false,
    } = this.props
    return (
      <div
        className="scene"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: one_screen ? 'center' : 'top',
          height: one_screen ? '100vh' : 'auto',
          marginTop: spacer ? spacer * 100 + 'vh' : 'auto',
          cursor: 'auto',
        }}
      >
        <div
          style={{
            maxWidth: 700,
            width: '100%',
            margin: '0 auto',
            background: 'white',
            border: 'solid 1px black',
            boxShadow: '2px 2px rgba(0,0,0,1)',
            padding: grem / 2,
            opacity: trans ? 0 : 1,
            // boxShadow: trans ? 'none' : '0 2px 8px rgba(0,0,0,0.3)',
          }}
          onClick={e => {
            e.stopPropagation()
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Scene
