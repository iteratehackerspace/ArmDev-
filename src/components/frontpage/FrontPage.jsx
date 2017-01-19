import React, { Component } from 'react';
import SignInUp from '../SignInUp.jsx';
import FrontPageHeader from './FrontPageHeader.jsx';
import FrontPageFooter from './FrontPageFooter.jsx';
import '../../css/frontpage/FrontPage.css'


class FrontPage extends Component {
  render() {
    return(
      <div className='wholeScreen'>
        <div className='bg-image'></div>
        <FrontPageHeader />
        <SignInUp />
      </div>
    )
  }
}

export default FrontPage;
