import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    toggleClass = () => {
        this.setState({
            active: !this.state.active
        })
    }
    
    render() {
        return (
        <nav className='navbar'>
        <div className="hamburger_menu">
            <a href='#' onClick= {this.toggleClass}><i className="fas fa-bars"></i></a>
        </div>
            <NavLink to= '/' className='navbar-brand'>Movies R Us</NavLink>
            <ul className="navbar-nav" id={this.state.active ? "show" : null}>
                <li className="navbar-item">
                    <NavLink to= '/new' className='nav-link'>Now Playing</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to= '/popular' className='nav-link'>Most Popular</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to= '/top-rated' className='nav-link'>Top Rated</NavLink>
                </li>
            </ul>
        </nav>
        )
    }
}

export default Navbar;