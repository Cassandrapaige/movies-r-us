import React from 'react'

import BackButton from '../back-button/back-button.component'

import './error-message.styles.scss'

const ErrorMessage = ({error}) => (
    <div className= 'err'>
      <h2 className='errorMsg'>{error}</h2>
        <BackButton />
    </div>
)

export default ErrorMessage