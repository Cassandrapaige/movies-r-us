import React from 'react'

import './search-bar.styles.scss'

const Search = ({isVisible, toggleSearch, handleChange, handleSubmit, value}) => {
    return (
        <form className = {`search_form ${isVisible ? 'expand_search' : ''}`} onSubmit={handleSubmit}>
            <div className="input-field">
                <input 
                    onClick = {toggleSearch}
                    type="text" 
                    placeholder='&#xF002; Search movie' 
                    onChange={handleChange} 
                    value = {value}/>            
            </div>
        </form>
    )
}

export default Search;