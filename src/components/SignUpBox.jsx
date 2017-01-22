import React, { Component } from 'react';
import '../css/CredentialBox.css'

class SignUpBox extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.send = this.send.bind(this);
    this.state = {value: ["","","","",""], styles: [{},{},{},{},{}], ok: [false, false, false, false, false]};
  }
  handleChange(event) {
    const values = this.state.value;
    values[event.target.id] = event.target.value;
    if ((event.target.id*1) === 0 || (event.target.id*1) === 1){
      if (event.target.value==="" || event.target.value.search(' ')!= -1){
        const stls = this.state.styles;
        stls[event.target.id] = {borderColor: '#FF0000'};
        const oks = this.state.ok;
        oks[event.target.id] = false;
        this.setState({styles: stls, ok: oks});
      } else{
        const stls = this.state.styles;
        stls[event.target.id] = {borderColor: '#D9FFA9'};
        const oks = this.state.ok;
        oks[event.target.id] = true;
        this.setState({styles: stls, ok: oks});
      }
    }
    else if ((event.target.id*1) === 2){
      if (event.target.value.search('@') === -1){
        const stls = this.state.styles;
        stls[event.target.id] = {borderColor: '#FF0000'};
        const oks = this.state.ok;
        oks[event.target.id] = false;
        this.setState({styles: stls, ok: oks});
      } else{
        const stls = this.state.styles;
        stls[event.target.id] = {borderColor: '#D9FFA9'};
        const oks = this.state.ok;
        oks[event.target.id] = true;
        this.setState({styles: stls, ok: oks});
      }
    }
    else if ((event.target.id*1) === 3){
      if (event.target.value.length <= 4){
        const stls = this.state.styles;
        stls[event.target.id] = {borderColor: '#FF0000'};
        const oks = this.state.ok;
        oks[event.target.id] = false;
        this.setState({styles: stls, ok: oks});
      } else{
        const stls = this.state.styles;
        stls[event.target.id] = {borderColor: '#D9FFA9'};
        const oks = this.state.ok;
        oks[event.target.id] = true;
        this.setState({styles: stls, ok: oks});
      }
    }
    else if ((event.target.id*1) === 4){
      if (event.target.value.length <= 6){
        const stls = this.state.styles;
        stls[event.target.id] = {borderColor: '#FF0000'};
        const oks = this.state.ok;
        oks[event.target.id] = false;
        this.setState({styles: stls, ok: oks});
      } else {
        const stls = this.state.styles;
        stls[event.target.id] = {borderColor: '#D9FFA9'};
        const oks = this.state.ok;
        oks[event.target.id] = true;
        this.setState({styles: stls, ok: oks});
      }
    }
    this.setState({value: values});
  }
  send(){
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
          <span>First Name: </span><input style={this.state.styles[0]} id="0" type="text" value={this.state.value[0]} onChange={this.handleChange}/>
        </label>
        <label>
          <span>Last Name: </span><input style={this.state.styles[1]} id="1" type="text" value={this.state.value[1]} onChange={this.handleChange}/>
        </label>
        <label>
          <span>Email: </span><input style={this.state.styles[2]} id="2" type="text" value={this.state.value[2]} onChange={this.handleChange}/>
        </label>
        <label>
          <span>User Name: </span><input style={this.state.styles[3]} id="3" type="text" value={this.state.value[3]} onChange={this.handleChange}/>
        </label>
        <label>
          <span>Password: </span><input style={this.state.styles[4]} id="4" type="password" value={this.state.value[4]} onChange={this.handleChange}/>
        </label>
        <button onClick={this.send}>SignUp!</button>
      </div>
    )
  }
}

export default SignUpBox;
