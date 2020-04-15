import React from 'react'

const PlayButton = ({action, id}) => {
    return (
         <div className="play-button" onClick = {() => action(id)}>
            <i className="far fa-play-circle"></i>
        </div>
    )
}

export default PlayButton
