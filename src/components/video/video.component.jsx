import React from 'react'

import './video.styles.scss'

const Video = ({toggleView, video}) => {
    return (
        <div className="video">
            <button onClick = {toggleView}> <i className="fas fa-times"></i></button>
            <iframe src={`https://www.youtube.com/embed/${video}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Video;
