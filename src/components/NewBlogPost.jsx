import React, { Component } from 'react';
import '../css/NewBlogPost.css'

class NewBlogPost extends Component {
  blogPost(e) {
    e.preventDefault();
    const author = this._author.value;
    const body = this._body.value;
    this.props.handleNewBlogPost(author, body);
  }
  render() {
    return (
      <form onSubmit={this.blogPost.bind(this)}>
        <input placeholder='Name: ' ref={(input) => this._author = input} />
        <input placeholder='Your post: ' ref={(input) => this._body = input}/>
        <input type='submit' value='Submit Blog'/>
      </form>
    )
  }
}

export default NewBlogPost;
