import React, { Component } from 'react';
import AllComments from './AllComments';
import CommentList from './CommentList';

export default class CommentButton extends React.Component{
 constructor(){
    super();
    this.state = {inputsVisible: false, buttonText: "Write Comment"};
    this.onClick=this.onClick.bind(this)
}

onClick(){
    this.setState({inputsVisible: !this.state.inputsVisible, buttonText: !this.state.buttonText});
}
render() {
   let buttonText = "Delete all comments";
   if (this.state.buttonText) {buttonText = "Write Comment"}

   return(
     <div>
       {
         this.state.inputsVisible
           ? <AllComments/>
         : null
       }
       <div onClick={this.onClick}>
         <button> {buttonText} </button>
       </div>
     </div>
   );
 }
};
