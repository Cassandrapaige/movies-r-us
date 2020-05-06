import React, {useState} from 'react'
import axios from 'axios'

import {API_KEY} from '../../base'
import {GENRE_DATA} from '../../constants'

import ScrollingWrapper from '../scrolling-wrapper/scrolling-wrapper.component';

import './scrolling-list-container.styles.scss'

const ScrollingListContainer = ({...props}) => {
    let data = Object.keys(GENRE_DATA);
    return (
        <div className = 'scrolling-list-container'>
            {
                data.map(key => (
                    <ScrollingWrapper id = {key} {...props}/>
                ))
            }
            <button onClick = {() => window.scrollTo(0, 0)}>Go to top</button>
        </div>
    )
}

export default ScrollingListContainer