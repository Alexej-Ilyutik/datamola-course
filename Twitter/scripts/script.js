import Tweet from './Tweet.js';
import Comment from './Comment.js';
import TweetFeed from './TweetFeed.js';
import tweets from './tweets.js';
import General from './General.js';
import HeaderView from './HeaderView.js';
import TweetFeedView from './TweetFeedView.js';

const user = new HeaderView();
const tweetFeed = new TweetFeedView();
const feed = new TweetFeed();

function setCurrentUser(newUser) {
  General._user = newUser;
  return user.display(newUser);
}

function getTweetFeed(tw) {
  tweetFeed.display(tw);
  feed.addAll(tw);
}

function addTweet(txt) {
  tweetFeed.addTw(txt, feed.tweets);
}

function editTweet(id, text){
}

setCurrentUser('alex');
getTweetFeed(tweets);
addTweet('Я не сдамся!');
editTweet(2, 'new text');

// tweetFeed.addTweet('text');

// tweetFeed.editTweet('20', 'новый текст');

// tweetFeed.removeTweet('19');

// console.log(tweetFeed.getFeed(2, 6, { text: '#' }));

// tweetFeed.showTweet('19');
