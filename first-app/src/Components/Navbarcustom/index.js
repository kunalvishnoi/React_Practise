import React, { Component } from 'react';

class Navbarcustom extends Component {
  
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">Testing</a>
            </div>
            <ul class="nav navbar-nav">
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
