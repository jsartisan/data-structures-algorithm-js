const Queue = require('./queue');

class PriorityQueue {
  constructor() {
    this.lowPriorityQueue = new Queue;
    this.highPriorityQueue = new Queue;
  }

  enqueue(item, isHighPriority = false) {
    isHighPriority
      ? this.highPriorityQueue.enqueue(item)
      : this.lowPriorityQueue.enqueue(item);

  }

  dequeue() {
    if (!this.highPriorityQueue.isEmpty()) {
      return this.highPriorityQueue.dequeue();
    }

    return this.lowPriorityQueue.dequeue();
  }

  peek() {
    if (!this.highPriorityQueue.isEmpty) {
      return this.highPriorityQueue.peek();
    }

    return this.lowPriorityQueue.peek();
  }

  isEmpty() {
    return this.highPriorityQueue.isEmpty()
      && this.lowPriorityQueue.isEmpty();
  }
 
  print() {
    this.highPriorityQueue.print();
    this.lowPriorityQueue.print();
  }

  get length() {
    return this.highPriorityQueue.length 
      + this.lowPriorityQueue.length;
  }
}

module.exports = PriorityQueue;