import React, {useState} from 'react'

import GenreNav from '../genre-nav/genre-nav.compponent'

import './genre-button.styles.scss'

const GenreButton = () => {
    const [displayNav, setDisplayNav] = useState(false)
    return (
    <>
        <button className = 'genres-btn' onClick = {() => setDisplayNav(!displayNav)}>Genres</button>
        {displayNav && <GenreNav setIsActive = {setDisplayNav}/>}
    </>
    )
}

export default GenreButton