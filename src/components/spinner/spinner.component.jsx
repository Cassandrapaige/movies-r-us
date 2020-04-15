import React from 'react'

import './spinner.styles.scss'

const Spinner = () => {
    return (
        <div className="loading">
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner;
