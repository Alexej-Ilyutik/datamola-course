import General from './General.js';

export default class Comment extends General {
  static validate(tw) {
    return super._validateGeneral(tw);
  }
}
