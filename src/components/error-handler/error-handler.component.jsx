import React, { Component } from 'react'
import { NavLink, withRouter, Redirect } from 'react-router-dom'

import './error-handler.styles.scss'

class ErrorHandler extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, redirect: false };
    }
    
    componentDidCatch = error => this.setState({hasError: true})

    goBack = () => this.setState({redirect: true})

    render() {

      const {redirect, hasError} = this.state
      const {children, history} = this.props
      
        if(redirect) return <Redirect to = {history.goBack()} />
        
        if (hasError) return (
        <div className= 'err'>
          <h2 className='errorMsg'>Ooops. Looks like something went wrong.</h2>
          <button onClick = {this.goBack} className = 'back-btn'> 
            <i class="fas fa-arrow-left"></i> Go back 
          </button>
        </div>)
        
        return children;
    }
  }

  export default withRouter(ErrorHandler);