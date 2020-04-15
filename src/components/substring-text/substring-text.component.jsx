import React from 'react'

import {substring} from './substring-text.utils'

const Substring = ({text}) => {
    return <p className = 'movie-overview'>{substring(text)}</p>
    
}

export default Substring
