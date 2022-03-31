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
}

function showTweet(id, text, createdAt, author) {
  return `
  <div class="message__content second content">
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
