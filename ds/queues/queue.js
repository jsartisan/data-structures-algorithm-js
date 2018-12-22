class Queue {

  constructor() {
    this.items = [];
  }

  /**
   * adds a item to the end of queue
   */
  enqueue(item) {
    this.items.push(item);
  }

  /**
   * removes the first item
   */
  dequeue() {
    this.items.shift();
  }

  /**
   * return the first item
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.length - 1];
  }

  /**
   * checks if queue is empty or not
   */
  isEmpty() {
    return this.length === 0;
  }
  
  /**
   * prints the items in array
   */
  print() {
    this.items.forEach(item => console.log(item));
  }

  /**
   * return the current items count
   */
  get length() {
    return this.items.length;
  }
  
}

module.exports = Queue;