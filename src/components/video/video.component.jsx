import React from 'react'
import Draggable from 'react-draggable'

import './video.styles.scss'

const Video = ({toggleView, video}) => {
    return (
    <Draggable>
        <div className="video">
            <button onClick = {toggleView} onTouchStart = {toggleView}> <i className="fas fa-times"></i></button>   
            <iframe 
                src={`https://www.youtube.com/embed/${video}?autoplay=1&loop=1&autopause=0`} 
                frameBorder="0" 
                title="movie trailer"
                allow="autoplay; fullscreen" 
                allowFullScreen
            />
            <div className="draggable">
                <i className="fas fa-arrows-alt"></i>
            </div>
        </div>
    </Draggable>
    )
}

export default Video;