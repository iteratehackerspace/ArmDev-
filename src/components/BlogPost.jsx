import React, {Component} from 'react';
import '../css/BlogPost.css';

export default class BlogPost extends Component {
    componentDidMount() {
        this.props.handleBlogPostSeen();
    }

    render() {
        const {post} = this.props;
        const {time, text, seen, likes} = post;

        const {image, fullName, ShortDescription} = post.author;
        const renderTags = post.tags.map(tag => tag + ' ');

        return (
            <div className="container">
                <span className='boldFont'>{post.title}</span>
                <p>{renderTags}</p>
                <div className='authorsContainer'>
                    <img src={image} role='presentation'/>
                    <span className='boldFont'>{fullName},
                    </span>
                    <span>{ShortDescription}:
                    </span>
                    <span>Written on {time}</span>
                </div>
                <p>{text}</p>
                <span className='likes'>Seen {seen}, liked {likes}
                    times</span>
                <button className='likeButton' onClick={this.props.handleBlogPostLike}>Like</button>
            </div>
        )
    }
}
