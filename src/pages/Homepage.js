import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {API_KEY} from '../base'

import Header from '../components/header/header.component'
import GenreList from '../components/genre-list/genre-list.component'
import MovieView from '../components/movie-view/movie-view.component'

const Homepage = () => {
    const [title, setTitle] = useState('Horror')

    return (
    <div className = 'homepage-container'>
        <Header/>
        <MovieView 
            num = '750'
            url = {`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`}
            title = {title}
        />
    </div>
    )
}

export default Homepage
