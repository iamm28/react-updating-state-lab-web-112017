// Code YouTubeDebugger Component Here
import React from 'react'
export default class YouTubeDebugger extends React.Component {
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleSetStateSB = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  handleSetStateVR = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings,{
        video: Object.assign({}, this.state.video, {
          resolution: '720p'
        })
      })
    })
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleSetStateSB}></button>
        <button className='resolution' onClick={this.handleSetStateVR}></button>
      </div>
    )
  }
}
