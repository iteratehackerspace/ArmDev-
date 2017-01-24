import React, { Component } from 'react';
// import NewBlogPost from './components/NewBlogPost.jsx';
import AllBlogPosts from './components/AllBlogPosts.jsx';
// import FrontPage from './components/frontpage/FrontPage.jsx'
// import LogInBox from './components/LogInBox.jsx';
// import SignUpBox from './components/SignUpBox.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <AllBlogPosts />
      </div>
    );
  }
}

export default App;
