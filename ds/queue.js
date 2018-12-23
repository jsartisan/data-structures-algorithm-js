class Queue {

  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    this.items.shift();
  }

  peek() {
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

module.exports = Queue;