import React, { Component } from 'react';
import './Components.css';

class NewTweet extends Component {
  constructor() {
    super();
    this.state = {
      author: '',
      body: '',
    }
  }
  addTheTweet(e) {
    e.preventDefault();
    this.setState({author: '', body: ''});
    const author = this.state.author;
    const body = this.state.body;
    this.props.addNewTweet(author, body);
  }
  changeName(e) {
    this.setState({author: e.target.value});
  }
  changeBody(e) {
    this.setState({body: e.target.value});
  }
  render() {
    return (
      <form onSubmit={this.addTheTweet.bind(this)}>
        <input placeholder='Name: ' onChange={this.changeName.bind(this)} value={this.state.author}/>
        <input placeholder='Tweet: ' onChange={this.changeBody.bind(this)} value={this.state.body}/>
        <input type='submit' value='Submit Blog'/>
      </form>
    )
  }
}

export default NewTweet;
