import React, { Component } from 'react';
import { Link } from 'react-router';

import '../../css/frontpage/FrontPageHeader.css';

class FrontPageHeader extends Component {
  constructor(){
    super();
  }
  clickHandler = (event) => {
    const array = this.props.states;
    array[(parseInt(event.target.id)+1)%2] = false;
    array[parseInt(event.target.id)] = !array[parseInt(event.target.id)];
    this.props.changeState(array);
  }
  render(){
    return (
        <div className="header">
          <li className='left'><Link to={'/blog'}>Blog</Link></li>
          <li className='left'><Link to={'/forum'}>Forum</Link></li>
          <li className='right'><a href='https://silicondzor.com/' target='_blank'>Events</a></li>
          <li><a href='http://iteratehackerspace.com/' target='_blank'>About Us</a></li>
          <li onClick={this.clickHandler}><a id ="0" href='#'>Log In</a></li>
          <li onClick={this.clickHandler}><a id ="1" href='#'>Sign Up</a></li>
        </div>
    )
  }
}

export default FrontPageHeader;
