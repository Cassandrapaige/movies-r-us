import React from 'react'

const Search = (props) => {
    return (
    <div className = 'search'>
        <h2>Look for any movie</h2>
        <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
                <input type="text" placeholder='Search movie' onChange={props.onChange}/>
            </div>
        </form>
    </div>
    )
}

export default Search;