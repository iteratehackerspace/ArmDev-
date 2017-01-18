import React, { Component } from 'react';
import '../css/Components.css';

class AllBlogPosts extends Component {
  render() {
    const renderPosts = this.props.allPosts.map( (tweet, id) => {
      return (
        <div key={id}>
          <p id='author'>{tweet.author}</p>
          <p id='tweetBody'>{tweet.body}</p>
        </div>
      )
    })
    return(
      <div>
        {renderPosts}
      </div>
    )
  }
}

export default AllBlogPosts;
