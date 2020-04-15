import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../components/header/header.component'
import NowPlayingView from '../pages/NowPlayingView'
import {API_KEY} from '../base'

const Homepage = () => {
    useEffect(() => {
        axios.get('https://api.themoviedb.org/trending/movies/week?api_key=70dcc58955640e84f5c3ea8e6d2b9ade')
        .then(result => console.log(result))
    })
    return (
    <div className = 'homepage-container'>
        <Header />
        <NowPlayingView num='600'/>
    </div>
    )
}

export default Homepage
