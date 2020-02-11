import React, { Fragment } from 'react'
import Popular from './Popular'
import TopRated from './TopRated'
import NowPlaying from './NowPlaying'
import Header from './Header'

const Homepage = () => {
    return (
        <Fragment>
        <Header />
        <div id = 'all-movies'>
            <NowPlaying />
            <Popular/> 
            <TopRated />
        </div>
        </Fragment>
    )
}

export default Homepage
