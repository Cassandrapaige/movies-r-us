import React, {Component } from 'react'
import { NavLink, withRouter, Redirect } from 'react-router-dom'

class ErrorCatch extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, redirect: false };
    }
    
    componentDidCatch(error, info) {
      this.setState({ 
        hasError: true
      })
    }

    goBack = () =>{
        this.setState({
            redirect: true
        })
        this.props.history.goBack();
    }

    render() {
        const { redirect } = this.state;
        if(redirect) {
            return <Redirect to = {this.goBack} />
        }
        if (this.state.hasError) {
        return (
        <div className= 'err'>
          <h2 className='errorMsg'>"Ooops. Looks like something went wrong."</h2>
          <button onClick = {this.goBack}>
          Go Back <i class="fas fa-arrow-right"></i></button>
        </div>
        )
        
      }
      return this.props.children;
    }
  }

  export default withRouter(ErrorCatch);