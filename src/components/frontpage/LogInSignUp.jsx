import React, { Component } from 'react';
import LogInBox from './LogInBox.jsx';
import SignUpBox from './SignUpBox.jsx';

import '../../css/frontpage/logInSignUp.css'

class LogInSignUp extends Component {
  render() {
    return (
      <div>
        <LogInBox />
        <SignUpBox />
      </div>
    );
  }
}

export default LogInSignUp
