const Queue = require('./queue');

class PriorityQueue {
  constructor() {
    this.lowPriorityQueue = new Queue;
    this.highPriorityQueue = new Queue;
  }

  /**
   * if the item is high priority,
   * add to high priority else add it 
   * to low priority
   */
  enqueue(item, isHighPriority = false) {
    isHighPriority
      ? this.highPriorityQueue.enqueue(item)
      : this.lowPriorityQueue.enqueue(item);

  }

  /**
   * low priority with processed first,
   * if high priorty is not empty, dequeue from high
   * prority first or dequeue from lowPr
   */
  dequeue() {
    if (!this.highPriorityQueue.isEmpty()) {
      return this.highPriorityQueue.dequeue();
    }

    return this.lowPriorityQueue.dequeue();
  }

  /**
   * if highPr is not empty, peek from highPr
   * else peek from lowPr
   */
  peek() {
    if (!this.highPriorityQueue.isEmpty) {
      return this.highPriorityQueue.peek();
    }

    return this.lowPriorityQueue.peek();
  }

  /**
   * if both HighPr and LowPr are empty,
   * return true else false
   */
  isEmpty() {
    return this.highPriorityQueue.isEmpty()
      && this.lowPriorityQueue.isEmpty();
  }
  
  /**
   * first print highPr, then lowPr
   */
  print() {
    this.highPriorityQueue.print();
    this.lowPriorityQueue.print();
  }

  /**
   * return the sum of length of lowPr and highPr
   */
  get length() {
    return this.highPriorityQueue.length 
      + this.lowPriorityQueue.length;
  }
}

module.exports = PriorityQueue;