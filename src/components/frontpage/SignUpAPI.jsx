import React, { Component } from 'react';

import '../../css/frontpage/SignUpAPI.css';

class SignUpAPI extends Component {
  render() {
    return (
      <div className='container'>
        <button>Sign in with GitHub</button>
        <button>Sign in with Facebook</button>
        <button>Sign in with Google</button>
        <button>Sign in with Twitter</button>
      </div>
    );
  }
}

export default SignUpAPI;
