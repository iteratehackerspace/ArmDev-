import React, { Component } from 'react';
import NewBlogPost from './components/NewBlogPost.jsx';
import AllBlogPosts from './components/AllBlogPosts.jsx';
import FrontPage from './components/frontpage/FrontPage.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <FrontPage />
      </div>
    );
  }
}

export default App;
