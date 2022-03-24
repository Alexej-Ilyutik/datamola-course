class Node {
  constructor(value) {
    this.number = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  addNode(value, i) {
    if (this.length === 0) {
      this.head = new Node(value);
    } else {
      if (i < 0 || i > this.length) {
        return false;
      }
      let node = new Node(value);
      let cur;

      if (i === 0) {
        node.next = this.head;
        this.head = node;
      } else if (i > 0) {
        cur = this.head;
        let prev = null;
        let index = 0;
        while (index < i) {
          prev = cur;
          cur = cur.next;
          index++;
        }
        prev.next = node;
        node.next = cur;
      } else {
        cur = this.head;
        while (cur.next) {
          cur = cur.next;
        }
        cur.next = new Node(value);
      }
      this.length++;
      return true;
    }
  }
}
