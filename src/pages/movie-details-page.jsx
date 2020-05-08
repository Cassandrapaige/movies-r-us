import React from 'react'

import {API_KEY} from '../base'

import ContainerWithVideo from '../components/container-with-video/container-with-video.component'

const MovieDetailsPage = ({match}) => {
    const id = match.params.genre_id

    return (
        <ContainerWithVideo movieDetails 
            url = {`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`} />
    )
}   

export default MovieDetailsPage