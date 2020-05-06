import React from 'react'

import {API_KEY} from '../base'

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

const GENRE_DATA = {
    28: {
        genre: 'Action'
    },
    12: {
        genre: 'Adventure'
    },
    16: {
        genre: 'Animation'
    },
    35: {
        genre: 'Comedy'
    },
    80: {
        genre: 'Crime'
    },
    99: {
        genre: 'Documentary'
    },
    18: {
        genre: 'Drama'
    },
    10751: {
        genre: 'Family'
    },
    14: {
        genre: 'Fantasy'
    },
    36: {
        genre: 'History'
    },
    27: {
        genre: 'Horror'
    },
    10404: {
        genre: 'Music'
    },
    9648: {
        genre: 'Mystery'
    },
    10749: {
        genre: 'Romance'
    },
    878: {
        genre: 'Science Fiction'
    },
    10770: {
        genre: 'TV Movie'
    },
    53: {
        genre: 'Thriller'
    },
    10752: {
        genre: 'War'
    },
    37: {
        genre: 'Western'
    }
}


export default GenrePage