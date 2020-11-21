import React from 'react'

import {SubstringContainer} from './substring-text.styles'

const Substring = ({text, limit, ...props}) => {
    return <SubstringContainer {...props}>{text.substring(0, limit)}...</SubstringContainer>  
}

export default Substring
