import React from 'react'
import {withRouter} from 'react-router-dom'

import {API_KEY} from '../base'

import MovieView from '../components/movie-view/movie-view.component'

import withVideo from '../withVideo'

const SimilarView = ({action, match}) => {
    let id = match.params.movie_id
    console.log(match)
    return (
        <MovieView 
            action = {action}
            title = 'Similar movies'
            error = 'Apparently this movie is just so original that no other can compare.'
            url = {`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`} />
    )
}

export default withVideo(withRouter(SimilarView))
