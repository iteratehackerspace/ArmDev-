import React, { Component } from 'react';
import '../css/LogInBox.css'

class LogInBox extends Component {
  render() {
    return(
      <div className="loginBox" style={this.state}>
        <label>
          <span>Email: </span><input type="text" id="email"/>
        </label>
        <label>
          <span>Password: </span><input type="password" name="pass"/>
        </label>
        <button>LogIn!</button>
      </div>
    )
  }
}

export default LogInBox;
