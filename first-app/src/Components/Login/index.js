import React, { Component } from 'react';
import superagent from 'superagent';

class Login extends  Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }
  handleemailChanged(event) {
    this.setState({email: event.target.value});
  }
   handlePasswordChanged(event) {
    this.setState({password: event.target.value});
  }
  submitForm(event) {
    event.preventDefault();
    superagent
      .post('http://54.157.21.6:8080/users/login')
      .send({email: this.state.email, password: this.state.password})
      .end((err, res) => {
        if(err) { this.setState({errorMessage: "Authentication Failed"}); 
        console.log("error": err);
        }
       console.log("res headers" , res.headers);
      });
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <form 
            className="form-signin"
            onSubmit={this.submitForm.bind(this)}
            name="email"
            >       
            <h2 className="form-signin-heading">Please login</h2>
            <input type="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleemailChanged.bind(this)}
              />
            <input type="password" 
              className="form-control" 
              value={this.state.password} 
              name="password"
              onChange={this.handlePasswordChanged.bind(this)}
              />      
            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
          </form>
        </div>
      </div>
      );
  }
}

export default Login;
