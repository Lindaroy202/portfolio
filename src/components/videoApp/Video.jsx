import React from 'react'
import video from '../../assets/video/line.mp4'
import "./video.css"

const Video = () => {
  return (
    <div className="VApp">
      <video src= {video} autoPlay loop muted plays-inline />
    </div> 
   )
}

export default Video