import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Signup from '../Signup'
class Signupform extends  Component {
  state = {
    isAuthenticated: false
  }
  isAuthenticated() {
    const token = localStorage.getItem('token');
    return token && token.length > 10;
  }
  handleSuccessfulSignup() {
    this.setState( {
      isAuthenticated: true
    });
  }
  render() {
    const {isAuthenticated} = this.state;
    return (
      <div>
      { isAuthenticated ? <Redirect to={{
        pathname: '/App/Directory'
      }}/> : (
      <Signup onSuccessfulSignup={this.handleSuccessfulSignup.bind(this)}/>
      )
      }
      </div>
      );
  }
}

export default Signupform;
