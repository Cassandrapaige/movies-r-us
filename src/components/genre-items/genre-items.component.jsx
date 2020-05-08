import React from 'react'
import { NavLink } from 'react-router-dom'

import './genre-items.styles.scss'

import {switchGenre} from './genre-items.utils'
const GenreItems = ({genre, setIsActive}) => {
    return (
        <NavLink to = {`/movies/genre/${genre.id}`} onClick = {() => setIsActive && setIsActive(false)}>
            <li className='genre-list-item' key={genre.id}>
                <img className='genre-icon' src={switchGenre(genre.name)} alt={genre.name}/>
                {genre.name}
            </li>
        </NavLink>   
    )
}

export default GenreItems
