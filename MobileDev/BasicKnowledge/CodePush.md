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

사용법에 대해서 사전에 미리 말하자면,<br>
필자는 React-Native에서만 Code-push를 통한 update를 이용해본 경험이 있으므로,<br>
Meteor라던지 다른 환경에서의 Code-push는 이와 다를 수 있다.<br>
현재 적고 기술하는 code-push-cli는 곧 지원이 종료될 예정이다.<br>
appcenter-cli를 이용하도록 하자<br>
아래는 개념만 참고하도록!!<br>
<br>

1. code-push-cli 설치

```
$ npm i -g code-push-cli
```

<br>

2. code-push register 실행

```
$ code-psush register
```

브라우저가 열리면서 인증 토큰을 주는데 cli에 Copy&Paste하여 넣어준다.<br>

<br>

3. code-push app 등록

```
$ code-push app add <appName>
```

만약 moong2라는 앱이 있다면<br>
code-push app add moong2-ios<br>
code-push app add moong2-aos<br>
요런식으로 뒤에 os를 달아주는 것이 좋다.<br>
(왜냐하면 같은 이름으로 프로젝트를 생성못할 뿐더러 헷갈릴수 있기 때문..!)<br>

등록을 하면<br>
각각의 배포키를 받는데 (staging, production)<br>
이는 굉장히 소중한 것이므로 별도로 기록을 해두도록 하자.<br>

staging과 production을 어떻게 운영할 것인지는 개발자 본인의 역량이겠지만,<br>
필자의 경우 staging은 DEV환경, Production은 LIVE환경으로<br>
나누어서 개발단에서는 staging 릴리즈로 테스트하고,<br>
문제가 없을 경우 Production으로 promote(승격) 하였다.<br>

```
$ code-push app list
```

이렇게 명령어를 터미널에 입력할 경우 확인이 가능하다.<br>

<br>

4. 라이브러리를 설치하고 연결해준다.

```
$ npm install --save react-native-code-push@latest
// react-native-code-push 최신버젼으로 설치

$ react-native link react-native-code-push
// react-native link를 통해 라이브러리를 각각의 네이티브 파일에 연결해준다.
// react-native link를 하면 deploymentkey를 입력하라고 하는데
// 아까 저장해둔 deploymentkey를 입력해두도록 하자
// production, staging 중 배포로 쓰고자하는 것을 입력
// 대개 staging을 입력하고 배포후 문제가 없으면 promote로 production으로 보낸다.
```

5. react-native의 경우 App.js(상위 컴포넌트)에 코드를 추가해준다.

```js
import codePush from "react-native-code-push";

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  // 언제 업데이트를 체크하고 반영할지를 정한다.
  // ON_APP_RESUME은 Background에서 Foreground로 오는 것을 의미
  updateDialog: false,
  // 업데이트를 할지 안할지 여부에 대한 노출 (잠수함 패치의 경우 false)
  installMode: codePush.InstallMode.IMMEDIATE
  // 업데이트를 어떻게 설치할 것인지 (IMMEDIATE는 강제설치를 의미)
};
App = codePush(codePushOptions)(App);
```

<br>

6. 이렇게 하면 코드푸시 사용준비가 끝난다. 배포를 해보자

```
$ code-push release-react <codepushProjectName> <platform>
```

이렇게 배포를 하고 앱을 들어가본다.<br>
크게 달라진 것은 없지만 ON_APP_RESUME을 해주면,<br>
앱이 재기동 되는 것을 볼 수 있다.<br>
바로 코드푸시가 반영된 것이다.<br>

Staging과 Production에 어떤 빌드가 올라가있는지 궁금하다면<br>
아래의 명령어를 입력하자.<br>
그러면 목록이 친절히 보인다.<br>

```
$ code-push deployment ls <codepushProjectName> -k
```

<br>
<br>

## 코드 푸시 사용후 느낀점

---

라이브배포 단계에서 android는 잘 반영이 되었지만 iOS는 코드사이닝 문제로 애를 먹었었다.<br>
그래도 문제가 해결되자 3일정도 소요되는 업데이트 심사없이 앱에 코드를 반영시킬수 있다는 것이<br>
매우 매력적이고 황홀했다.<br>
하지만 코드푸시가 모든 것을 해결해 주진 못한다.<br>
앱스토어 업데이트와 코드푸시를 적재적소에 잘 활용해야 좋을 것 같다.<br>
