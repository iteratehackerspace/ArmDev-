import React, { Component } from 'react';
import '../css/LogInBox.css'

class LogInBox extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.send = this.send.bind(this);
    this.state = {value: ["",""], styles: [{},{}], ok: [false, false]};
  }
  handleChange(event) {
    const values = this.state.value;
    values[event.target.id] = event.target.value;
    if ((event.target.id*1) === 0){
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
    } else if ((event.target.id*1) === 1){
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
    if (this.state.ok[0] && this.state.ok[1])
    {
      const mail = this.state.value[0];
      const pass = this.state.value[1];
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
  }
  render() {
    return(
      <div className="loginBox" style={this.state}>
        <label>
          <span>Email: </span><input style={this.state.styles[0]} id="0" type="text" value={this.state.value[0]} onChange={this.handleChange} />
        </label>
        <label>
          <span>Password: </span><input style={this.state.styles[1]} id="1" type="password" value={this.state.value[1]} onChange={this.handleChange}/>
        </label>
        <button onClick={this.send}>LogIn!</button>
      </div>
    )
  }
}

export default LogInBox;
