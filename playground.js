const PriorityQueue = require('./ds/queues/priority-queue');

const priorityQueue = new PriorityQueue;

priorityQueue.enqueue("Add Login");
priorityQueue.enqueue("Add Signup");
priorityQueue.enqueue("Add Forgot Password");
priorityQueue.enqueue("Fix Sitemap", true);

priorityQueue.print();