class Node {
  constructor(number = null, nextNode = null) {
    this.value = number;
    this.next = nextNode;
  }
}

class List {
  constructor(rootNode) {
    this.length = rootNode ? 1 : 0;
    this.head = new Node(rootNode);
  }
  addNode(value, i) {
    if (this.length === 0) {
      this.head = new Node(value);
      console.log(this.head);
      this.length++;
    } else {
      if (i < 0 || i > this.length) {
        return false;
      }
      let node = new Node(value);

      if (i === 0) {
        node.next = this.head;
        this.head = node;
      } else if (i === undefined) {
        let cur = this.head;
        while (cur.next) {
          cur = cur.next;
        }
        cur.next = new Node(value);
      } else {
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
      }
      this.length++;
      return true;
    }
  }

  removeNode(i) {
    if (i < 0 || i >= this.length || this.length <= 1) {
      return false;
    }
    let cur = this.head;
    if (i === 0) {
      this.head = cur.next;
    } else if (i === undefined) {
      while (cur.next) {
        if (!cur.next.next) {
          cur.next = null;
        } else {
          cur = cur.next;
        }
      }
    } else {
      let prev = null;
      let index = 0;
      while (index < i) {
        prev = cur;
        cur = cur.next;
        index++;
      }
      prev.next = cur.next;
    }
    this.length--;
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

const list = new List(35);

list.addNode(4, 0);
list.addNode(5, 0);
list.addNode(9, 1);
list.addNode(12, 3);
list.addNode(7);
// console.log(list.addNode(88));
// console.log(list.removeNode(22));
list.removeNode(3);
// list.removeNode();
console.log(list);

list.print()
