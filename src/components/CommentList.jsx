import React, {Component} from 'react';
import '../css/comments.css'

export default class CommentList extends Component {
    render() {
        var allText = this.props.allText;
        var renderingComments = allText.map((line, index) => {
            if (line.nameText.length > 0 && line.comment.length > 0) {
                return (
                    <div>
                        <b className="capitalize">
                            {line.nameText + ' '}
                        </b>
                        <i>
                            commented :
                        </i>
                        <b className="capitalize">
                            {' ' + line.comment}
                        </b>
                    </div>
                )
            } else if (line.comment.length === 0 && line.nameText.length === 0) {
                alert('Fields are empty...')
            } else if (line.comment.length === 0) {
                alert('Field should not be empty')
            } else if (line.nameText.length === 0) {
                alert('Please write your name...')
            }

        });
        return (
            <div>
                {allText.length > 0 && <h6>
                    Number of Comments: {allText.length}
                </h6>
}
                <h5>
                    {renderingComments}
                </h5>
            </div>
        );
    }
};
