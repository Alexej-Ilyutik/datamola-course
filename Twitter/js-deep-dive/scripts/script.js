import General from './General.js';
import Tweet from './Tweet.js';
import Comment from './Comment.js';
import TweetFeed from './TweetFeed.js';
import {tweets} from './tweets.js';

const tweet1 = new General('5', 'hello', '05.05.2022', "i'm");
const tweet2 = new Tweet('7', 'hi', '12.03.2022', 'Tor');
const comment1 = new Comment('15', 'hello world', '16.03.2022', 'Venom');
const tweetFeed = new TweetFeed();


tweets.push(tweet1, tweet2);

// tweet2.addComment('88', 'Thunder and lightning');
// tweet2.addComment('100', 'Thunder only');

// console.log(tweet2);
// console.log(tweet2.comments[0]);

// console.log('tw: '+Tweet.validate(tweet2));

// console.log('com: '+Comment.validate(comment1));
// const pageOfTweets = new TweetFeed(0, 5, {
//   text: 'я',
//   dateFrom: new Date('2022-03-09T16:00:01'),
//   hashtags: 'power',
// });
// console.log(pageOfTweets.getPage());

console.log(
  tweetFeed.getPage(0, 5)
);

console.log(tweets);

