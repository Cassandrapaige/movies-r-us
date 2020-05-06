import React from 'react'

import {SubstringContainer} from './substring-text.styles'

 /* DISPLAY MAX 80 CHARACTERS OF MOVIE-OVERVIEW */

const substring = (desc, limit) => {
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

const Substring = ({text, limit, ...props}) => {
    return <SubstringContainer {...props}>{substring(text, limit)}</SubstringContainer>
    
}

export default Substring
