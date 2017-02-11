import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import AllBlogPosts from './components/AllBlogPosts.jsx';
import FrontPage from './components/frontpage/FrontPage.jsx';
import LogInBox from './components/frontpage/LogInBox.jsx';
import LogInSignUp from './components/frontpage/LogInSignUp.jsx'

export default class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={'/'} component={ FrontPage } />
        <Route path={'/blog'} component={ AllBlogPosts } />
        <Route path={'/logInSignUp'} component={ LogInSignUp } />
      </Router>
    );
  }
}
