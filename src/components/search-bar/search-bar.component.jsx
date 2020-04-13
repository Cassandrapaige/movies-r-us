import React, {useState} from 'react'
import {withRouter, NavLink} from 'react-router-dom'

import './search-bar.styles.scss'

const Search = ({history}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [value, setValue] = useState('')

    const joinQuery = query => query.split(' ').join('&');

    const handleSubmit = event => {
        event.preventDefault()
        history.push({
            pathname: '/search',
            search: joinQuery(value)
        })
        setValue('')
        window.location.reload()
    }

    const handleChange = event => setValue(event.target.value)

    const toggleClass = event => {
        setIsVisible(!isVisible)
        if(isVisible) event.target.blur()
    }

    
    return (
        <form className = {`search_form ${isVisible ? 'expand_search' : ''}`} onSubmit={handleSubmit}>
            <div className="input-field">
                <input 
                    onClick = {toggleClass}
                    type="text" 
                    placeholder='&#xF002; Search movie' 
                    onChange={handleChange} 
                    value = {value}/>            
            </div>
        </form>
    )
}

export default withRouter(Search)