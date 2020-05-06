import React, {useState, useEffect} from 'react'

import GenreItems from '../genre-items/genre-items.component'

import './genre-list.styles.scss'

const GenreList = ({data}) => {
    return (
    <div className= 'genre-list'>
        {data.map(genre => (
            <GenreItems genre = {genre}/>
       ))}
    </div>
    )
}

export default GenreList