import React, { Component } from 'react';
import SignInUp from './SignInUp.jsx'
import '../css/FrontPage.css'

class FrontPage extends Component {
  render() {
    return(
      <div className='wholeScreen'>
        Arm<span className='devStyle'>Dev</span>
      <SignInUp />
      <SignInUp />
      </div>
    )
  }
}

export default FrontPage;
