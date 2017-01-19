import React, { Component } from 'react';
import '../css/BlogPost.css';

class BlogPost extends Component {
  componentDidMount() {
    this.props.handleBlogPostSeen();
  }
  render() {
    const post = this.props.post;
    const renderTags = post.tags.map(tag => {
      return tag + ' ';
    })
    return (
      <div className='container'>
        <span className='boldFont'>{post.title}</span>
        <p>{renderTags}</p>
        <div className='authorsContainer'>
          <img src={post.author.image} />
          <span className='boldFont'>{post.author.fullName}, </span>
          <span>{post.author.ShortDescription}: </span>
          <span>Written on {post.time}</span>
        </div>
        <p>{post.text}</p>
        <span className='likes'>Seen {post.seen}, liked {post.likes} times</span>
        <button className='likeButton' onClick={this.props.handleBlogPostLike}>Like</button>
      </div>
    )
  }
}

export default BlogPost;
