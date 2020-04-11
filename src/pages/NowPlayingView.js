import React from 'react'

import {API_KEY} from '../base'

import FetchMovie from '../components/fetch-movie/fetch-movie.component'

const NowPlayingView = () => (
            <FetchMovie 
                title = 'Now Playing'
                url = {`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`} />
)
export default NowPlayingView
