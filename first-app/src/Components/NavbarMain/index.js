import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
class NavbarMain extends Component {
  
  handleLogout(){
      localStorage.removeItem('token');
      this.setState();
  }
  isAuthenticated() {
    const token = localStorage.getItem('token');
    return token && token.length > 10;
  }
  render() {
     const isAlreadyAuthenticated = this.isAuthenticated();
    return (
      <div className="App">
      { !isAlreadyAuthenticated ? <Redirect to={{
        pathname: '/Login'
      }}/> : (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li>
              <NavLink to="#">
                <button
                className="btn btn-link" 
                onClick={this.handleLogout.bind(this)}>
                Logout
                </button>
                </NavLink>
                </li>
                <li>
                <NavLink to="/Protected/NewTodo">
                <button
                className="btn btn-link"
                >
                CreateTodo
                </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Protected/Directory">
                <button
                className="btn btn-link"
                >
                Dashboard
                </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        )
    }
      </div>
      );
  }
}

export default NavbarMain;
