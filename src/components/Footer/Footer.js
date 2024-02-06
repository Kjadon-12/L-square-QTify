import React from 'react'
import song from '../../assets/5.mp3'

const Footer = () => {
  return (
    <div>
        <h3>song/footer</h3>
        <audio src={song} ></audio>
    </div>
  )
}

export default Footer