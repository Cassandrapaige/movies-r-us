import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {API_KEY} from '../../base'

import './header.styles.scss'

const Header = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
        .then(result => {
            setMovies(result.data.results[2])
        }).catch(error => console.log(error))
    },[])

    return (
        <header className = 'main-header' style= {{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies.poster_path})`}}>
            <div className = 'header-content'>
                <h1 className='header-title'>Where <span className= 'slogan'>Movies</span> Are A Big Deal</h1>
                <p>Browse through hundreds of movies or search for your favourites to find ones that are similar</p>
            </div>
        </header>
    )
}

export default Header;