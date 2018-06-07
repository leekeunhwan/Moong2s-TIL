// 불러와서 모듈처럼 사용할 수 있는 것 (import)
import React, { Component } from "react";
import "./App.css";

let count = 0;

class App extends Component {
  state = {
    todos: [
      {
        id: count++,
        body: "React 공부",
        complete: true
      },
      {
        id: count++,
        body: "Redux 공부",
        complete: false
      }
    ],
    newTodoBody: ""
  };

  // 이벤트 리스너 앞에 handle을 붙이는 것이 관례!
  handleInputChange = e => {
    this.setState({ newTodoBody: e.target.value });
  };

  handleButtonClick = e => {
    if (this.state.newTodoBody) {
      const newTodo = {
        body: this.state.newTodoBody,
        complete: false,
        id: count++
      };

      this.setState({
        todos: [...this.state.todos, newTodo],
        newTodoBody: ""
      });
    }
  };

  handleTodoItemComplete = id => {
    this.setState({
      todos: this.state.todos.map(t => {
        const newTodo = {
          ...t
        };
        if (t.id === id) {
          newTodo.complete = true;
        }
        return newTodo;
      })
    });
  };

  handleTodoItemDelete = id => {
    this.setState({
      todos: this.state.todos.filter(t => id !== t.id)
    });
  };

  render() {
    const { todos, newTodoBody } = this.state;
    return (
      <div>
        <h1>할 일 목록</h1>
        <label>
          새 할일
          <input
            type="text"
            value={newTodoBody}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>추가</button>
        </label>
        <ul>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              {...todo}
              onComplete={this.handleTodoItemComplete}
              onDelete={this.handleTodoItemDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

class TodoItem extends Component {
  render() {
    const { id, body, complete, onComplete, onDelete } = this.props;
    return (
      <li className={complete ? "complete" : ""} key={id}>
        {body}
        <button
          onClick={e => {
            onComplete(id);
          }}
        >
          완료
        </button>
        <button
          onClick={e => {
            // this.setState({
            //   // 삭제 기능은 이렇게 구현할 수 있다.
            //   // 같은 아이디 (클릭한 대상)은 제외한 것만 반환하는 식으로
            //   todos: todos.filter(t => id !== t.id)
            // });
            onDelete(id);
          }}
        >
          삭제
        </button>
      </li>
    );
  }
}

// 다른 곳에서 불러와서 쓸수 있도록 해주는 것이다. (export)
export default App;
