// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

//Class based queue
class Queue {
  constructor() {
    this.data = []
  }

  add(record) {
    this.data.unshift(record)
  }

  remove() {
    return this.data.pop()
  }
}

//Functional programming
// const queue = []
// const enqueue = (item) => queue.unshift(item)
// const dequeue = () => queue.pop()

// console.log(queue)
// enqueue('heyo')
// enqueue('heyo2')
// enqueue('heyo3')
// enqueue('heyo4')
// console.log(queue)
// dequeue()
// console.log(queue)

module.exports = Queue
