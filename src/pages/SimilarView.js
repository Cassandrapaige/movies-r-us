import React from 'react'

import {API_KEY} from '../base'

import MovieView from '../components/movie-view/movie-view.component'

const SimilarView = ({match}) => {
    let id = match.params.movie_id

    return (
        <MovieView 
            title = 'Similar movies'
            error = 'Apparently this movie is just so original that no other can compare.'
            url = {`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`} />
    )
}

export default SimilarView
