# RN 64비트 지원 관련 회고..

구글 64bit 지원을 해야한다는 소식을 접했을 떄만 해도<br>
되게 막연하게 쉽게 지원이 될 줄만 알고 열심히<br>
앱의 화면과 기능 구현, QA를 하고 있다가<br>
급하게 7월이 되서 부랴부랴 대응을 하고자 했는데<br>
업그레이드하면 된다는 글을 보고 RN 버젼업을<br>
시도하였습니다.<br>

<br>
<br>

## 0.59.10으로 버젼 업 도전

평소 눈팅을 즐겨했기에 0.60으로 바로 뛰면<br>
다양한 부분에서 골고루 지옥을 경험할 수 있다는 것을<br>
인지하였고, 0.59.10으로 버젼업 하는 것을 목표로 하였습니다.<br>
<br>

rn-diff-purge를 통해 0.57.8 -> 0.59.10을 선택후<br>
수동으로 코드를 옮겼습니다.<br>
코드를 옮긴후 node_modules를 지우고,<br>
다시 npm install을 해주고<br>
터미널에 react-native -v를 찍어보니<br>
0.59.10로 변해있음을 알 수 있었습니다.<br>

<br>
<br>

## 64비트 빌드 도전

순조롭게(?) 안드로이드 스튜디오를 켰고,<br>
gradle의 버젼이 달라져서 업데이트를 해야한다기에<br>
업데이트를 하였고, 빌드를 시작..!<br>
평소보다 apk가 10mb가 늘어있었고,<br>
build에서 analyze apk를 통해 분석을 해보니<br>
64bit가 맞았습니다.<br>
이때까지 너무 행복했죠...<br>

<br>
<br>

## 앱이 죽는다...

apk를 설치하고 앱을 기동하니 앱이 죽습니다.<br>
이게 어떻게 된 일이지 하고 열심히 구글링하고<br>
솔루션을 다 갖고 붙여보고 맨땅에 헤딩하기 시작했습니다<br>
제 앱이 죽으면서 뜨는 에러메시지들..<br>

<br>

```
react native version mismatch,
java.lang.RuntimeException: java.lang.RuntimeException: com.android.builder.dexing.DexArchiveMergerException: Unable to merge dex,
java.lang.OutOfMemoryError
등등...
```

<br>

하나씩 대응해도, 결과적으로 안되었고,<br>
커뮤니티에 질문도 올리고 고생이란 고생을 하던중,<br>
광렬님께서 0.59버젼인데<br>
앱을 빌드하면 죽는다고 질문을 하신 글을 보게 되었습니다.<br>
답변중 jsc-android-buildscripts를 설치하거나<br>
0.59.10 혹은 0.60.+를 설치해야 하면 된다는 글을<br>
보고 0.59.10이니까 나는 해당사항이 없겠구나<br>
싶었는데 react native version mismatch가<br>
자바스크립트 코어와 RN 버젼이 달라서 났던게<br>
생각이 나서 저도 설치를 해보았습니다.<br>

<br>
<br>

### 된다. 64비트 앱의 빌드와 실행이 잘된다..!

아래에 적어놓긴 했지만,<br>

빌드를 하는 과정에서는<br>
`Unable to merge dex`<br>
`java.lang.OutOfMemoryError`를 겪었고,<br>
빌드후 실행때에는 `requireNativeComponent is not defined` 에러를 핸들링하고 나서야<br>
앱이 잘 기동되는 것을 확인했습니다.<br>
적어 놓고보니 금방한거같지만 정말 5일정도를 맨땅에 헤딩한거같네요.<br>
진짜 커뮤니티 도움을 많이 받았습니다...!<br>
<br>
마지막으로 제가 겪었던 이슈의 에러 메시지와<br>
솔루션 링크를 제공해드리면서 물러가보겠습니다.<br>

<br>
<br>

---

### 1. react native version mismatch

`react native version mismatch`

<br>

> 해결 방법

1. `jsc-android-buildscripts` 설치
2. build.gradle > dependencies에 다음과 같은 코드 추가

```
implementation ("com.facebook.react:react-native:${RNVersionNumber}") { force = true }
```
<br>

jsc-android-buildscripts : https://github.com/react-native-community/jsc-android-buildscripts

<br>
<br>

### 2. Unable to merge dex

```
java.lang.RuntimeException: java.lang.RuntimeException:
com.android.builder.dexing.DexArchiveMergerException: Unable to merge dex,
What went wrong: Execution failed for task':
app:transformNativeLibsWithMergeJniLibsForDebug'.
More than one file was found with OS independent path 'lib/x86_64/libjsc.so'
```

<br>

> 해결 방법

android/app/build.gradle에 아래의 코드를 android {} 안에 추가

```java
packagingOptions {
       pickFirst 'lib/x86/libc++_shared.so'
       pickFirst 'lib/x86_64/libjsc.so'
       pickFirst 'lib/arm64-v8a/libjsc.so'
       pickFirst 'lib/arm64-v8a/libc++_shared.so'
       pickFirst 'lib/x86_64/libc++_shared.so'
       pickFirst 'lib/armeabi-v7a/libc++_shared.so'
   }
```

<br>
<br>

### 3. java.lang.OutOfMemoryError

`Expiring Daemon because JVM heap space is exhausted -> java.lang.OutOfMemoryError`

<br>

android/gradle.properties에 아래의 코드 추가

```java
org.gradle.jvmargs=-Xmx4096m -XX:MaxPermSize=4096m -XX:+HeapDumpOnOutOfMemoryError
```

또한 android/app/build.gradle의 android{} 안에 아래의 코드 추가

```java
dexOptions {
    jumboMode true
    javaMaxHeapSize "4g"
}
```

<br>
<br>

### 4. 앱 빌드 후 requireNativeComponent is not defined라는 메시지가 뜰 때

`requireNativeComponent is not defined`

<br>

Modal을 구버젼에서 쓴 경우에 주로 발생하는 것 같습니다.
정확하게 몇 버젼부터 몇 버젼까지 해당이 있는지는 모르겠습니다.
이런 에러가 뜰 경우 ${projectFolder}/node_modules/react-native/Libraries/Modal/Modal.js를 열으셔서

```js
const RCTModalHostView = Platform.OS === 'ios' 
    ? requireNativeComponent('RCTModalHostView') 
    : requireNativeComponent('TranslucentModalHostView');
```

위의 코드를 아래처럼 바꿔주시면 됩니다.

```js
const requireNativeComponent = require('requireNativeComponent');
const RCTModalHostView = Platform.OS === 'ios'
    ? requireNativeComponent('RCTModalHostView')
    : requireNativeComponent('TranslucentModalHostView');
```

