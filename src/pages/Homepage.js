import React from 'react'

import withVideo from '../withVideo'

import Header from '../components/header/header.component'
import GenreListsContainer from '../components/genre-lists-container/genre-lists-container.component'


const Homepage = ({action}) => {
    return (
    <div className = 'homepage-container'>
        <Header/>
        <GenreListsContainer action = {action} />
    </div>
    )
}

export default withVideo(Homepage)
