import React, {Component} from 'react';
import '../../css/frontpage/LogInBox.css'

export default  class LogInBox extends Component {
    constructor() {
        super();
        this.state = {value: ["", ""], styles: [{}, {}], ok: [false, false]};
        this.regExpUname = /^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){3,15}[a-zA-Z0-9]$/;
    }

    badCredentials = (id) => {
        const {styles, ok} = this.state;
        styles[id] = {borderColor: '#FF0000'};
        ok[id] = false;
        this.setState({styles, ok});
    };

    okCredentials = (id) => {
        const {styles, ok} = this.state;
        styles[id] = {borderColor: '#D9FFA9'};
        ok[id] = false;
        this.setState({styles, ok});
    };

    handleChange = (event) => {
        const value = this.state.value;
        let test;

        value[event.target.id] = event.target.value;

        switch (parseInt(event.target.id)) {
            case 0:
                test = this.regExpUname.test(event.target.value);
                if (test) {
                    this.okCredentials(event.target.id);
                } else {
                    this.badCredentials(event.target.id);
                }
                break;
            case 1:
                if (event.target.value.length <= 6) {
                    this.badCredentials(event.target.id);
                } else {
                    this.okCredentials(event.target.id);
                }
                break;
        }
        this.setState({value});
    };

    send = () => {
        if (this.state.ok[0] && this.state.ok[1]) {
            const uname = this.state.value[0];
            const pass = this.state.value[1];
            const request_options = {
                method: 'post',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }),
                body: JSON.stringify({
                    username: uname,
                    password: pass
                })
            };
            fetch('http://localhost:8080/user_login', request_options)
                .then((result) => result.json())
                .then((result) => {
                    console.log(result);
                });
        }
    };

    render() {
        return (
            <div className="loginBox">
                <label>
                    <span>User Name: </span>
                    <input style={this.state.styles[0]}
                           id="0"
                           type="text"
                           value={this.state.value[0]}
                           onChange={this.handleChange}/>
                </label>
                <label>
                    <span>Password: </span>
                    <input style={this.state.styles[1]}
                           id="1"
                           type="password"
                           value={this.state.value[1]}
                           onChange={this.handleChange}/>
                </label>
                <button onClick={this.send}>LogIn!</button>
            </div>
        )
    }
}


