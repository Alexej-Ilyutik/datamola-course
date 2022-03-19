import General from './General.js';

export default class Tweet extends General {
  constructor(id, text, createdAt, author, comments) {
    super(id, text, createdAt, author);
    this.comments = comments;
  }
}
