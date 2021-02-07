class Stack {
  constructor() {
    this.container = [];
  }

  push = (data) => {
    this.container.push(data);
    console.log("PUSH >>>", this.container);
  };

  pop = () => {
    this.container.pop();
    console.log("POP >>>", this.container);
  };
}
