import React, { Component } from 'react';
import '../css/NewBlogPost.css'

class NewBlogPost extends Component {
  constructor() {
    super();
    this.state = {
      isShown: true,
    }
  }
  showHide() {
    this.setState({isShown: !this.state.isShown});
  }
  _handleNewBlogPost(e) {
    e.preventDefault();
    const tagsArray = this._tags.value.split(' ');
    this.props.handleNewBlogPost(this._title.value, tagsArray, this._text.value);
  }
  render() {
    const showOrHide = () => {
      if (this.state.isShown) {
        return (
            <form onSubmit={this._handleNewBlogPost.bind(this)}>
              <input className='textBox' placeholder='Blog name:' ref={input => this._title = input}/>
              <input className='textBox' placeholder='Blog tags:' ref={input => this._tags = input}/>
              <textarea className='textBox' rows='10' cols='50' placeholder='Blog text:' ref={textarea => this._text = textarea}/>
              <input className='submitButton' type='submit' value='Submit Blog'/>
              <button className='submitButton' onClick={this.showHide.bind(this)}>Hide</button>
            </form>
        )
      }
      else return <button className='submitButton' onClick={this.showHide.bind(this)}>Write a post</button>
    }
    return(
      <div className='container'>
        {showOrHide()}
      </div>
    )
  }
}

export default NewBlogPost;
