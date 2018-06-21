import React, { Component } from 'react';

class Navbarcustom extends Component {
  
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">Testing</a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <a href="/">SignUp</a>
              </li>
              <li>
                <a href="/Login">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      );
  }
}

export default Navbarcustom;
