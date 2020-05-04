import React from 'react'

import './video.styles.scss'

const Video = ({toggleView, video}) => {
    return (
        <div className="video">
            <button onClick = {toggleView}> <i className="fas fa-times"></i></button>
            <iframe src={`https://www.youtube.com/embed/${video}?autoplay=1&loop=1&autopause=0`} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
    )
}

export default Video;
