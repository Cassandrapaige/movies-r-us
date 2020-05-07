import React from 'react'

import Header from '../components/header/header.component'
import ContainerWithVideo from '../components/container-with-video/container-with-video.component'

const Homepage = () => {
    return (
    <div className = 'homepage-container'>
        <Header/>
        <ContainerWithVideo genreListsContainer/>
    </div>
    )
}

export default Homepage
