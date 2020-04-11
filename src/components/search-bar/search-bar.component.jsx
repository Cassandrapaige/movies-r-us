import React from 'react'

import './search-bar.styles.scss'

const Search = (props) => {
    return (
        <form className = {props.activate_search ? 'expand_search search_form' : 'search_form' } onSubmit={props.handleSubmit}>
            <div className="input-field">
                <input 
                    onClick = {props.toggleSearch}
                    type="text" 
                    placeholder='&#xF002; Search movie' 
                    onChange={props.onChange} 
                    value = {props.value}/>            
            </div>
        </form>
    )
}

export default Search;