import React, { Component } from 'react';
import Header from './components/Header.jsx';
import NewBlogPost from './components/NewBlogPost.jsx';
import AllBlogPosts from './components/AllBlogPosts.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allBlogPosts: [
        {id: 0, author: 'Edo', body: 'Hello World'},
        {id: 1, author: 'Kalipso', body: 'I am cool'}
      ]
    }
  }
  _handleNewBlogPost(author, body) {
    const tweet = {id: this.state.length, author: author, body: body};
    this.setState({allBlogPosts: this.state.allBlogPosts.concat([tweet])});
  }
  render() {
    return (
      <div>
        <Header />
        <NewBlogPost handleNewBlogPost={this._handleNewBlogPost.bind(this)} />
        <AllBlogPosts allPosts={this.state.allBlogPosts} />
      </div>
    );
  }
}

export default App;
