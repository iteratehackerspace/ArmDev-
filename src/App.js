import React, { Component } from 'react';
import Header from './components/Header.jsx';
import NewBlogPost from './components/NewBlogPost.jsx';
import AllBlogPosts from './components/AllBlogPosts.jsx';
import FrontPage from './components/FrontPage.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      allBlogPosts: [],
    }
  }
  _handleNewBlogPost(_author, _body) {
    const blogPost = {id: this.state.allBlogPosts.length, author: _author, body: _body};
    this.setState({allBlogPosts: this.state.allBlogPosts.concat([blogPost])});
  }
  render() {
    return (
      <div>
        <FrontPage />
      </div>
    );
  }
}

export default App;




// <Header />
// <NewBlogPost handleNewBlogPost={this._handleNewBlogPost.bind(this)} />
// <AllBlogPosts allPosts={this.state.allBlogPosts} />
