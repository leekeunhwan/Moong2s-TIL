# React 16 알아보기

## 여러개의 JSX Elements Return 하는 방법의 변화

기존에는 JSX Elements 를 Render 함에 있어서<br/>
한개의 JSX Elements 만 가능해서 div, span 태그로 감싸서<br/>
렌더링을 하곤 하였습니다.<br/>

```js
// 이렇게 말이죠

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>hello world</h1>
      </div>
    );
  }
}
```

하지만 React 16 에서는 React.Fragment 를 지원합니다.<br/>
span 이나 div 로 감싸게 되는 경우에는 CSS 를 할 때<br/>
꼬이거나 뭔가 문제가 생길 가능성이 있는데<br/>
React.Fragment 태그를 사용하게 되면 기존 span 과 div 로<br/>
감쌀때처럼 잘 출력이 되면서도 문제가 생길 가능성이 많이 줄어들어<br/>
좋은 기능이라고 할 수 있습니다.<br/>

```js
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header />
        <div />
        <footer />
      </React.Fragment>
    );
  }
}
```

<br/>
<br/>

## String 이 리턴이 된다.

기존의 React 에서는 오직 return 할 수 있는 것이 Component 아니면 Null 이였습니다.
하지만 React 16 부터는 아래처럼 string 을 return 할 수 있습니다.

```js
class StringReturn extends Component {
  render() {
    return "hello";
  }
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <StringReturn />
      </React.Fragment>
    );
  }
}

// hello
```

<br/>
<br/>

## portals

```html
<div id="root"></div>
```

```js
ReactDOM.render(<App />, document.getElementById("root"));
```

portals 는 React root 밖에서 렌더를 할 때 사용할 수 있는 기능입니다.

```html
<header>
    <h1>What is Portals?</h1>
    <span id="here"></span>
</header>

<div id="root"></div>
```

```js
import { createPortal } from "react-dom";

class Portals extends Component {
  render() {
    return createPortal(<Message />, documents.getElementById("here"));
  }
}

const Message = () => "This is Portals";
```

portals 는 html 을 변경하지 못할 때 유용하게 사용될 수 있습니다.

<br/>
<br/>

## Error Boundaries

```js
class ErrorMaker extends Component {
  state = {
    friends: ["jisu", "flynn", "daal", "kneeprayer"]
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  };
  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend} `);
  }
}

const ErrorFallback = () => " Sorry something went wrong";

class App extends Component {
  state = {
    hasError: false
  };
  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true
    });
  };
  render() {
    return (
      <React.Fragment>
        {hasError ? <ErrorFallback /> : <ErrorMaker />}
      </React.Fragment>
    );
  }
}
```

기존에는 에러가 발생하면 리액트 앱이 죽어버렸는데<br/>
React16 에서는 componentDidCatch 를 통해 컴포넌트가 에러를 캐치하면<br/>
기존에 정상적으로 작동하는 것들은 살려두고<br/>
에러에만 대응하는 모습을 볼 수 있습니다.<br/>

<br/>
<br/>

## Error Boundaries with Higher Order Components

컴포넌트에서 에러를 잡는 것은 굉장히 매력적인 일이지만 JSX 엘리먼트가 많다면 에러를 잡기 위해<br/>
그 많은 코드에다가 일일히 삼항연산자로 에러를 잡는 코드를 만드는 것은 굉장히 비효율적입니다.<br/>
그래서 있는 것이 HOC 입니다.<br/>

개발단에서만 에러가 발생시 보이므로 사용자 경험을 좋도록 할 수 있습니다.<br/>

```js
import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

const BoundaryHOC = ProtectedComponent =>
  class Boundary extends Component {
    state = {
      hasError: false
    };
    componentDidCatch = () => {
      this.setState({
        hasError: true
      });
    };
    render() {
      const { hasError } = this.state;
      if (hasError) {
        return <ErrorFallback />;
      } else {
        return <ProtectedComponent />;
      }
    }
  };

class ErrorMaker extends Component {
  state = {
    friends: ["jisu", "flynn", "daal", "kneeprayer"]
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  };
  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend} `);
  }
}

const PErrorMaker = BoundaryHOC(ErrorMaker);

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

const PPortals = BoundaryHOC(Portals);

const Message = () => "Just touched it!";

class ReturnTypes extends Component {
  render() {
    return "hello";
  }
}

const ErrorFallback = () => "Sorry something went wrong";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
        <PPortals />
        <PErrorMaker />
      </Fragment>
    );
  }
}

export default BoundaryHOC(App);
```
