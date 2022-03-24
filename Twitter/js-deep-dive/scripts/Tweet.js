import General from './General.js';

export default class Tweet extends General {
  constructor(id, text, createdAt, author, comments) {
    super(id, text, createdAt, author);
    this.comments = comments;
    this.comments = [];
  }

  static validate(tw) {
    if (tw.comments && Array.isArray(tw.comments)) {
      return super._validateGeneral(tw);
    }
    return false;
  }
}
