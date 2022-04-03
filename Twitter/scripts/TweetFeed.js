import General from './General.js';
import Tweet from './Tweet.js';
import Comment from './Comment.js';

export default class TweetFeed {
  _tweets = [];

  set tweets(tw) {
    this._tweets = tw;
  }

  get tweets() {
    return this._tweets;
  }

  getPage(skip = 0, top = 10, filterConfig = null) {
    function sortTweets(skp, tp, twts) {
      return twts
        .slice()
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(skp, skp + tp);
    }

    if (filterConfig == null) {
      return sortTweets(skip, top, this.tweets);
    }
    let filteredTweets = this.tweets.slice();

    Object.keys(filterConfig).forEach((key) => {
      if (key === 'author') {
        filteredTweets = filteredTweets.filter((tweet) =>
          tweet.author.toLowerCase().includes(filterConfig[key].toLowerCase())
        );
      }
      if (key === 'text') {
        filteredTweets = filteredTweets.filter((tweet) =>
          tweet.text.toLowerCase().includes(filterConfig[key].toLowerCase())
        );
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
        filteredTweets = filteredTweets.filter((tweet) =>
          tweet.text.toLowerCase().includes(filterConfig[key].toLowerCase())
        );
      }
    });

    return sortTweets(skip, top, filteredTweets);
  }

  get(id) {
    return this.tweets.find((el) => el.id === id);
  }

  add(text) {
    const newTweet = new Tweet(this.id, text);
    if (Tweet.validate(newTweet)) {
      this.tweets.push(newTweet);
      return true;
    }
    return false;
  }

  edit(id, text) {
    const obj = this.get(id);
    if (obj.author !== General._user) {
      return false;
    }
    if (Tweet.validate(obj)) {
      obj.text = text;
      return true;
    }
    return false;
  }

  remove(id) {
    const obj = this.get(id);
    if (obj.author === General._user) {
      this.tweets.splice(obj, 1);
      return true;
    }
    return false;
  }

  addComment(id, text) {
    const obj = this.get(id);
    const newComment = new Comment(this.id, text);
    if (Comment.validate(newComment)) {
      obj.comments.push(newComment);
      return true;
    }
    return false;
  }

  constructor(tws) {
    this.tweets = tws || [];
  }

  addAll(tws) {
    const mapNotValidate = [];
    tws.forEach((val) => {
      if (Tweet.validate(val)) {
        const t = new Tweet(
          val.id,
          val.text,
          val.createdAt,
          val.author,
          val.comments
        );
        this.tweets.push(t);
      } else {
        mapNotValidate.push(val);
      }
    });
    return mapNotValidate;
  }

  clear() {
    this.tweets = [];
  }
}
