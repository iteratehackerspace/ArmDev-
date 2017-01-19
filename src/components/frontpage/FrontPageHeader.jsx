import React, { Component } from 'react';
import '../../css/frontpage/FrontPageHeader.css'

class FrontPageHeader extends Component {
  render () {
    return (
        <div id="header">
          <nav role='navigation'>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Forum</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="https://github.com/iteratehackerspace">About Us</a></li>
            </ul>
          </nav>
        </div>
    )
  }
}

export default FrontPageHeader;
