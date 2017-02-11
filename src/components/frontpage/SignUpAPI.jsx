import React, {Component} from 'react';

import '../../css/frontpage/SignUpAPI.css';

export default class SignUpAPI extends Component {
  render() {
    return (
      <div className='container-signup'>
        <div className="signup">
        <button className="github">Sign in with GitHub</button>
        <button className="facebook">Sign in with Facebook</button>
        <button className="google">Sign in with Google</button>
        <button className="twitter">Sign in with Twitter</button>
      </div>

    </div>
    );
  }
}
