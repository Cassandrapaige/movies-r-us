import React, { Fragment } from 'react'

import Header from '../../components/header/header.component'

import NowPlayingView from '../NowPlayingView' 

const Homepage = () => {
    return (
    <Fragment>
        <Header />
        <NowPlayingView />
    </Fragment>
    )
}

export default Homepage
