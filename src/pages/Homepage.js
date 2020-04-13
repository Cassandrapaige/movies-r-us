import React, { Fragment } from 'react'

import Header from '../components/header/header.component'

import NowPlayingView from './NowPlayingView' 

const Homepage = () => {
    return (
    <div className = 'homepage-container'>
        <Header />
        <NowPlayingView num = {800}/>
    </div>
    )
}

export default Homepage
