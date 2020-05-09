import React from 'react'

import {SubstringContainer} from './substring-text.styles'

const substring = (desc, limit) => `${desc.substring(0, limit)}...`

const Substring = ({text, limit, ...props}) => {
    return <SubstringContainer {...props}>{substring(text, limit)}</SubstringContainer>
    
}

export default Substring
