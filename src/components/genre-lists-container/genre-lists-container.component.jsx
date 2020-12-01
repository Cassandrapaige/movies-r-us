import React from 'react'

import {API_KEY} from '../../base'
import {GENRE_DATA} from '../../constants'

import ScrollingWrapper from '../scrolling-wrapper/scrolling-wrapper.component';

import './genre-lists-container.styles.scss'

const GenreListsContainer = ({...props}) => {
    let genreIds = Object.keys(GENRE_DATA);
    return (
        <div className = 'genre-lists-container'>
            {
                genreIds.map(id => {
                    let title = Object.keys(GENRE_DATA).map(key => GENRE_DATA[id].genre);
                    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`
                    
                    return (
                    <div key = {id}>
                        <h3>{title[0]}</h3>
                        <ScrollingWrapper 
                            id = {id} 
                            linkRel = {`/movies&genre=${GENRE_DATA[id].genre.toLowerCase()}&id=${id}&page=1`}
                            url = {url} 
                            {...props} />                
                    </div>
                )})
            }
            <button onClick = {() => window.scrollTo(0, 0)}>Go to top</button>
        </div>
    )
}

export default GenreListsContainer