import React from 'react'

class Scene extends React.Component {
  render() {
    let { grem, one_screen = false, spacer = false, wh = null } = this.props
    return (
      <div
        className="scene"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: one_screen ? 'center' : 'top',
          height: one_screen ? '100vh' : 'auto',
          marginTop: spacer ? spacer * 100 + 'vh' : 'auto',
        }}
      >
        <div
          style={{
            maxWidth: 700,
            width: '100%',
            margin: '0 auto',
            background: 'white',
            borderLeft: 'solid 2px black',
            borderTop: 'solid 1px black',
            borderRight: 'solid 4px black',
            borderBottom: 'solid 4px black',
            padding: grem / 2,
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Scene
