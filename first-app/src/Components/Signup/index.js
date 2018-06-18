import React, { Component } from 'react';

class Signup extends Component {
render() {
  return (
    <div className="App">
      <div class="wrapper">
        <form class="form-signin">       
          <h2 class="form-signin-heading">Please SignUp</h2>
          <input type="text" class="form-control" name="username" placeholder="Name" required="" autofocus="" />
          <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
          <input type="password" class="form-control" name="password" placeholder="Password" required=""/>      
          <label class="checkbox">
          <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
          </label>
          <button class="btn btn-lg btn-primary btn-block" type="submit">SignUp</button>   
        </form>
      </div>
    </div>
    );
  }
}
export default Signup;
