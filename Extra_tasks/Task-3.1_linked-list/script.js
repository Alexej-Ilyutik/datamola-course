class Node {
  constructor(value) {
    this.value = value;
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

      if (i === 0) {
        node.next = this.head;
        this.head = node;
      } else if (i > 0) {
        let cur = this.head;
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
        let cur = this.head;
        while (cur.next) {
          cur = cur.next;
        }
        cur.next = new Node(value);
      }
      this.length++;
      return true;
    }
  }

  removeNode(i) {
    if (i < 0 || i >= this.length || this.length === 1) {
      return false;
    }
    let cur = this.head;
    if (i === 0) {
      this.head = cur.next;
    } else if (i > 0) {
      let prev = null;
      let index = 0;
      while (index < i) {
        prev = cur;
        cur = cur.next;
        index++;
      }
      prev.next = cur.next;
    } else {
      cur = this.head;
      while (cur.next !== this.length) {
        cur = cur.next;
      }
      cur.setNext(null);
      this.length = cur;
    }
    return true;
  }

  print() {
    let cur = this.head;
    while (cur) {
      console.log(cur.value);
      cur = cur.next;
    }
  }
}

let x = { y: 5 };
let x1 = { y1: 6 };

const list = new List();

function addEl() {
  list.addNode(x);
  list.print();
}

// addEl();
