import React, { Component } from 'react';
import '../css/CredentialBox.css'

class SignUpBox extends Component {
  constructor(){
    super();
    this.send = this.send.bind(this);
  }
  send(){
    let falseCreds = false;
    const firstName = document.getElementsByClassName('signUpBox')[0].childNodes[0].childNodes[1].value;
    const lastName = document.getElementsByClassName('signUpBox')[0].childNodes[1].childNodes[1].value;
    const mail = document.getElementsByClassName('signUpBox')[0].childNodes[2].childNodes[1].value;
    const username = document.getElementsByClassName('signUpBox')[0].childNodes[3].childNodes[1].value;
    const pass = document.getElementsByClassName('signUpBox')[0].childNodes[4].childNodes[1].value;
    if (firstName==="" || firstName.search(' ')!= -1){
      document.getElementsByClassName('signUpBox')[0].childNodes[0].style.border="1px solid #FF0000";
      falseCreds = true;
    } else {
      document.getElementsByClassName('signUpBox')[0].childNodes[0].style.border="";
      falseCreds = false;
    }
    if (lastName==="" || lastName.search(' ')!= -1){
      document.getElementsByClassName('signUpBox')[0].childNodes[1].style.border="1px solid #FF0000";
      falseCreds = true;
    } else {
      document.getElementsByClassName('signUpBox')[0].childNodes[1].style.border="";
      falseCreds = false;
    }
    if (mail.search('@') === -1){
      document.getElementsByClassName('signUpBox')[0].childNodes[2].style.border="1px solid #FF0000";
      falseCreds = true;
    } else {
      document.getElementsByClassName('signUpBox')[0].childNodes[2].style.border="";
      falseCreds = false;
    }
    if (username.length <= 4){
      document.getElementsByClassName('signUpBox')[0].childNodes[3].style.border="1px solid #FF0000";
      falseCreds = true;
    } else {
      document.getElementsByClassName('signUpBox')[0].childNodes[3].style.border="";
      falseCreds = false;
    }
    if (pass.length <= 6){
      document.getElementsByClassName('signUpBox')[0].childNodes[4].style.border="1px solid #FF0000";
      falseCreds = true;
    } else {
      document.getElementsByClassName('signUpBox')[0].childNodes[4].style.border="";
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
        fullName : firstName+" "+lastName,
        email : mail,
        uname: username,
        password: pass
      })
    };
    fetch('http://localhost:8080/user_registration', request_options);
  }
  render() {
    return(
      <div className="signUpBox">
        <label>
          <span>First Name: </span><input type="text" />
        </label>
        <label>
          <span>Last Name: </span><input type="text" />
        </label>
        <label>
          <span>Email: </span><input type="text" />
        </label>
        <label>
          <span>User Name: </span><input type="text" />
        </label>
        <label>
          <span>Password: </span><input type="password" />
        </label>
        <button onClick={this.send}>SignUp!</button>
      </div>
    )
  }
}

export default SignUpBox;
