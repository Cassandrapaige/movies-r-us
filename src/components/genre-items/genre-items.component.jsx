import React from 'react'
import { NavLink } from 'react-router-dom'

import './genre-items.styles.scss'

import {switchGenre} from './genre-items.utils'

import {GENRE_DATA} from '../../constants'

const GenreItems = ({genre, genreNav, id, name, setIsActive, isDropdown}) => {

    return (
        genreNav ?  
            <NavLink 
                to = {`/movies&genre=${GENRE_DATA[id].genre.toLowerCase()}&id=${id}&page=1`} 
                className={`${isDropdown ? 'dropdown-genre-item' :'genre-list-item'}`}
                onClick = {() => setIsActive(false)} key={id}>
                {name}
            </NavLink>    
            :
           <NavLink to = {`/movies&genre=${GENRE_DATA[genre.id].genre.toLowerCase()}&id=${genre.id}&page=1`}>
                <li className='genre-list-item' key={genre.id}>
                    <img className='genre-icon' src={switchGenre(genre.name)} alt={genre.name}/>
                    {genre.name}
                </li>
            </NavLink>       
    )
}

export default GenreItems
