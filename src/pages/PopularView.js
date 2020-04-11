import React from 'react'

import {API_KEY} from '../base'

import FetchMovie from '../components/fetch-movie/fetch-movie.component'

const PopularView = () => (
        <FetchMovie 
            title = 'Most Popular'
            url = {`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`} />
    )

export default PopularView