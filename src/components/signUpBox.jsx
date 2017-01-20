import React, { Component } from 'react';
import '../css/signUpBox.css'


class SignUpBox extends Component {
  render() {
    return(
      <div className="signUpBox">
        <label>
          <span>Username: </span><input type="text" id="uname"/>
        </label>
        <label>
          <span>Email: </span><input type="text" id="email"/>
        </label>
        <label>
          <span>Password: </span><input type="password" name="pass"/>
        </label>
        <button>SignUp!</button>
      </div>
    )
  }
}

export default SignUpBox;
