import React, {useState} from 'react'
import axios from 'axios'

import {API_KEY} from '../../base'


import './play-button.styles.scss'

const PlayButton = ({id, action}) => {
    return (
         <div className="play-button" onClick = {() => action(id)}>
            <i class="fas fa-play"></i>Play Trailer
        </div>
    )
}

export default PlayButton

