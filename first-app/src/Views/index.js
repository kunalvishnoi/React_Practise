import React, { Component } from 'react';
import superagent from 'superagent';
import { Redirect } from 'react-router-dom';
import {Login} from '../Components/Login.js';
class Loginmain extends  Component {
  

  render() {
    return (
      <div className="App">
      <Signup />
      </div>
      );
  }
}

export default Loginmain;
