import React from 'react'

import {API_KEY} from '../base'

import {GENRE_DATA} from '../constants'

import MovieView from '../components/movie-view/movie-view.component'

const GenrePage = ({match}) => {
    let id = match.params.genre_id
    let title = Object.keys(GENRE_DATA).map(key => GENRE_DATA[id].genre)

    return (
        <MovieView 
            title = {title[0]}
            url = {`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`} />
    )
}   

export default GenrePage