import React, { Component } from 'react';
import './Components.css';

class Tweets extends Component {
  render() {
    const renderTweets = this.props.allTweets.map(tweet => {
      return (
        <div>
          <p id='author'>{tweet.author}</p>
          <p id='tweetBody'>{tweet.body}</p>
        </div>
      )
    })
    return(
      <div>
        {renderTweets}
      </div>
    )
  }
}

export default Tweets;
