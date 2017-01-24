import React, { Component } from 'react';
import FrontPageHeader from './FrontPageHeader.jsx';
import FrontPageFooter from './FrontPageFooter.jsx';
import '../../css/frontpage/FrontPage.css'
import LogInBox from '../LogInBox';
import SignUpBox from '../SignUpBox';
import '../../css/CredentialBox.css';

class FrontPage extends Component {
  render() {
    return(
      <div className='wholeScreen'>
        <div className='bg-image'></div>
        <FrontPageHeader />
      </div>
    )
  }
}

export default FrontPage;
