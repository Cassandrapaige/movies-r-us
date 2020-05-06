import React from 'react'

import Header from '../components/header/header.component'
import ScrollingListContainer from '../components/scrolling-list-container/scrolling-list-container.component'


const Homepage = () => {
    return (
    <div className = 'homepage-container'>
        <Header/>
        <ScrollingListContainer />
    </div>
    )
}

export default Homepage
