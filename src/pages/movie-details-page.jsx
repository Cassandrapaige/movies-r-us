import React from 'react'
import {withRouter} from 'react-router-dom'

import {API_KEY} from '../base'

import MovieDetails from '../components/movie-details/movie-details.component'

import withVideo from '../withVideo'

const MovieDetailsPage = ({action, match}) => {
    const id = match.params.genre_id

    return (
        <MovieDetails
            action = {action}
            url = {`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`} />
    )
}   

export default withVideo(withRouter(MovieDetailsPage))