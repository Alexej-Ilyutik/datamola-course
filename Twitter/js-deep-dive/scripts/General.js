export default class General {
  constructor(id, text, createdAt, author) {
    this._id = id;
    this.text = text;
    this.createAt = new Date(createdAt);
    this.author = author;
  }
}
