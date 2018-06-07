import React, { Component } from "react";

class App extends Component {
  render() {
    return <h1 {...this.props}>Hello {this.props.frameworkName} world!!!</h1>;
  }
}

export default App;
