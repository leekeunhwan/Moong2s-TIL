# Webpack Tutorial

## 웹팩의 등장 배경

자바스크립트로 개발을 하다보면 코드가 많아지는 경우가 있습니다.<br>
코드가 많아지면 하나의 파일로 관리하기에 한계가 있고, 그렇다고<br>
여러개 파일을 브라우저에서 로딩하면 네트워크 리소스를 낭비하게 됩니다.<br>
뿐만 아니라 각 파일은 서로의 스코프를 침범하지 않아야 하는데<br>
잘못작성할 경우 변수 충돌의 가능성도 생기게 됩니다.<br>

함수 스코프를 사용하면 자바스크립트는 즉시호출함수(IIFE)를 사용해 모듈을 만들 수 있습니다.<br>
CommonJS 나 AMD 스타일의 모듈 시스템을 사용하면 파일별로 모듈을 관리할 수 있습니다.<br>

하지만 Node.js 가 아닌 브라우져에서 파일 단위 모듈 시스템을 사용하는 것은 쉽지 않았고,<br>
모듈을 IIFE 스타일로 변경해 주는 과정 뿐만 아니라 하나의 파일로 묶어(bundle)<br>
네트워크 비용을 최소화할 수 있는 것이 웹 프론트엔드 개발 과정에서는 필요했습니다.<br>

이렇게 웹팩이 등장하게 됩니다.<br>
웹팩의 중요 개념은 4 가지로 아래와 같습니다.<br>

- Entry
- Output
- Loader
- Plugin

<br>

## 웹팩 - Entry

웹팩에서 모든 것은 모듈입니다.<br>
자바스크립트, 스타일시트, 이미지등 모든 것을 자바스크립트 모듈로 로딩해서 사용하도록 합니다.<br>
<br>
<img src="../image/webpack-dependency-graph.jpg" width="300" height="300"><br>
<br>
위 그림처럼 자바스크립트가 로딩하는 모듈이 많아질수록 모듈간의 의존성은 증가합니다.<br>
`의존성 그래프의 시작점을 웹팩에서 엔트리(Entry)`라고 합니다.<br>

웹팩은 엔트리를 통해서 필요한 모듈을 로딩하고 하나의 파일로 묶습니다. (Bundler)<br>

webpack.config.js

```js
module.exports = {
  entry: {
    main: "./src/main.js"
  }
};
```

사용할 html 에서 사용할 자바스크립트의 시작점은 src/main.js 입니다.<br>

<br>

## 웹팩 - Output

엔트리에 설정한 자바스크립트 파일을 시작으로 의존되어 있는<br>
모든 모듈을 하나로 묶을 것(Bundle)입니다.<br>
`번들된 결과물을 처리할 위치는 Output` 입니다.<br>

webpack.config.js

```js
module.exports = {
  output: {
    filename: "bundle.js",
    path: "./dist"
  }
};
```

dist 폴더의 bundle.js 파일로 결과를 저장할 것입니다.<br>
html 파일에서는 번들링된 이 파일을 로딩하게끔 합니다.<br>

index.html

```html
<body>
    <script src="./dist/bundle.js"></script>
</body>
```

엔트리에 설정한 자바스크립트는 Utils.js 모듈을 사용합니다.<br>

src/main.js

```js
import Utils from "./Utils";
Utils.log("Hello webpack");
```

src/Utils.js

```js
export default class Utils {
  static log(msg) {
    console.log("[LOG] " + msg);
  }
}
```

웹팩은 터미널에서 webpack 커맨드로 빌드할 수 있습니다.

```
$ webpack
```

이렇게 간단히 웹팩으로 번들링을 할 수 있습니다.

<br>

## 웹팩 - Loader

웹팩은 모든 파일을 모듈로 관리합니다.<br>
자바스크립트 파일 뿐만 아니라 이미지, 폰트, 스타일시트도 전부 모듈로 관리합니다.<br>
그러나 웹팩은 자바스크립트 밖에 모릅니다.<br>
`비 자바스크립트 파일을 웹팩이 이해하게끔 가끔 변경`해야하는데 `로더`가 그런 역할을 합니다.<br>

로더는 `test`와 `use` 키로 구성된 객체로 설정할 수 있습니다.<br>

- `test` : `로딩할 파일을 지정`합니다.
- `use` : `적용할 로더를 설정`합니다.

<br>

### babel-loader

가장 간단한 예가 바벨입니다.<br>
ES6 에서 ES5 로 변환할 때 바벨을 사용할 수 있는데, `test`에 ES6 으로<br>
작성한 자바스크립트 파일을 지정하고, `use`에 이를 변환할 바벨 로더를 설정합니다.<br>

webpack.config.js

```js
module.exports = {
  module: {
    rules: [
      {
        // 로딩할 파일 - .js(확장자)가 들어가는 파일
        test: /\.js$/,
        exclude: "node_modules",
        // 적용할 로더
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  }
};
```

test 에 자바스크립트 확장자를 갖는 파일을 정규표현식으로 지정했습니다.<br>
node_modules 폴더는 패키지 폴더이므로 제외하기 위해서 exclude 에 설정합니다.<br>
use 에 로더를 설정하는데 babel-loader 를 추가했습니다.<br>

로더를 사용하기 위해서는 노드 패키지로 제공하는 로더를 npm 으로 추가해야 합니다.<br>

```
$ npm i --save-dev babel-loader babel-core babel-preset-env
```

웹팩 커맨드라인으로 빌드하고 나면 bundle.js 가 ES5 문법으로 변경된것을 확인할 수 있습니다.

```js
var Utils = function() {
  function Utils() {
    _classCallcheck(this, Utils);
  }

  _createClass(Utils, null, [
    {
      key: "log",
      value: function log(msg) {
        if (!msg) return;
        console.log("[LOG]" + msg);
      }
    }
  ]);

  return Utils;
};
```

<br>
