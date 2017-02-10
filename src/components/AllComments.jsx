import React, {Component} from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

export default class AllComments extends Component {
    constructor() {
        super();
        this.state = {
            allText: []
        };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(commentText, nameText)
    {
        let newAllText = this.state.allText;
        newAllText.push({nameText: nameText, comment: commentText});
        this.setState({allText: newAllText})
    }
    render() {
        return (
            <div>
                <CommentForm onInput={this.handleUserInput}/>
                <CommentList allText={this.state.allText}/>
            </div>
        );
    }
};
