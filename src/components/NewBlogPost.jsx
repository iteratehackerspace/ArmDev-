import React, { Component } from 'react';
import '../css/NewBlogPost.css'

class NewBlogPost extends Component {
  _handleNewBlogPost(e) {
    e.preventDefault();
    const tagsArray = this._tags.value.split(' ');
    this.props.handleNewBlogPost(this._title.value, tagsArray, this._text.value);
  }
  render() {
    return (
      <form onSubmit={this._handleNewBlogPost.bind(this)}>
        <input className='textBox' placeholder='Blog name:' ref={input => this._title = input}/>
        <input className='textBox' placeholder='Blog tags:' ref={input => this._tags = input}/>
        <textarea className='textBox' rows='10' cols='50' placeholder='Blog text:' ref={textarea => this._text = textarea}/>
        <input className='submitButton' type='submit' value='Submit Blog'/>
      </form>
    )
  }
}

export default NewBlogPost;
