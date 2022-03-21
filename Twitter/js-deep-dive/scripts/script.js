import General from './General.js';
import Tweet from './Tweet.js';
import Comment from './Comment.js';
import {tweets} from './tweets.js';

const tweet1 = new General('5', 'hello', '05.05.2022', "i'm");
const tweet2 = new Tweet('7', 'hi', '12.03.2022', 'Tor');
const comment1 = new Comment('15', 'hello world', '16.03.2022', 'Venom');
tweets.push(tweet1, tweet2);

tweet2.addComment('88', 'Thunder and lightning');
tweet2.addComment('100', 'Thunder only');

console.log(tweets);
console.log(tweet2.comments[0]);

// console.log(Tweet.validate(tweet2));

// console.log(Comment.validate(comment1));
