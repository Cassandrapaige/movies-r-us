import React from 'react'

import {API_KEY} from '../base'

import MovieView from '../components/movie-view/movie-view.component'

const NowPlayingView = ({num}) => (
    <MovieView 
        num = {num}
        title = 'Now Playing'
        url = {`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`} />
)
export default NowPlayingView
