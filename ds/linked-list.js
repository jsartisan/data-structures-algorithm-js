const createNode = (value) => ({
  value: value,
  next: null
});

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = createNode(value);
    
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.length++;

      return node;
    }

    this.tail.next = node;
    this.tail = node;
    this.length++;

    return node;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const node = this.tail;
    
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;

      return node;
    }

    let current = this.head;
    let penultimate;

    while (current) {
      if (current.next === this.tail) {
        penultimate = current;
        break;
      }

      current = current.next;
    }

    penultimate.next = null;
    this.tail = penultimate;
    this.length--;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) {
      return null
    }

    if (index === 0) {
      return this.head;
    }

    let current = this.head;
    let i = 0;

    while (i < index) {
      i++;
      current = current.next;
    }

    return current;
  }

  delete(index) {
    if (index < 0 || index > this.length - 1) {
      return node;
    }

    if (index === 0) {
      const deleted = this.head;
      this.head = deleted.next;
      this.length--;

      return deleted;
    }

    let current = this.head;
    let previous = current;
    let i = 0;
    while (i < index) {
      i++;
      previous = current;
      current = current.next;
    }
    
    const deleted = current;
    previous.next = deleted.next;
    this.length--;

    return current;
  }

  print() {
    const values = [];
    let current = this.head;

    while(current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(' => '));
  }

  isEmpty() {
    return this.length === 0;
  }
}

module.exports = LinkedList;