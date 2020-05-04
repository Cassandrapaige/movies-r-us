import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../components/header/header.component'
import {API_KEY} from '../base'

const Homepage = () => {
    return (
    <div className = 'homepage-container'>
        <Header />
    </div>
    )
}

export default Homepage
