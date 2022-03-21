import General from './General.js';

export default class Tweet extends General {
  constructor(id, text, createdAt, author, comments) {
    super(id, text, createdAt, author);
    this.comments = comments;
    this.comments = [];
  }

  addComment(id, text) {
    this.idCom = id;
    this.textCom = text;
    const obj = {};
    obj.id = id;
    obj.text = text;
    obj.createdAt = new Date();
    obj.author = General._user;
    this.comments.push(obj);
    if (this.comments) {
      return true;
    }
    return false;
  }

  static validate(tw) {
    if (tw.comments && Array.isArray(tw.comments)) {
      return super._validateGeneral(tw);
    }
    return false;
  }
}
