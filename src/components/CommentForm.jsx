import React, { Component } from 'react';

export default class CommentForm extends React.Component{
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.onInput(this.refs.commentInputText.value, this.refs.nameInpText.value);
  }

  render(){
    return(
      <form>
        <h1> Write your comment here </h1>
        Name:
        <input type="text" placeholder="Your Name" ref="nameInpText"/>
        Comment:
        <input type="text" placeholder="Your comment here" ref="commentInputText"/>
        <button type="button" onClick={this.handleClick}> Add Comment </button>
      </form>
    );
  }
};
