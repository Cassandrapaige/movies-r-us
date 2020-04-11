import React from 'react'

import './spinner.styles.scss'

const Spinner = () => {
    return (
        <div className="loading">
            <div class="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner;
