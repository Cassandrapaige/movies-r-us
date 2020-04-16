import React from 'react'
import './genre-items.styles.scss'

import {switchGenre} from './genre-items.utils'
const GenreItems = ({genres}) => {
    return (
    <div className= 'genre-list'>
        {genres.map(genre => (
        <li className='genre-list-item' key={genre.id}>
            <img className='genre-icon' src={switchGenre(genre.name)} alt={genre.name}/>
            {genre.name}
        </li>))}
    </div>
    )
}

export default GenreItems
