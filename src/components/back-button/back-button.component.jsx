import React, {useState} from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import './back-button.styles.scss'

const BackButton = ({history}) => {
    const [redirect, setRedirect] = useState(false)

    const goBack = () => setRedirect(true)

    if(redirect) return <Redirect to = {history.goBack()} />

    return <button onClick = {goBack} className = 'back-btn'> <i className="fas fa-arrow-left"></i> Go back </button>
}

export default withRouter(BackButton)
