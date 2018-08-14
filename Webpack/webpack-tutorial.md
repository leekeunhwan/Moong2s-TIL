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

### css-loader, style-loader

웹팩은 모든 것을 모듈로 다루기 때문에 CSS 파일을 자바스크립트로 변환해서 로딩해야 합니다.
css-loader 는 바로 이런 역할을 합니다.

css-loader 를 적용한 뒤 번들링하면 CSS 코드가 자바스크립트로 변환된 것을 확인할 수 있습니다.

dist/bundle.js

```js
//module

exports.push([module.i, "body {\n background-color: green; \n}\n", ""]);
```

이렇게 모듈로 변경된 스타일 시트는 DOM 에 추가되어야만 브라우저가 해석할 수 있습니다.
style-loader 는 자바스크립트로 변경된 스타일 시트를 동적으로 DOM 에 추가하는 로더입니다.
보통 CSS 를 번들링하기 위해서는 css-loader, style-loader 를 함께 사용합니다.

webpack.config.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
```

src/style.css

```css
body {
  background-color: green;
}
```

<img src="../image/webpack-result2.png" width="500" height="300">

<br>

## 웹팩 - Plugin

웹팩에서 알아야할 마지막 개념이 플러그인입니다.<br>
로더가 파일단위로 처리하는 반면 플러그인은 번들된(하나로 합쳐진) 결과물을 처리합니다.<br>
번들된 자바스크립트를 난독화한다거나 특정 텍스트를 추출하는 용도로 사용할 수 있습니다.<br>
<b style="color:salmon;">(단, 난독화가 된다고 자바스크립트 코드 자체에 민감한 정보를 넣는 것은 굉장히 위험합니다.)</b><br>

<br>

### UglifyJsPlugin

UglifyJsPlugin 은 로더로 처리된 자바스크립트 결과물을 난독화 처리하는 플러그인입니다.
플러그인을 사용할 때는 웹팩 설정 객체의 plugins 배열에 추가합니다.

```js
const webpack = require("webpack");

module.exports = {
  plugins: [new webpack.optimize.UglifyJsPlugin()]
};
```

아래는 번들링된 결과물입니다.

```php
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
```

<br>

### ExtractTextPlugin

CSS 의 전처리기인 사스(SASS)를 사용하기 위해 기존의 CSS 파일을 사스 파일로 변경해서<br>
코딩한 뒤 웹펙에서는 사스로더(sass-loader)만 추가해주면 됩니다.<br>
이 역시 bundle.js 파일에 포함될 것입니다.<br>

만약 사스 파일이 매우 커진다면 style.css 파일을<br>
따로 번들링 하는 것이 효율적일 수 있습니다.<br>

이 떄 사용하는 것이 extract-text-webpack-plugin 입니다.<br>

webpack.config.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
```

로더의 test 키에 scss 를 확장자로 갖는 파일로 지정한뒤 기존 로더에 sass-loader 를 추가했습니다.<br>

src/style.css<br>

```scss
$bg-color: green;

body {
  background-color: $bg-color;
}
```

그리고 이 사스파일을 사용할 main.js 에서 로딩합니다.<br>

src/main.js<br>

```js
import Utils from "./Utils";

require("./style.scss"); // sass 로딩

Utils.log("Hello webpack");
```

여기까지 설정한뒤 번들링하면 bundle.js 파일이 생성되고<br>
사스에 설정한 코드는 이 파일에 함께 포함되어 있습니다.<br>

이제 별도의 CSS 로 분리하기 위해 extract-text-webpack-plugin 플러그인을 사용합니다.<br>

webpack.config.js<br>

```js
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("style.css")]
};
```

plugins 배열에 `new ExtractTextPlugin('style.css')` 객체를 추가했습니다.<br>
style.css 로 번들링하겠다는 의미입니다.<br>

UglifyJsPlugin 과 다르게 로더쪽에 설정을 추가했습니다.<br>
기존 로더를 제거하고 ExtractTextPlugin 이 제공하는 extract() 함수를 로더를 지정합니다.<br>

설정을 완료한후 웨팩 실행결과 dist 폴더에는 bundle.js 와 style.css 파일이 생성되었습니다.<br>

<img src="../image/webpack-result4.png" width="700" height="80">

<br>

## 정리

웹팩은 기본적으로 모듈 번들러입니다.<br>

의존성 그래프에서 엔트리로 그래프의 시작점을 설정하면,<br>
웹팩은 모든 자원을 모듈로 로딩한 후 아웃풋으로 묶어줍니다.<br>
로더로 각 모듈별로 바벨, 사스변환 등의 처리하고 이 결과를<br>
플러그인이 받아 난독화, 텍스트 추출등의 추가작업을 합니다.<br>

<br>

## 웹팩 + @

---

### commonChunk

`commonChunk` Plug-In 은 여러 개의 엔트리 포인트 사이에서 공유되는 공통 모듈로 구성된 파일(chunk)을<br>
별도의 엔트리로 분리함으로써 종속성을 관리할 수 있습니다. 예를 들면, 어떤 프로젝트에서 jQuery 를 사용하고,<br>
jQuery 를 필요로 하는 모든 모듈에 jQuery 를 참조한다고 했을 때, 이후 build 를 하게되면<br>
jQuery 모듈이 중복되는데 이렇게 공통적으로 사용되는 모듈이 여러 모듈을 참조한다고 하더라도<br>
commonChunk 를 사용하여 빌드를 하면 하나의 별도의 vendor 모듈로 분리할 수 있습니다.<br>

