import React from 'react'

import './substring-text.styles.scss'

/* DISPLAY MAX 80 CHARACTERS OF MOVIE-OVERVIEW */

const substring = (desc, limit= 80) => {
    const fullDesc = [];
    if(desc.length > limit) {
        desc.split(' ').reduce((acc, cur) => {
            if(acc + cur.length <= limit) {
                fullDesc.push(cur);
            }
    return acc + cur.length;
    }, 0);
    return `${fullDesc.join(' ')}..`;}
    return desc;
}

const Substring = ({text}) => {
    return <p className = 'movie-overview'>{substring(text)}</p>
    
}

export default Substring
