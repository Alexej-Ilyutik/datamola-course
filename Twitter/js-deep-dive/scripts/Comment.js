import General from './General.js';

export default class Comment extends General {
  static validate(tw) {
    return super.validateGeneral(tw);
  }
}
