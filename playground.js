const Stack = require('./ds/stacks/stack');

const stack = new Stack;

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.push(5);

stack.print();