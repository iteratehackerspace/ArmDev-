const posts = [
  {
    title: 'maiores alias consequatur aut perferendis doloribus asperiores repellat',
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
      username: 'lox',
      ShortDescription: 'I\'m the best react native developer',
      image: '../assets/trump.jpg',
    },
    comments: [
      {
        likes: 123123,
        time: '02/12/2016',
        text: 'a lot of text of comment',
        author: {
          fullName: 'John Brown',
          username: 'Booooomber',
          image: '../assets/trump.jpg',
        },
      }
    ],
  },
  {
    title: 'What are you?',
    likes: 123,
    tags: [
      'philosophy',
    ],
    seen: 6577,
    time: '07/12/2016',
    text: 'This division between the individual and society does not really exist at all. When one tries to carve out a life of one’s own, the individual is not different from the community in which he lives. For the individual, the human being, has constructed the community, society. I think we ought to be very clear from the beginning that this division is artificial, utterly unreal.In bringing about a radical change in the human being, in you, you are naturally bringing about a radical change in the structure and the nature of society. I think it must be very clearly understood, that the human mind, with all its complexity, its intricate work, is part of this external world.',
    author: {
      fullName: 'Hulia Mandina',
      username: 'FoxLife',
      ShortDescription: 'I\'m the best react native developer',
      image: '../assets/trump.jpg',
    },
    comments: [
      {
        likes: 3123,
        time: '09/12/2016',
        text: 'a lot of text of comment',
        author: {
          fullName: 'John Brown',
          username: 'hey',
          image: '../assets/trump.jpg',
        },
      },
      {
        likes: 3123,
        time: '12/12/2016',
        text: 'a YOU ARE SO SMAAAAAT yay! cool Like a lot of text of comment',
        author: {
          fullName: 'Somebody Cool',
          username: 'loool',
          image: '../assets/trump.jpg',
        },
      },
      {
        likes: 3123,
        time: '12/12/2016',
        text: 'a YOU ARE SO SMAAAAAT yay! cool Like a lot of text of comment',
        author: {
          fullName: 'Somebody Cool',
          username: 'loool',
          image: '../assets/trump.jpg',
        },
      }
    ],
  },
  {
    title: 'Somebody that I used to now',
    likes: 12332,
    tags: [
      'Angular',
    ],
    seen: 57,
    time: '23/12/2016',
    text: 'This is of course a fundamental aspect of K.’s teaching, yet we feel that even if we can agree intellectually that there is no separation we still remain convinced that we are separate. All the explanations K. gave failed to change this conviction of ours. Unless there is the “seeing of this reality we don’t change. And we will never see it until we are convinced to be separate. So it’s like a dog who is trying to catch its tail: it will never get it…',
    author: {
      fullName: 'Henry Ford',
      username: 'machine',
      ShortDescription: 'Burn horses, build machines',
      image: '../assets/trump.jpg',
    },
    comments: [],
  },
]
module.exports = {posts};
