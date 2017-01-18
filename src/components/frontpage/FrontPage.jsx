import React, { Component } from 'react';
import SignInUp from '../SignInUp.jsx';
import FrontPageHeader from './FrontPageHeader.jsx';
import '../../css/FrontPage.css'


class FrontPage extends Component {
  render() {
    return(
      <div className='wholeScreen'>
        <FrontPageHeader />
        <span className='arm'>Arm</span><span className='dev'>Dev</span>
        <SignInUp />
        <SignInUp />
      </div>
    )
  }
}

export default FrontPage;
