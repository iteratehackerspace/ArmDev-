import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import NewTweet from './components/NewTweet.jsx';
import Tweets from './components/Tweets.jsx';

class App extends Component {
  constructor() {
    super();
    this.addTweets = this.addTweets.bind(this);
    this.state = {
      tweets: [
        {id: 0, author: 'Edo', body: 'Hello World'},
        {id: 1, author: 'Kalipso', body: 'I am cool'}
      ]
    }
  }
  addTweets(author, body) {
    const tweet = {id: this.state.length, author: author, body: body};
    this.setState({tweets: this.state.tweets.concat([tweet])});
  }
  render() {
    return (
      <div>
        <Header />
        <NewTweet addNewTweet={this.addTweets.bind(this)} />
        <Tweets allTweets={this.state.tweets} />
      </div>
    );
  }
}

export default App;
