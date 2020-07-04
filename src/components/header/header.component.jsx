import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';

import {API_KEY} from '../../base'

import Search from '../search-bar/search-bar.component'

import './header.styles.scss'

const Header = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
      .then(result => {
        setData(result.data.results[9])
      },(error => console.log(error)))        
  }, [])
   
    return (
        <header className = 'main-header' style= {{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`}}>
            <div className = 'header-content'>
                <h1 className='header-title'>Where <span className= 'slogan'>Movies</span> Are A Big Deal</h1>
                <p>Browse through hundreds of movies or search for your favourites to find ones that are similar</p>
                <Search stickySearch/>
            </div>
        </header>
    )
}

export default withRouter(Header);
