import React from 'react'
import Movies from './Movies'

const NowPlaying = () => {
    return (
       <Movies 
            title= "Now Playing" 
            view="now_playing" 
            container="movieList" 
        />
    )
}

export default NowPlaying;