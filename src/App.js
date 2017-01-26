import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import AllBlogPosts from './components/AllBlogPosts.jsx';
import FrontPage from './components/frontpage/FrontPage.jsx'

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={'/'} component={ FrontPage } >
          <Route path={'blog'} component={ AllBlogPosts } />
        </Route>
      </Router>
    );
  }
}

export default App;
