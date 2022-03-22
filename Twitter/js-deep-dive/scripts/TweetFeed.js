import { tweets } from './tweets.js';
import General from './General.js';
import Tweet from './Tweet.js';

export default class TweetFeed {
  static _getPage(skip = 0, top = 10, filterConfig = null) {
    function sortTweets(skp, tp, twts) {
      return twts
        .slice()
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(skp, skp + tp);
    }

    if (filterConfig === null) {
      return sortTweets(skip, top, tweets);
    }
    let filteredTweets = tweets.slice();

    Object.keys(filterConfig).forEach((key) => {
      if (key === 'author') {
        filteredTweets = filteredTweets.filter((tweet) => {
          tweet.author.toLowerCase().includes(filterConfig[key].toLowerCase());
          // return filteredTweets;
        });
      }
      if (key === 'text') {
        filteredTweets = filteredTweets.filter((tweet) => {
          tweet.text.toLowerCase().includes(filterConfig[key].toLowerCase());
          // return filteredTweets;
        });
      }
      if (key === 'dateFrom') {
        filteredTweets = filteredTweets.filter(
          (tweet) => tweet.createdAt >= filterConfig[key]
        );
      }
      if (key === 'dateTo') {
        filteredTweets = filteredTweets.filter(
          (tweet) => tweet.createdAt >= filterConfig[key]
        );
      }
      if (key === 'hashtags') {
        filteredTweets = filteredTweets.filter((tweet) => {
          tweet.text.toLowerCase().includes(filterConfig[key].toLowerCase());
        });
      }
    });

    return sortTweets(skip, top, filteredTweets);
  }

  static _get(id) {
    return tweets.find((el) => el.id === id);
  }

  static _add(text) {
    const obj = {};
    obj.id = String(Math.floor(Math.random() * (1000 - 25 + 1)) + 25);
    obj.text = text;
    obj.createdAt = new Date();
    obj.author = General._user;
    obj.comments = [];
    if (Tweet.validate(obj)) {
      tweets.push(obj);
      return true;
    }
    return false;
  }

  _edit(id, text) {}

  var;
}
