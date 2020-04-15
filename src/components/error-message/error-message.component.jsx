import React from 'react'

import './error-message.styles.scss'

const ErrorMessage = ({error, goBack}) => (
    <div className= 'err'>
      <h2 className='errorMsg'>{error}</h2>
        <button onClick = {goBack} className = 'back-btn'> 
        <i className="fas fa-arrow-left"></i> Go back 
      </button>
    </div>
)

export default ErrorMessage