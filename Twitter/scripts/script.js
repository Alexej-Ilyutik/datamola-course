import Tweet from './Tweet.js';
// import Comment from './Comment.js';
// import TweetFeed from './TweetFeed.js';
import tweets from './tweets.js';
// import General from './General.js';

class HeaderView {
  static user = 'Alexej Ilyutik';
  constructor() {
    this.id = document.getElementById('user');
  }
  display(params) {
    this.id.innerText = params || HeaderView.user;
  }
}

class TweetFeedView {
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
        return this.id.insertAdjacentHTML(
          'afterbegin',
          showTweet(t.id, t.text, t.createdAt, t.author)
        );
      }
    });
  }

  addTweet(text) {
    const idTw = String(Math.floor(Math.random() * (1000 - 25 + 1)) + 25);
    const newTweet = new Tweet(idTw, text, new Date(), HeaderView.user, []);
    if (Tweet.validate(newTweet)) {
      this.tweets.push(newTweet);
      return this.id.insertAdjacentHTML(
        'afterbegin',
        showTweet(
          newTweet.id,
          newTweet.text,
          newTweet.createdAt,
          newTweet.author
        )
      );
    }
  }

  get(id) {
    return this.tweets.find((el) => el.id === id);
  }

  editTweet(id, text) {
    const obj = this.get(id);
    const txt = document.getElementById(`${id}`);
    if (Tweet.validate(obj)) {
      obj.text = text;
      txt.innerText = text;
    }
  }

  removeTweet(id) {
    const obj = this.get(id);
    const tw = document.getElementById(`remove-${id}`);
    this.tweets.splice(obj, 1);
    this.id.removeChild(tw);
  }

  getFeed(skip = 0, top = 10, filterConfig = null) {
    function sortTweets(skp, tp, twts) {
      return twts
        .slice()
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(skp, skp + tp);
    }

    this.id.innerHTML = '';
    if (filterConfig == null) {
      const arr = sortTweets(skip, top, this.tweets);
      arr.forEach((val) => {
        return this.id.insertAdjacentHTML(
          'afterbegin',
          showTweet(val.id, val.text, val.createdAt, val.author)
        );
      });
      return arr;
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

    const newArr = sortTweets(skip, top, filteredTweets);
    newArr.forEach((val) => {
      return this.id.insertAdjacentHTML(
        'afterbegin',
        showTweet(val.id, val.text, val.createdAt, val.author)
      );
    });
    return newArr;
  }

  showTweet(id){
    this.id.innerHTML = '';
    const obj = this.get(id);
    return this.id.insertAdjacentHTML(
        'afterbegin', showTweet(obj.id, obj.text, obj.createdAt, obj.author));
  }
}

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

const user = new HeaderView();
user.display();
// user.display("tor")
console.log(user);

const tweetFeed = new TweetFeedView();
tweetFeed.display(tweets);
console.log(tweetFeed);

tweetFeed.addTweet('text');

tweetFeed.editTweet('20', 'новый текст');

tweetFeed.removeTweet('19');

// console.log(tweetFeed.getFeed(2, 6, { text: '#' }));

// tweetFeed.showTweet('19');