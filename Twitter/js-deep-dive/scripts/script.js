import General from './General.js';
import Tweet from './Tweet.js';

const tweets = [];
const tweet1 = new General('5', 'hello', '05.05.2022', "i'm");
const tweet2 = new Tweet('7', 'h', '12.03.2022', 'To');
tweets.push(tweet1, tweet2);

tweet2.addComment('88', 'Thunder and lightning');
tweet2.addComment('100', 'Thunder only');

console.log(tweets);

console.log(Tweet.validate(tweet2));
