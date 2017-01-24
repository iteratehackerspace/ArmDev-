import React, { Component } from 'react';
import BlogPost from './BlogPost.jsx'
import NewBlogPost from './NewBlogPost.jsx';
import '../css/AllBlogPosts.css'
const randomID = require('uuid/v4');

class AllBlogPosts extends Component {
  constructor() {
    super();
    this.state = {
      allBlogPosts: [
        {
          id: randomID(),
          title: ' id quod m ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
          likes: 12332,
          tags: [
            'programming',
            'reactJS',
            'react native'
          ],
          seen: 657657,
          time: '02/12/2016',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
          author: {
            fullName: 'John Brown',
            ShortDescription: 'I\'m the best react native developer',
            bigDescription: 'react native 12312years of development and blablabla',
            followers: 321,
            idOfAuthor: 3212321,
            image: '../assets/trump.jpg',
          },
          comments: [
            {
              commentId: 1,
              likes: 123123,
              time: '02/12/2016',
              text: 'a lot of text of comment',
              author: {
                fullName: 'John Brown',
                ShortDescription: 'I\'m the best react native developer',
                bigDescription: 'react native 12312years of development and blablabla',
                followers: 321,
                idOfAuthor: 3212321,
                image: '../assets/trump.jpg',
              },
            }
          ],
        },
        {
          id: randomID(),
          title: ' id quod m ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
          likes: 12332,
          tags: [
            'programming',
            'reactJS',
            'react native'
          ],
          seen: 657657,
          time: '02/12/2016',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
          author: {
            fullName: 'John Brown',
            ShortDescription: 'I\'m the best react native developer',
            bigDescription: 'react native 12312years of development and blablabla',
            followers: 321,
            idOfAuthor: 3212321,
            image: '../assets/trump.jpg',
          },
          comments: [
            {
              commentId: 1,
              likes: 123123,
              time: '02/12/2016',
              text: 'a lot of text of comment',
              author: {
                fullName: 'John Brown',
                ShortDescription: 'I\'m the best react native developer',
                bigDescription: 'react native 12312years of development and blablabla',
                followers: 321,
                idOfAuthor: 3212321,
                image: '../assets/trump.jpg',
              },
            }
          ],
        }
      ],
    }
  }
  _handleNewBlogPost(_title, _tags, _text) {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const year = currentDate.getYear();
    const month = currentDate.getMonth();
    const time = currentDate.getTime();
    const newBlogPost = {
      id: randomID(),
      tags: _tags,
      title: _title,
      text: _text,
      time: day + ':' + month + ':' + year + '  ' + time,
    };
    this.setState({allBlogPosts: this.state.allBlogPosts.concat([newBlogPost])});
  }
  _handleBlogPostLike(idx) {
    let newBlogPosts = this.state.allBlogPosts;
    newBlogPosts[idx].likes++;
    this.setState({allBlogPosts: newBlogPosts});
  }
  _handleBlogPostSeen(idx) {
    let newBlogPosts = this.state.allBlogPosts;
    newBlogPosts[idx].seen++;
    this.setState({allBlogPosts: newBlogPosts});
  }
  render() {
    const renderPosts = this.state.allBlogPosts.map( (blogPost, idx) => {
      return <BlogPost key={idx} post={blogPost} handleBlogPostLike={this._handleBlogPostLike.bind(this, idx)} handleBlogPostSeen={this._handleBlogPostSeen.bind(this, idx)} counter={idx}/>
    })
    return(
      <div>
        <NewBlogPost handleNewBlogPost={this._handleNewBlogPost.bind(this)}/>
        {renderPosts}
      </div>
    )
  }
}

export default AllBlogPosts;
