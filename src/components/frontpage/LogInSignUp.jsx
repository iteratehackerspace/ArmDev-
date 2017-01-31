import React, { Component } from 'react';
import LogInBox from './LogInBox.jsx';
import SignUpBox from './SignUpBox.jsx';

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
