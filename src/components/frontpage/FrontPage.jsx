import React, { Component } from 'react';
import SignInUp from '../SignInUp.jsx';
import FrontPageHeader from './FrontPageHeader.jsx';
import FrontPageFooter from './FrontPageFooter.jsx';
import '../../css/frontpage/FrontPage.css'
import LogInBox from '../LogInBox';
import SignUpBox from '../SignUpBox';
import '../../css/LogInBox.css';
import '../../css/SignUpBox.css';

class FrontPage extends Component {
  render() {
    return(
      <div className='wholeScreen'>
        <div className='bg-image'></div>
        <FrontPageHeader />
        <LogInBox />
        <SignUpBox />
      </div>
    )
  }
}

export default FrontPage;
