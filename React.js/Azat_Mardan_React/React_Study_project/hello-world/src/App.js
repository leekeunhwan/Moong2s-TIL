// 불러와서 모듈처럼 사용할 수 있는 것 (import)
import React, { Component } from 'react';

const todos = [
  {
    id: 1,
    body: 'React 공부',
    complete: true
  },
  {
    id: 2,
    body: 'Redux 공부',
    complete: false
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <h1>todo List</h1>
        <ul>
          {todos.map(todo => (<li className={todo.complete ? 'complete' : ''} key={todo.id}>{todo.body}</li>))}
        </ul>
      </div>
    );
  }
}

// 다른 곳에서 불러와서 쓸수 있도록 해주는 것이다. (export)
export default App;
