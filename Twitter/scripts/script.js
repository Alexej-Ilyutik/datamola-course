import Tweet from './Tweet.js';
import Comment from './Comment.js';
import TweetFeed from './TweetFeed.js';
import tweets from './tweets.js';

const tweet1 = new Tweet('5', 'Привет', '05.05.2022', "I'm");
console.log(tweet1);
tweet1.author = '  AlExEj        ';
console.log(tweet1);
console.log('tw: ' + Tweet.validate(tweet1));

// const comment1 = new Comment('15', 'привет мир', '16.03.2022', 'Venom');
// console.log(comment1);
// console.log('com: ' + Comment.validate(comment1));

// tweets.push(comment1);
// console.log(tweets);

// const feed = new TweetFeed();
// console.log(feed);

// feed.addAll(tweets);
// console.log(feed);

// console.log(
//   feed.getPage(0, 6, {
//     text: 'Я',
//   })
// );

// console.log(feed.getPage(2, 5));

// console.log(feed.get('8'));

// console.log(feed.add('Yeeeees'));
// console.log(feed);

// console.log(feed.edit('1', 'new text'));
// console.log(feed);

// console.log(feed.remove('1'));
// console.log(feed);

// feed.addComment('2', 'hahaha');
// feed.addComment('2', 'hehehe');
// console.log(feed);

// feed.clear();
// console.log(feed);
