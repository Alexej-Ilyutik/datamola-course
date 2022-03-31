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
        return this.id.insertAdjacentHTML('afterbegin',showTweet(t.text, t.createdAt, t.author));
      }
    });
  }
}

function showTweet(text, createdAt, author) {
  return `
  <div class="message__content second content">
            <div class="content__name second secondary-text">${author}</div>
            <div class="content__container">
              <div class="content__area second">
                <p class="content__text">
                  ${text}
                </p>               
                <div class="content__hesh secondary-text">#front-end</div>
              </div>
            </div>
            <div class="content__info second">
              <div class="info__retwitt">
                <img src="assets/svg/arrow.svg" alt="arrow" />
                <div class="secondary-text">167</div>
              </div>
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
