import React, { Component } from 'react';

export default class CommentList extends Component{
  render() {
    var allText = this.props.allText;
    var renderingComments = allText.map((line, index)=> {
        return (
           <div>
             <b>{line.nameText} </b>
              commented :
              <b>{line.comment}</b>
          </div>
        )
      });
     return (
      <div>
          {allText.length > 0 &&
            <h6>
              Number of Comments: {allText.length}
            </h6>
          }
      <h5>  {renderingComments} </h5>
    </div>
    );
  }
};
