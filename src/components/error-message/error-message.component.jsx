import React from 'react'

import './error-message.styles.scss'

const ErrorMessage = ({error, children}) => (
    <div className= 'err'>
      <h2 className='errorMsg'>{error}</h2>
        {children}
    </div>
)

export default ErrorMessage