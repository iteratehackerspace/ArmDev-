import React, { Component } from 'react';
import '../css/LogInBox.css'

class LogInBox extends Component {
  constructor(){
    super();
    this.send = this.send.bind(this);
  }
  send(){
    let falseCreds = false;
    const mail = document.getElementsByClassName('loginBox')[0].childNodes[0].childNodes[1].value;
    const pass = document.getElementsByClassName('loginBox')[0].childNodes[1].childNodes[1].value;
    if (mail.search('@') === -1){
      document.getElementsByClassName('loginBox')[0].childNodes[0].style.border="1px solid #FF0000";
      falseCreds = true;
    } else {
      document.getElementsByClassName('loginBox')[0].childNodes[0].style.border="";
      falseCreds = false;
    }
    if (pass.length <= 6){
      document.getElementsByClassName('loginBox')[0].childNodes[1].style.border="1px solid #FF0000";
      falseCreds = true;
    } else {
      document.getElementsByClassName('loginBox')[0].childNodes[1].style.border="";
      falseCreds = false;
    }
    if (falseCreds){
      return;
    }
    const request_options = {
      method: 'post',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
      body:JSON.stringify({
        email : mail,
        password: pass
      })
    };
    fetch('http://localhost:8080/user_login', request_options);
  }
  render() {
    return(
      <div className="loginBox" style={this.state}>
        <label>
          <span>Email: </span><input type="text" id="email"/>
        </label>
        <label>
          <span>Password: </span><input type="password" name="pass"/>
        </label>
        <button onClick={this.send}>LogIn!</button>
      </div>
    )
  }
}

export default LogInBox;