commonChunk 는 webpack 의 내장 모듈이기 때문에 별도의 설치는 필요하지 않습니다.<br>
대신에 webpack 을 참조해야 합니다.<br>

<br>

```js
//webpack.config.js
var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./static/asset/favicon.ico",
      template: "./static/index.html",
      chunks: ["css", "index", "app", "system", "monitor"]
    }),
    // 이런 방식으로 참조합니다.
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
    })
  ]
};
```

<br>

chunk 란?<br>

> 하나의 덩어리라는 의미로, 코드 스플리팅시 생성되는 자바스크립트 파일 조각을 뜻합니다.

vendor 모듈이란?<br>

> 프로젝트에서 전역적으로 사용되는 라이브러리들을 뜻합니다.

<br>

### DevServer && HMR

`DevServer` 는 webpack 의 주요 기능 중 하나입니다.<br>
실제로 우리는 자산들을 bundling 후에도 테스트가 필요합니다.<br>
또한 자산의 추가, 수정, 삭제에 따라 반영 작업이 필요한데<br>
webpack 의 DevServer 를 이용한다면 매우 편리하게 개발에 임할 수 있습니다.<br>
DevServer 는 말 그대로 개발 서버이며 이와 관련된<br>
또 하나의 webpack 주요 기능인 `HMR(Hot Module Replacement)`가 있습니다.<br>

이 핫 모듈 교체(한국어 풀이)는 특정 모듈이 변경되더라도 새로고침 할 필요없이<br>
런타임에 모든 종류의 모듈을 업데이트해 주는 기능입니다.<br>
이 기능을 사용하기 위해서는 DevServer 의 설정을 추가하고<br>
webpack 에 내장된 HMR 플러그 인을 사용하는 것 뿐입니다.<br>

> - webpack-dev-server 는 빠른 실시간 리로드 기능을 갖춘 개발 서버입니다.
> - webpack-dev-serve 는 디스크에 저장되지 않는 메모리 컴파일을 사용하기 때문에 컴파일 속도가 증가합니다.
> - webpack.config.js 에도 devServer 옵션을 통해 옵션을 지정하여 사용이 가능합니다

간략한 프로세스는 아래와 같습니다.<br>

> 1. 서버 실행 시 소스 파일들을 번들링하여 메모리에 저장
> 2. 소스 파일을 감시하고 있다가 소스 파일이 변경되면 변경된 모듈만 새로 번들링
> 3. 변경된 모듈 정보를 브라우저에 전송
> 4. 브라우저는 변경을 인지하고 새로고침되어 변경사항이 반영된 페이지를 로드

개인적으로는 React 의 Virtual DOM 처럼 동작한다고 느낌을 받았습니다.<br>

이제 webpack-dev-server 를 설치하고 설정을 적용해보면<br>

```
$ npm install webpack-dev-sever --save-dev
```

```js
//webpack.config.js
var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./static/asset/favicon.ico",
      template: "./static/index.html",
      chunks: ["css", "index", "app", "system", "monitor"]
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
    }),
    new UglifyWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      _: "underscore"
    })
  ],
  devServer: {
    host: "127.0.0.1",
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    inline: true,
    port: 9000,
    open: true
  }
};
```

devSever 의 설정에 대한 Description 입니다.

| option      | description                                                   | CLI 사용                                              |
| ----------- | ------------------------------------------------------------- | ----------------------------------------------------- |
| host        | 사용될 호스트 지정                                            | webpack-dev-server –host 127.0.0.1                    |
| contentBase | 콘텐츠를 제공할 경로지정(정적파일을 제공하려는 경우에만 필요) | webpack-dev-server –content-base /path/to/content/dir |
| compress    | 모든 항목에 대해 gzip 압축 사용                               | webpack-dev-server –compress                          |
| hot         | webpack 의 HMR 기능 활성화                                    | -                                                     |
| inline      | inline 모드 활성화                                            | webpack-dev-server –inline=true                       |
| port        | 접속 포트 설정                                                | webpack-dev-server –port 9000                         |
| open        | dev server 구동 후 브라우저 열기                              | webpack-dev-server –open                              |

<br>

webpack-dev-server 의 구동은 CLI 로 실행을 하고 이 CLI 를 npm script 에 등록하여 할 수 있습니다.<br>

```
$ ./node_modules/.bin/webpack-dev-server --config webpack.config.js
```

open 옵션으로 인해 서버가 구동 후 브라우저가 열리는 것을 볼 수 있습니다.<br>
여기서 F12 를 통해 개발자 콘솔을 열고 모듈을 변경, 수정하면서 console 창을 확인해보면<br>
HMR 이라는 기능을 확인할 수 있습니다.<br>

<br>

# 웹팩 공부하면서 본 글

> https://webpack.js.org/

> https://www.zerocho.com/category/Webpack/post/58ad4c9d1136440018ba44e7

> https://velopert.com/3421

> https://kdydesign.github.io/2017/11/04/webpack-tutorial/

<br>
