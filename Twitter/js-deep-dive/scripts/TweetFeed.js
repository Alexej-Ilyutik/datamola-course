import { tweets } from './tweets.js';

export default class TweetFeed {

  getPage(skip = 0, top = 10, filterConfig = null) {

    function sortTweets(skp, tp, twts) {
      return twts
        .slice()
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(skp, skp + tp);
    }

    if (filterConfig === null) {
      return sortTweets(skip, top, tweets);
    } else {
      let filteredTweets = tweets.slice();

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
  }

  // get(id, tweetsArr) {
  //   this._id = id;
  //   this.tweetsArr = tweetsArr;
  //   return tweetsArr.find((el) => el.id === id);
  // }

  // getRandomInt(object, array, min, max) {
  //   this.object = object;
  //   this.array = array;
  //   this.min = min;
  //   this.max = max;
  //   let num = Math.floor(Math.random() * (max - min + 1)) + min;
  //   num = String(num);
  //   if (array.includes(num)) {
  //     this.getRandomInt(object, array, min, max);
  //   } else {
  //     object.id = num;
  //   }
  //   return object;
  // }
}
