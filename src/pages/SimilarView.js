import React from 'react'

import {API_KEY} from '../base'

import FetchMovie from '../components/fetch-movie/fetch-movie.component'

const SimilarView = ({match}) => {
    let id = match.params.movie_id

    return (
        <div>
            <FetchMovie 
                title = 'Similar movies'
                error = 'Apparently this movie is just so original that no other can compare.'
                url = {`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`} />
        </div>
    )
}

export default SimilarView
