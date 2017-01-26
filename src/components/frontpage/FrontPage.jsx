import React, { Component } from 'react';

import FrontPageHeader from './FrontPageHeader';
import LogInBox from './LogInBox';
import SignUpBox from './SignUpBox';
import SignUpAPI from './SignUpAPI';
import FrontPageFooter from './FrontPageFooter';

import '../../css/frontpage/FrontPage.css'
import '../../css/frontpage/CredentialBox.css';

class FrontPage extends Component {
  render() {
    return(
      <div className='wholeScreen'>
        <div className='bg-image'></div>
        <FrontPageHeader />
        <SignUpAPI />
      {/*<LogInBox />
      <SignUpBox />*/}
        <FrontPageFooter />
      </div>
    )
  }
}

export default FrontPage;
