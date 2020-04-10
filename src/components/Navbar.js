import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Search from './Search'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            value: '',
            activate_search: false
        }
    }

    toggleClass = () => {
        this.setState({
            active: !this.state.active
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push({
            pathname: '/search',
            search: this.state.value
        })
        this.setState({
            value: '',
            active: !this.state.active
        })
        window.location.reload();
    }
    
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    toggleSearch = () => {
        this.setState({
            activate_search: !this.state.activate_search
        })
    }

    render() {
        return (
        <nav className='navbar'>
        <div className="hamburger_menu">
            <a href='#' onClick= {this.toggleClass}>
               {this.state.active ? <i class="fas fa-times"></i> :
               <i className="fas fa-bars"></i>
               } </a>
        </div>
            <NavLink to= '/' className='navbar-brand'>Movies R Us</NavLink>
            <ul className="navbar-nav" id={this.state.active ? "show" : null}>
                <li className="navbar-item" onClick= {this.toggleClass}>
                    <NavLink to= '/new' className='nav-link'>Now Playing</NavLink>
                </li>
                <li className="navbar-item" onClick= {this.toggleClass}>
                    <NavLink to= '/popular' className='nav-link'>Most Popular</NavLink>
                </li>
                <li className="navbar-item" onClick= {this.toggleClass}>
                    <NavLink to= '/top-rated' className='nav-link'>Top Rated</NavLink>
                </li>
                <li className="navbar-item">
                    <Search 
                        activate_search = {this.state.activate_search}
                        toggleSearch = {this.toggleSearch}
                        onChange = {this.handleChange}
                        handleSubmit = {this.handleSubmit}
                        value = {this.state.value}
                    />
                </li>
            </ul>
        </nav>
        )
    }
}

export default withRouter(Navbar);