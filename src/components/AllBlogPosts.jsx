import React, { Component } from 'react';
import '../css/AllBlogPosts.css'

class AllBlogPosts extends Component {
  render() {
    const renderPosts = this.props.allPosts.map( (blogPost, id) => {
      return (
        <div key={id}>
          <p className='author'>{blogPost.author}</p>
          <p className='blogBody'>{blogPost.body}</p>
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
