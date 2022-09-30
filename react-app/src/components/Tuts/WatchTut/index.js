//WatchTut

import React from 'react'
import ReactPlayer from 'react-player'


function WatchTut() {
  return (
    <div>
      <ReactPlayer url="https://youtut.s3.us-west-1.amazonaws.com/test-vid.mp4" controls/>
    </div>
  )
}

export default WatchTut
