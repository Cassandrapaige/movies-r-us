import React from 'react'

import {API_KEY} from '../base'

import MovieView from '../components/movie-view/movie-view.component'

const TopRatedView = () => (
        <MovieView 
            title = 'Top Rated'
            url = {`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`} />
    )

export default TopRatedView
