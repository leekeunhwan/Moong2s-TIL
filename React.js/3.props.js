/**
 * props
 *
 * 컴포넌트 내부의 Immutable Data - 변하지 않는 데이터를 처리할 때 사용됩니다.
 * JSX 내부에 {this.props.propsName}
 * 컴포넌트를 사용할 때, <> 괄호 안에 propsName="value"
 * this.props.children은 기본적으로 갖고 있는 props로서, <Cpnt>여기에 있는 값이 들어갑니다.</Cpnt>
 */

class moong2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <moong2 name={this.props}>{this.props.children}</moong2>;
  }
}

ReactDOM.render(
  <App name="velopert">i am your child</App>,
  document.getElementById("root")
);

// props 기본값 설정 -> Component.defaultProps={...}

class App extends React.Component {
  render() {
    return <div>{this.props.value}</div>;
  }
}

App.defaultProps = {
  value: 0
};

// Type 검증 -> Component.propTypes={...}

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.value}
        {this.props.secondValue}
        {this.props.thirdValue}
      </div>
    );
  }
}

App.propTypes = {
  value: React.PropTypes.string,
  secondValue: React.PropTypes.number,
  thirdValue: React.PropTypes.any.isRequired
};
