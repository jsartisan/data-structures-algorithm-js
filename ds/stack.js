class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }

  top() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    this.items.forEach(item => console.log(item));
  }

  get length() {
    return this.items.length;
  }
 }

module.exports = Stack;