# Node.js Module

모듈은 독립적인 하나의 소프트웨어로 Node.js 에서는 파일 하나하나가 모듈로 기능합니다.<br/>
브라우저에서는 script 태그로 스크립트를 불러오면 다른 스크립트에서도 이전 스크립트의 변수를 사용할 수 있었지만,<br/>
Node.js 는 명시적으로 이전 스크립트의 변수를 사용하겠다고 선언해주어야 합니다.<br/>
이러한 특성 때문에 Node.js 에서는 모듈 시스템을 이해하는 것이 중요합니다.<br/>

# Node.js Module 만들기

1.  `module.exports`에 대입하기

```js
// calc.js

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

module.exports = {
  add: add,
  substract: substract,
  multiply: multiply,
  divide: divide
};
```

```js
const add = require('./calc.js').add;
const multiply = require('./calc.js').multiply;

console.log(multiply(add(1,2), add(2,3)); // 15
```

2.  `exports` 객체 사용하기

```js
exports.add = function(a, b) {
  return a + b;
};

exports.substract = function(a, b) {
  return a - b;
};

exports.multiply = function(a, b) {
  return a * b;
};

exports.divide = function(a, b) {
  return a / b;
};
```

[단! 주의할 점]
exports 자체에는 절대로 다른 값을 대입하면 안 된다는 겁니다.<br/>
항상 exports 객체의 속성에 값을 넣어주어야 합니다.<br/>

```js
// exports에 값을 대입하게 되면 더 이상 모듈로 기능하지 않습니다.

exports = divide;
```

위처럼 자신이 모듈을 만들어서 사용할 수도 있지만 다른 사람이 만든 모듈을 가져다가 사용할 수도 있습니다.
그 것을 도와주는 것이 바로 `NPM` 입니다.

<br/><br/>
