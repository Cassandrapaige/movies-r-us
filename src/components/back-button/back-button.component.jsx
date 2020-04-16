import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import './back-button.styles.scss'

const BackButton = ({history}) => {

    const goBack = () => history.goBack()

    return <button onClick = {goBack} className = 'back-btn'> <i className="fas fa-arrow-left"></i> Go back </button>
}

export default withRouter(BackButton)
