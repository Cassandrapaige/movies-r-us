import React from 'react'

import {API_KEY} from '../base'

import MovieView from '../components/movie-view/movie-view.component'

const PopularView = () => (
    <MovieView 
        title = 'Most Popular'
        url = {`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`} />
)

export default PopularView