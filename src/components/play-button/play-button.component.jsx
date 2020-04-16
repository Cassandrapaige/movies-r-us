import React from 'react'

import './play-button.styles.scss'

const PlayButton = ({action, id}) => {
    return (
         <div className="play-button" onClick = {() => action(id)}>
            <i className="far fa-play-circle"></i>
        </div>
    )
}

export default PlayButton
