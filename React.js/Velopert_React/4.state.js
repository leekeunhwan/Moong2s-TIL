/**
 * state
 *
 * 유동적인 데이터 - Component에서 유동적인 데이터를 보여줄 때 사용됩니다.
 * JSX 내부에 {this.state.stateName}
 * state - 초기값 설정 필수, 생성자(constructor)에서 this.state={}으로 설정합니다. (초기값 설정을 하지 않을 경우 나중에 렌더링 시 {this.state.stateName}에서 에러가 발생합니다.)
 * 값을 수정할 때에는 this.setState({...}), 렌더링 된 다음엔 this.state= 절대 사용하지 않도록 합니다.
 */

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 }; // 초기값을 0으로 설정해줍니다.
    this.handleClick = this.handleClick.bind(this); //constructor에 클릭이벤트를 바인딩해줍니다.
  }

  handleClick() {
    this.setState({ value: this.state.value + 1 }); // 클릭을 할때마다 state에 +1이 되도록 값을 설정하고 값을 변경해줍니다.
  }

  render() {
    // 버튼을 누를때마다 this.handleClick이 실행되고 setState를 통해 state값이 바뀌면 Value: 숫자값이 변합니다.
    return (
      <div>
        <h4>Value: {this.state.value}</h4>
        <button onClick={this.handleClick}>TICK</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <Counter />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
