class General {
  constructor(id, text, createdAt, author) {
    this._id = id;
    this.text = text;
    this.createAt = new Date(createdAt);
    this.author = author;
  }
}

const tweet = new General('5', 'hello', '05.05.2022', "i'm");
console.log(tweet);
// const tweet2 = new General('8', 'hi', '12.02.2022', 'his');
// console.log(tweet2);

// class Tweet {
//   constructor(id, text, createdAt, author) {
//     this._id = id;
//     this.text = text;
//     this.createAt = new Date(createdAt);
//     this.author = author;
//   }

//   static maxTextLength = 280;

//   static validate(tweet) {
//     if (tweet) {
//       return true;
//     }
//     return false;
//   }

//   setText(newText) {
//     if (typeof newText === 'string' && newText.length < Tweet.maxTextLength) {
//       this.text = newText;
//     }
//   }

//   get id() {
//     return this._id;
//   }

//   set id(id) {
//     console.log('can not change', id);
//     return;
//     // console.log("set", id);
//     // this._id = id;
//   }
// }

// const tweet = new Tweet('5', 'hello', '05.05.2022', "i'm");
// console.log(tweet);

// console.log(Tweet.validate(tweet));
