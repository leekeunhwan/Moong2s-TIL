class Queue {
  constructor() {
    this.container = [];
  }

  enqueue = (data) => {
    this.container.push(data);
  };
  dequeue = () => {
    this.container.shift();
  };
}
