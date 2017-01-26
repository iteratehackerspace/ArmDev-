import React, { Component } from 'react';
import '../../css/frontpage/CredentialBox.css'

class SignUpBox extends Component {
  constructor(){
    super();
    this.state = {value: new Array(5).fill(""),
      styles: new Array(5).fill({}),
      ok: new Array(5).fill(false),
      unameCheck: ["", {}]};
    this.unameFetchOptions;
  }
  badCredentials = (id) => {
    const stls = this.state.styles;
    stls[id] = {borderColor: '#FF0000'};
    const oks = this.state.ok;
    oks[id] = false;
    this.setState({styles: stls, ok: oks});
  }
  okCredentials = (id) => {
    const stls = this.state.styles;
    stls[id] = {borderColor: '#D9FFA9'};
    const oks = this.state.ok;
    oks[id] = true;
    this.setState({styles: stls, ok: oks});
  }
  createReqOpt = () => {
    this.unameFetchOptions = {
      method: 'post',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
      body:JSON.stringify({
        uname: this.state.value[3]
      })
    };
  }
  handleChange = (event) => {
    const values = this.state.value;
    values[event.target.id] = event.target.value;
    switch (parseInt(event.target.id)) {
      case 0:
      case 1:
        if (event.target.value==="" || event.target.value.search(' ') != -1){
          this.badCredentials(event.target.id);
        } else{
          this.okCredentials(event.target.id);
        }
        break;
      case 2:
        if (event.target.value.search('@') === -1){
          this.badCredentials(event.target.id);
        } else{
          this.okCredentials(event.target.id);
        }
        break;
      case 3:
        if (event.target.value.length <= 4){
          this.badCredentials(event.target.id);
        } else{
            this.okCredentials(event.target.id);
            this.createReqOpt();
            fetch('http://localhost:8080/uname_check', this.unameFetchOptions)
              .then((result) =>{
                return result.json();
              })
              .then((result) =>{
                if (result.unameAvailable === 0){
                  const stls = this.state.styles;
                  stls[3] = {borderColor: '#ffa100'};
                  const oks = this.state.ok;
                  oks[3] = false;
                  this.setState({styles: stls, ok: oks, unameCheck: ["Username is not available...", {color: '#ffa100'}]});
                } else if (result.unameAvailable === 1){
                    const stls = this.state.styles;
                    stls[3] = {borderColor: '#D9FFA9'};
                    const oks = this.state.ok;
                    oks[3] = true;
                    this.setState({styles: stls, ok: oks, unameCheck: ["Username is available", {color: '#D9FFA9'}]});
                }
              });
        }
        break;
        case 4:
          if (event.target.value.length <= 6){
            this.badCredentials(event.target.id);
          } else {
              this.okCredentials(event.target.id);
          }
        break;
      default:
        break;
    }
    this.setState({value: values});
  }
  send = () => {
    if (this.state.ok[0] && this.state.ok[1] && this.state.ok[2] && this.state.ok[3] && this.state.ok[4])
    {
      const firstName = this.state.value[0];
      const lastName = this.state.value[1];
      const mail = this.state.value[2];
      const username = this.state.value[3];
      const pass = this.state.value[4];
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
  }
  render() {
    return(
      <div className="signUpBox">
        <label>
          <span>First Name: </span>
          <input style={this.state.styles[0]} id="0" type="text" value={this.state.value[0]} onChange={this.handleChange}/>
        </label>
        <label>
          <span>Last Name: </span>
          <input style={this.state.styles[1]} id="1" type="text" value={this.state.value[1]} onChange={this.handleChange}/>
        </label>
        <label>
          <span>Email: </span>
          <input style={this.state.styles[2]} id="2" type="text" value={this.state.value[2]} onChange={this.handleChange}/>
        </label>
        <label>
          <span style={{width: "90px"}}>User Name: </span>
          <p style={this.state.unameCheck[1]}>
            {this.state.unameCheck[0]}
          </p>
          <input style={this.state.styles[3], {marginLeft: '60px'}} id="3" type="text" value={this.state.value[3]} onChange={this.handleChange}/>
        </label>
        <label>
          <span>Password: </span>
          <input style={this.state.styles[4]} id="4" type="password" value={this.state.value[4]} onChange={this.handleChange}/>
        </label>
        <button onClick={this.send}>SignUp!</button>
      </div>
    )
  }
}

export default SignUpBox;
