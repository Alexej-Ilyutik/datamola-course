export default class General {
  constructor(id, text, createdAt, author) {
    this._id = id;
    this.text = text;
    this._createdAt = new Date(createdAt);
    this._author = author;
  }

  set id(id) {
    this._id = id;
    throw new Error(`id = ${id} cannot be changed`);
  }

  get id() {
    return this._id;
  }

  set createdAt(createdAt) {
    this._createdAt = createdAt;
    throw new Error(`createdAt = ${createdAt} cannot be changed`);
  }

  get createdAt() {
    return this._createdAt;
  }

  set author(author) {
    this._author = author;
    throw new Error(`author = ${author} cannot be changed`);
  }

  get author() {
    return this._author;
  }
}
