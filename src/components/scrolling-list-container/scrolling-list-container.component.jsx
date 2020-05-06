import React from 'react'

import {GENRE_DATA} from '../../constants'

import ScrollingWrapper from '../scrolling-wrapper/scrolling-wrapper.component';

import './scrolling-list-container.styles.scss'

const ScrollingListContainer = () => {
    let data = Object.keys(GENRE_DATA);
    return (
        <div className = 'scrolling-list-container'>
            {
                data.map(key => (
                    <ScrollingWrapper id = {key} />
                ))
            }
            <button onClick = {() => window.scrollTo(0, 0)}>Go to top</button>
        </div>
    )
}

export default ScrollingListContainer