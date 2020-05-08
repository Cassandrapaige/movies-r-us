import React from 'react'
import { NavLink } from 'react-router-dom'

import './genre-items.styles.scss'

import {switchGenre} from './genre-items.utils'
const GenreItems = ({genre, genreNav, id, name, setIsActive, isDropdown}) => {

    return (
        genreNav ?  
            <NavLink 
                to = {`/movies/genre/${id}`} 
                className={`${isDropdown ? 'dropdown-genre-item' :'genre-list-item'}`}
                onClick = {() => setIsActive(false)} key={id}>
                {name}
            </NavLink>    
            :
           <NavLink to = {`/movies/genre/${genre.id}`}>
                <li className='genre-list-item' key={genre.id}>
                    <img className='genre-icon' src={switchGenre(genre.name)} alt={genre.name}/>
                    {genre.name}
                </li>
            </NavLink>       
    )
}

export default GenreItems
