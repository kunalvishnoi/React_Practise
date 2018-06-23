import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Login from '../Login'
class Loginform extends  Component {

  isAuthenticated() {
    const token = localStorage.getItem('token');
    return token && token.length > 10;
  }
  handleSuccessfulLogin() {
    this.setState();
  }
  render() {
    const isAlreadyAuthenticated = this.isAuthenticated();
    return (
      <div>
      { isAlreadyAuthenticated ? <Redirect to={{
        pathname: '/Protected/Directory'
      }}/> : (
      <Login onSuccessfulLogin={this.handleSuccessfulLogin.bind(this)}/>
      )
      }
      </div>
      );
  }
}

export default Loginform;
