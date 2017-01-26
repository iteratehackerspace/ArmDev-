import React, { Component } from 'react';
import { Link } from 'react-router';

import '../../css/frontpage/FrontPageHeader.css';

function FrontPageHeader() {
    return (
        <div className="header">
          <li className='left'><Link to={'/blog'}>Blog</Link></li>
          <li className='left'><Link to={'/forum'}>Forum</Link></li>
          <li className='right'><a href='https://silicondzor.com/' target='_blank'>Events</a></li>
          <li><a href='http://iteratehackerspace.com/' target='_blank'>About Us</a></li>
          <li><a href='#'>Log In</a></li>
          <li><a href='#'>Sign Up</a></li>
        </div>
    )
}

export default FrontPageHeader;
