import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    menu: "",
    menus: ["짜장면", "짬뽕", "볶음밥", "탕수육", "울면"]
  };

  // 문법 까먹지 말기
  // 상태를 바꿔주는 함수를 만들어서 내려준뒤
  handleClick = menu => {
    // 여기서 메뉴는 item
    this.setState({
      menu: menu // menu : item
    });
  };

  render() {
    return (
      <React.Fragment>
        <MenuSelector
          menu={this.state.menu}
          menus={this.state.menus}
          handleClick={this.handleClick}
        />
      </React.Fragment>
    );
  }
}

class MenuSelector extends Component {
  render() {
    const { menu, menus, handleClick } = this.props;
    return (
      <React.Fragment>
        {menus.map((item, index) => (
          // 함수에 item을 인자로 해서 다시 콜백
          <button key={index} onClick={e => handleClick(item)}>
            {/* handleClick(item) 이런식으로 item을 인자로 넘길 수 있다는 것 기억하기 */}
            {item}
          </button>
        ))}
        {menu && <div>{menu}을 고르셨습니다.</div>}
      </React.Fragment>
    );
  }
}

export default App;
