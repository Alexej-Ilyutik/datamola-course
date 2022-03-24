import General from './General.js';
import Tweet from './Tweet.js';
// import Comment from './Comment.js';
// import TweetFeed from './TweetFeed.js';
import tweets from './tweets.js';

const tweet1 = new General('5', 'Привет', '05.05.2022', "i'm");
const tweet2 = new Tweet('7', 'hi', '12.03.2022', 'Tor');
// const comment1 = new Comment('15', 'привет мир', '16.03.2022', 'Venom');

tweets.push(tweet1, tweet2);

// tweet2.addComment('88', 'Thunder and lightning');
// tweet2.addComment('100', 'Thunder only');

// console.log(tweet2);
// console.log(tweet2.comments[0]);

// console.log('tw: '+Tweet.validate(tweet2));

// console.log('com: '+Comment.validate(comment1));

// console.log(
//   TweetFeed._getPage(0, 10, {
//     author: 'Tor',
//     text: 'сын'
//   })
// );

// console.log(TweetFeed._getPage(0, 5));

// console.log(TweetFeed._get('5'));

//  console.log(TweetFeed._add('Yeeeees'));

// console.log(TweetFeed._edit('1', 'new text'));

// console.log(TweetFeed._remove('1'));

// console.log(TweetFeed._addComment('1',"hahaha"));

// console.log(TweetFeed._constructor(tweets));
// console.log(tweets);

// console.log(TweetFeed._addAll(tweets));

// const collection = TweetFeed._constructor(tweets);

// console.log(collection);

// console.log(TweetFeed._clear(collection));

// console.log(collection);
