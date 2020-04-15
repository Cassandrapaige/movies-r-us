import React from 'react'
import './genre-item.styles.scss'

import {switchGenre} from './genre-item.utils'
const GenreIcon = ({genre}) => {
    return (
        <li className='genre-list-item' key={genre.id}>
            <img className='genre-icon' src={switchGenre(genre.name)} alt={genre.name}/>
            {genre.name}
        </li>
    )
}

export default GenreIcon
