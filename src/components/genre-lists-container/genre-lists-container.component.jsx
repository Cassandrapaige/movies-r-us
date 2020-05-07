import React, {useState} from 'react'
import axios from 'axios'

import {API_KEY} from '../../base'
import {GENRE_DATA} from '../../constants'

import ScrollingWrapper from '../scrolling-wrapper/scrolling-wrapper.component';

import './genre-lists-container.styles.scss'

const GenreListsContainer = ({...props}) => {
    let genreIds = Object.keys(GENRE_DATA);

    return (
        <div className = 'scrolling-list-container'>
            {
                genreIds.map(id => {
                    let title = Object.keys(GENRE_DATA).map(key => GENRE_DATA[id].genre)
                    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`
                    
                    return (
                    <ScrollingWrapper 
                        id = {id} 
                        title = {title[0]} 
                        linkRel = {`/movies/genre/${id}`}
                        url = {url} 
                        {...props} />
                )})
            }
            <button onClick = {() => window.scrollTo(0, 0)}>Go to top</button>
        </div>
    )
}

export default GenreListsContainer