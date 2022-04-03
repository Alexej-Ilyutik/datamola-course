export default class HeaderView {
  static user = 'Alexej Ilyutik';

  constructor() {
    this.id = document.getElementById('user');
  }

  display(params) {
    this.id.innerText = params || HeaderView.user;
  }
}
