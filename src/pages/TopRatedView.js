import React from 'react'

import {API_KEY} from '../base'

import FetchMovie from '../components/fetch-movie/fetch-movie.component'

const TopRatedView = () => (
        <FetchMovie 
            title = 'Top Rated'
            url = {`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`} />
    )

export default TopRatedView
