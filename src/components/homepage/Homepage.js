import React, { Fragment } from 'react'

import Header from './Header'
import NowPlayingView from '../views/NowPlayingView' 

const Homepage = () => {
    return (
    <Fragment>
        <Header />
        <NowPlayingView />
    </Fragment>
    )
}

export default Homepage
