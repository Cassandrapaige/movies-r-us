import React from 'react'

const Search = (props) => {
    return (
        <form className = 'search_form' onSubmit={props.handleSubmit}>
            <div className="input-field">
                <input type="text" placeholder='&#xF002; Search movie' onChange={props.onChange} value = {props.value}/>            
            </div>
        </form>
    )
}

export default Search;