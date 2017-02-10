import React, { Component } from 'react';

export default class CommentForm extends React.Component{
  constructor() {
    super();
    this.state= {visible: true}
    this.handleClick = this.handleClick.bind(this);
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
  this.setState({
    visible: !this.state.visible
  })}

  handleClick(){
    this.props.onInput(this.refs.commentInputText.value, this.refs.nameInpText.value);
  }

  render(){
    return(
      <div>

        {
          this.state.visible
            ?     <form>
                  <h1> Write your comment here </h1>
                  Name:
                  <input type="text" placeholder="Your Name" ref="nameInpText"/>
                  Comment:
                  <input type="text" placeholder="Your comment here" ref="commentInputText"/>
                  <button type="button" onClick={this.handleClick}> Add Comment </button>
                  <button type="button" onClick={this.onClick}> Hide form</button>
                </form>
          : null
        }
        <div onClick={this.onClick}></div>
        </div>

    );
  }
};
