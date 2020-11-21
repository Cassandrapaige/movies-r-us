import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {API_KEY} from '../../base'

import './play-button.styles.scss'

const PlayButton = ({id, action}) => {
    const [video, setVideo] = useState(null)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
        .then(result => {
            if(result.data.results.length === 0) {
                return null
            } else {
                setVideo(result.data.results[0].key)
            }
        },(error => console.log(error)))
    },[id])

    return (
       
       <div className="play-button-space-holder">
        {video &&
        <div className="play-button" onClick = {() => action(id)}>
            <i className="fas fa-play"></i>Play Trailer
        </div>}
       </div>
    
    )
}

export default PlayButton

