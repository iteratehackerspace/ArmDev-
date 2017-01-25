import React, { Component } from 'react';
import '../../css/frontpage/FrontPageHeader.css';

function FrontPageHeader() {
    return (
        <div className="header">
          <li className='left'><a href="#">Blog</a></li>
          <li className='left'><a href="#">Forum</a></li>
          <li className='right'><a href="#">Events</a></li>
          <li><a href="http://iteratehackerspace.com/" target='_blank'>About Us</a></li>
          <li><a href="#">Log In</a></li>
          <li><a href="#">Sign Up</a></li>
        </div>
    )
}

export default FrontPageHeader;
