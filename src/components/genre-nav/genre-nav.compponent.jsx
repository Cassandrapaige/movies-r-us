import React from 'react'

import {GENRE_DATA} from '../../constants'
import GenreItems from '../genre-items/genre-items.component'

import './genre-nav.styles.scss'

const GenreNav = ({setIsActive, isDropdown}) => {    
    return (
    <div className = {`${isDropdown ? 'dropdown-genre-list' : 'genre-list-nav'}`}>
        {Object.keys(GENRE_DATA).map((el, index) => {
           return (
            <GenreItems genreNav 
                key = {index}
                isDropdown = {isDropdown}
                id = {el}
                name = {GENRE_DATA[el].genre} 
                setIsActive = {setIsActive}/>
           )
    })}</div>
    )
}

export default GenreNav