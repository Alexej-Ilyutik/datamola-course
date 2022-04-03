import Tweet from './Tweet.js';
import General from './General.js';

function showTweet(id, text, createdAt, author) {
  return `
  <div id="remove-${id}" class="message__content second content">
            <div class="content__name second secondary-text">${author}</div>
            <div class="content__container">
              <div class="content__area second">
                <p id = "${id}" class="content__text">
                  ${text}
                </p>
              </div>
            </div>
            <div class="content__info second">
              <div class="secondary-text">${createdAt}</div>
            </div>
          </div>
  `;
}

export default class TweetFeedView {
  constructor(tws) {
    this.id = document.getElementById('tweetfeed');
    this.tweets = tws || [];
  }

  display(tws) {
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
        this.id.insertAdjacentHTML(
          'afterbegin',
          showTweet(t.id, t.text, t.createdAt, t.author)
        );
      }
      return this.id;
    });
  }

  addTw(text,feed) {
    const newTweet = new Tweet(General.id, text);
    if (Tweet.validate(newTweet)) {
      feed.push(newTweet);
    } 
    return this.id.insertAdjacentHTML(
      'afterbegin',
      showTweet(newTweet.id, newTweet.text, newTweet.createdAt, newTweet.author)
    );
  }

  // get(id) {
  //   return this.tweets.find((el) => el.id === id);
  // }

  // editTweet(id, text) {
  //   const obj = this.get(id);
  //   const txt = document.getElementById(`${id}`);
  //   if (Tweet.validate(obj)) {
  //     obj.text = text;
  //     txt.innerText = text;
  //   }
  // }

  // removeTweet(id) {
  //   const obj = this.get(id);
  //   const tw = document.getElementById(`remove-${id}`);
  //   this.tweets.splice(obj, 1);
  //   this.id.removeChild(tw);
  // }

  // getFeed(skip = 0, top = 10, filterConfig = null) {
  //   function sortTweets(skp, tp, twts) {
  //     return twts
  //       .slice()
  //       .sort((a, b) => b.createdAt - a.createdAt)
  //       .slice(skp, skp + tp);
  //   }

  //   this.id.innerHTML = '';
  //   if (filterConfig == null) {
  //     const arr = sortTweets(skip, top, this.tweets);
  //     arr.forEach((val) => {
  //       return this.id.insertAdjacentHTML(
  //         'afterbegin',
  //         showTweet(val.id, val.text, val.createdAt, val.author)
  //       );
  //     });
  //     return arr;
  //   }
  //   let filteredTweets = this.tweets.slice();

  //   Object.keys(filterConfig).forEach((key) => {
  //     if (key === 'author') {
  //       filteredTweets = filteredTweets.filter((tweet) =>
  //         tweet.author.toLowerCase().includes(filterConfig[key].toLowerCase())
  //       );
  //     }
  //     if (key === 'text') {
  //       filteredTweets = filteredTweets.filter((tweet) =>
  //         tweet.text.toLowerCase().includes(filterConfig[key].toLowerCase())
  //       );
  //     }
  //     if (key === 'dateFrom') {
  //       filteredTweets = filteredTweets.filter(
  //         (tweet) => tweet.createdAt >= filterConfig[key]
  //       );
  //     }
  //     if (key === 'dateTo') {
  //       filteredTweets = filteredTweets.filter(
  //         (tweet) => tweet.createdAt >= filterConfig[key]
  //       );
  //     }
  //     if (key === 'hashtags') {
  //       filteredTweets = filteredTweets.filter((tweet) =>
  //         tweet.text.toLowerCase().includes(filterConfig[key].toLowerCase())
  //       );
  //     }
  //   });

  //   const newArr = sortTweets(skip, top, filteredTweets);
  //   newArr.forEach((val) => {
  //     return this.id.insertAdjacentHTML(
  //       'afterbegin',
  //       showTweet(val.id, val.text, val.createdAt, val.author)
  //     );
  //   });
  //   return newArr;
  // }

  showTweet(id) {
    this.id.innerHTML = '';
    const obj = this.get(id);
    return this.id.insertAdjacentHTML(
      'afterbegin',
      showTweet(obj.id, obj.text, obj.createdAt, obj.author)
    );
  }
}
