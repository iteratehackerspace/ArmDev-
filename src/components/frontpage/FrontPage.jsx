import React, { Component } from 'react';

import FrontPageHeader from './FrontPageHeader';
import LogInBox from './LogInBox';
import SignUpBox from './SignUpBox';
import SignUpAPI from './SignUpAPI';
import FrontPageFooter from './FrontPageFooter';

import '../../css/frontpage/FrontPage.css'
import '../../css/frontpage/CredentialBox.css';

class FrontPage extends Component {
  constructor(){
    super();
    this.state = {visibilityStates: [false, false]};
  }
  render() {
    return(
      <div className='wholeScreen'>
        <div className='bg-image'></div>
        <FrontPageHeader states = {this.state.visibilityStates} changeState={(states) => this.setState({visibilityStates: states})} />
        <SignUpAPI />
        <LogInBox visibility={this.state.visibilityStates[0]}/>
        <SignUpBox visibility={this.state.visibilityStates[1]}/>
        <FrontPageFooter />
      </div>
    )
  }
}

export default FrontPage;
