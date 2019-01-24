# AOS Keystore 알아보기

## Android Keystore이란?

---

안드로이드 시스템에서도 애플처럼 키 사이닝이 매우 중요하다.<br>
구글 플레이에서는 키 사이닝으로 이 앱이 신뢰할 수 있는 앱인지, 제작자는 누구인지 판단하는 제 1의 근거가 되기 때문이다.<br>
게다가 키 사이닝이 되지 않은 어플리케이션은 안드로이드 시스템에 설치할 수 없기 때문에,<br>
반드시 모든 어플리케이션은 키 사이닝을 해야한다.<br>
디버깅이나 개발시 기기에 설치할 때도 개발도구 내부에서 디버그 모드용 키로 사이닝 후 기기에 설치하는 과정을 거치고 있다.<br>

<br>
<br>

## 안드로이드 keystore 위치

---

물론 저장하는 곳은 위치마다 다르지만 보통 아래와 같다.

Windows Vista, 7, 8 : C:\Users\<user>\.android\
Linux/OS X : ~/.android

<br>
<br>

## 디버그 모드용 안드로이드 keystore 생성

---

디버그용 keystore는 안드로이드 SDK를 설치할 때는 같이 생성된다.<br>
위에서 설명한 위치에 debug.keystore라는 파일 이름으로 생성되어 있다.<br>
디버그용 keystore는 그냥 사용하면 되는데, 한 가지 유의할 점은 유통기한이 1년밖에 되지 않는다는 점이다.<br>
만약 1년이 지나서 디버그용 keystore 관련된 에러가 발생한다면 그냥 디버그용 keystore을 지우고<br>
다시 빌드하면 빌드 도구에서 다시 keystore을 생성한다.<br>

가끔씩 디버그용 keystore를 공유할 때가 있는데, 그 경우 이클립스의 custom debug keystore 기능을 사용하면 편하다.<br>
PC에 설치된 SDK의 디버그용 기본 keystore 대신 다른 디버그용 keystore를 사용하는 것인데,<br>
이클립스의 windows-preference-android-build에서 설장할 수 있다.<br>
디버그용 keystore를 만들때 주의할 점은 SDK에서 생성한 디버그용 기본 keystore의 이름과 암호는 동일해야 한다는 점이다.<br>

keystore 이름 : "debug.keystore"<br>
keystore 암호 : "android"<br>
key 별칭 : "androiddebugkey"<br>
key 패스워드 : "android"<br>

디버그용 keystore로는 구글 스토어에 앱을 릴리즈 할 수 없다.<br>

생성방법은 아래를 참고하자<br>

[https://www.androidpub.com/35445]<br>[https://arabiannight.tistory.com/entry/%ec%9d%b4%ed%81%b4%eb%a6%bd%ec%8a%a4eclipse-%ec%96%b4%ed%94%8c%eb%a6%ac%ec%bc%80%ec%9d%b4%ec%85%98-keystore-%ec%83%9d%ec%84%b1-%eb%b0%8f-%ec%82%ac%ec%9d%b8%ed%95%98%ea%b8%b0]<br>

<br>
<br>

## 릴리즈 모드용 안드로이드 keystore 생성

---

구글 플레이나 기타 T스토어나 올레스토어등 배포를 하려면, 릴리즈 모드용 keystore를 생성해서 이 keystore로 사이닝해야한다.<br>
키 사이닝을 위해서는 JDK의 keytool 유틸을 이용한다.<br>
JDK설치 디렉토리/bin이 path에 포함되어 있다는 가정하에 아래는 명령어!<br>

```
$ keytool -genkey -v -keystore <keystore name> -alias <alias name> -keyalg <alg name> -keysize <key size> -validity <validity days>
```

- keystore keystore가 저장될 위치.
- alias 키 자체 이름
- keyalg 키 암호화 알고리즘. RSA나 DSA 중 하나를 선택한다.
- keysize 키의 크기를 나타낸다. 이 옵션을 빼면 기본적으로 1024비트의 크기로 저장한다. 구글에서는 2048비트 이상의 키 크기를 권장
- validity 유효기간이다. 단위는 일. 365를 입력하면 1년이지만 이렇게 입력하면 경고가 뜰 것이다. 구글에서는 최소 25년 이상(9125일)의 유효기간을 입력할 것을 권장한다.

예를 들어 “my-release-key.keystore”라는 이름으로 RSA알고리즘을 적용,<br>
키 크기를 2048비트, 유효기간을 10000일, 키 이름을 “my_key”라고 만든다면 커맨드 창(혹은 쉘)에서 아래와 같이 입력한다.<br>

```
$ keytool -genkey -v -keystore my-release-key.keystore -alias my_key -keyalg RSA -keysize 2048 -validity 10000
```

다만, 어플리케이션마다 다른 키를 적용할 필요없다. 하나의 키로 여러개의 어플리케이션에 사이닝을 할 수 있다.<br>
