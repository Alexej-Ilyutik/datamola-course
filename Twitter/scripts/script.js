import Tweet from './Tweet.js';
import Comment from './Comment.js';
import TweetFeed from './TweetFeed.js';
import tweets from './tweets.js';
import General from './General.js';
import HeaderView from './HeaderView.js';
import TweetFeedView from './TweetFeedView.js';

function setCurrentUser(newUser){
const user = new HeaderView();
user.display(newUser);
}



setCurrentUser();

// user.display("tor")
console.log(user);

const tweetFeed = new TweetFeedView();
tweetFeed.display(tweets);
console.log(tweetFeed);

tweetFeed.addTweet('text');

tweetFeed.editTweet('20', 'новый текст');

tweetFeed.removeTweet('19');

console.log(tweetFeed.getFeed(2, 6, { text: '#' }));

tweetFeed.showTweet('19');
