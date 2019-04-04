# CodePush

## CodePush란?

---

코드 푸쉬는 MS에서 만든 오픈소스로서 앱을 심사없이도(앱 스토어 릴리즈없이) 실시간 업데이트를 가능하게 해주는 모듈이다.<br>
리액트 네이티브에서는 네이티브 코드와 설정이 아닌 JS단의 코드와 assets(이미지, 폰트등..)의 요소들을<br>
앱 심사없이 바로 업데이트 할 수 있다.<br>

단, 네이티브 영역의 코드가 변경되어야 한다면, 코드 푸쉬를 사용해서는 안된다.<br>
(다시 패키징하는 방법으로 심사를 통해 배포해야한다.)<br>

가급적, 단순 로직 변경 및 문자열 변경, api 소스코드 변경정도의<br>
js수정시에만 코드푸시를 사용하고, 새로운 파일의 추가/삭제, 라이브러리의 추가/삭제등..<br>
파일이 추가되거나 삭제되는 경우에는 코드푸시보다는 다시 apk 혹은 ipa를 추출하여<br>
심사를 받는 것이 좋다.<br>

<br>
<br>

## CodePush 사용법

---

아래의 URL을 보면서 학습! (굉장히 친절하게 잘 만들어 놓으셨음)<br>

[https://github.com/kjk7034/ReactNativeStudy/blob/master/docs/CodePush.md]

- 사전에 다음은 설치되어야 한다.

```
$ npm install -g --save code-push-cli
$ npm install -g --save react-native-cli
$ npm install -g appcenter-cli
```
