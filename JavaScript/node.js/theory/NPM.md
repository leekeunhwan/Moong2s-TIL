# Node.js NPM

NPM 은 Node Package Manager 의 약자로 쉽게 생각하면 Node 계의 앱스토어라고 생각해도 좋습니다.<br/>
NPM 은 어떠한 모듈을 프로젝트에 사용하기 쉽게 설치, 삭제, 업그레이드, 의존성 관리까지 도와해줍니다.<br/>
또한 NPM 은 Node.js 뿐만 아니라 node 를 이용하여 개발한 다양한 것들에 지원이 되므로 요긴하게 사용할 수 있습니다.<br/>

<br/><br/>

## NPM 을 이용하여 모듈 설치하기

```
1. npm init (-y) : npm init이라는 명령어로 NPM을 사용하기 위한 JSON파일을 만들어줍니다.

2. npm install 모듈명 --save : 사용하고자 하는 모듈을 찾아서 설치를 합니다.

3. 모듈을 설치한 것이 dependencies에 반영이 되어있다면 성공적으로 설치를 한 것입니다.
```

<br/><br/>

## 설치한 모듈 사용하기

require 라는 메소드를 사용한다.

```js
// 모듈을 사용할 때 이렇게 underscore라는 변수에 require 메소드를 이용하여 할당하여 사용하면 됩니다.
const underscore = require("underscore");
```

<br/><br/>
