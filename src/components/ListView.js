import React from 'react'
import arrow from '../images/arrow.png'

const ListView = (props) => {
    return (
        <div className = {props.type}>
            <h2>{props.title}</h2>
            {props.children}
            <div className="left_arrow">
                <img src={arrow} alt="scroll left"/>
            </div>
        </div>
    )
}

export default ListView;