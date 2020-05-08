import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import ErrorMessage from '../error-message/error-message.component'

class ErrorHandler extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, redirect: false };
    }
    
    componentDidCatch = error => this.setState({hasError: true})

    goBack = () => {
      this.setState({redirect: true})
      window.location.reload()
    }

    render() {

      const {redirect, hasError} = this.state
      const {children, history} = this.props
      
        if(redirect) return <Redirect to = {history.goBack()} />
        
        if (hasError) return (
          <ErrorMessage error='Ooops. Looks like something went wrong.'>
            <button onClick = {this.goBack} className = 'back-btn'> 
              <i className="fas fa-arrow-left"></i> Go back 
            </button>
          </ErrorMessage>
        )
        
        return children;
    }
  }

  export default withRouter(ErrorHandler);