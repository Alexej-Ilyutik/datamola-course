import { tweets } from './tweets.js';

export default class TweetFeed {
  getPage(skip = 0, top = 10, filterConfig = null) {
    // this.skip=skip;
    // this.top=top;
    // this.filterConfig=filterConfig;
    if (filterConfig === null) {
      return tweets;
    } else {
      // const arr = tweets.filter((el) =>
      //   Object.keys(filterConfig).every((key) =>
      //     el[key].toLowerCase().includes(filterConfig[key].toLowerCase())
      //   )
      // );

      // const newArr = arr.filter((el) =>
      //   Object.keys(filterConfig).every((key) => el[key] === filterConfig[key])
      // );
      // return arr.filter((el) =>
      //   Object.keys(filterConfig).every((key) => el[key] === filterConfig[key])
      // );

      return tweets.filter((el) =>
        Object.keys(filterConfig).every((key) => el[key] == filterConfig[key])
      );
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
