export default class General {
  static maxTextLength = 280;

  static _user = 'Tony Stark';

  constructor(id, text, createdAt, author) {
    const newId = String(Math.floor(Math.random() * (10000 - 100 + 1)) + 100);
    this._id = id||newId;
    this.text = text;
    this._createdAt = createdAt ? new Date(createdAt) : new Date();
    this._author = author || General._user;
  }

  set id(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  set createdAt(createdAt) {
    this._createdAt = createdAt;
  }

  get createdAt() {
    return this._createdAt;
  }

  set author(author) {
    this._author = author.trim().toLowerCase();
  }

  get author() {
    return this._author;
  }

  static _validateGeneral(twGneral) {
    if (
      twGneral.id &&
      twGneral.id.length > 0 &&
      typeof twGneral.id === 'string' &&
      twGneral.text &&
      twGneral.text.length > 0 &&
      twGneral.text.length <= this.maxTextLength &&
      typeof twGneral.text === 'string' &&
      twGneral.createdAt &&
      twGneral.createdAt instanceof Date &&
      twGneral.author &&
      twGneral.author.length >= 2 &&
      typeof twGneral.author === 'string'
    ) {
      return true;
    }
    return false;
  }
}
