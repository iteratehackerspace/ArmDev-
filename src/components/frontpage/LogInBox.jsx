import React, { Component } from 'react';
import '../../css/frontpage/LogInBox.css'

class LogInBox extends Component {
  constructor(){
    super();
    this.state = {value: ["",""], styles: [{},{}], ok: [false, false]};
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
  handleChange = (event) => {
    const values = this.state.value;
    values[event.target.id] = event.target.value;

    switch (parseInt(event.target.id)){
      case 0:
        if (event.target.value.length <= 4){
          this.badCredentials(event.target.id);
        } else{
          this.okCredentials(event.target.id);
        }
      break;
      case 1:
        if (event.target.value.length <= 6){
          this.badCredentials(event.target.id);
        } else {
          this.okCredentials(event.target.id);
        }
      break;
    }
    this.setState({value: values});
  }
  send = () => {
    if (this.state.ok[0] && this.state.ok[1])
    {
      const uname = this.state.value[0];
      const pass = this.state.value[1];
      const request_options = {
        method: 'post',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          username : uname,
          password: pass
        })
      };
      fetch('http://localhost:8080/user_login', request_options).
      then((result) =>{
        return result.json();
      })
      .then((result) =>{
        console.log(result);
      });
    }
  }
  render() {
    return(
      <div className="loginBox" style={{visibility: this.props.visibility ? "visible" : "hidden"}}>
        <label>
          <span>User Name: </span><input style={this.state.styles[0]} id="0" type="text" value={this.state.value[0]} onChange={this.handleChange} />
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
