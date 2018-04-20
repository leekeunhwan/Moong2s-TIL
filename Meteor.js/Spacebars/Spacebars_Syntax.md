# Spacebars_Syntax

스페이스바(spacebars)는 핸들바에 영향을 받아 개발된 템플리팅 언어다.<br/>
지금은 핸들바의 일부 문법만을 사용하며 단순화되었다.<br/>
미티어에서 스페이스바 구문은 HTML 파일 중에서 `<template name="템플릿 이름"></template>` 블록 안에 작성한다.<br/>
기본 사용법은 `{{ 내용 }}` 두 중괄호 사이에 작성한다.<br/>
스페이스바로 작성된 `<template>` 안의 소스는 콘솔에서 meteor run 명령을 실행 시<br/>
빌드 절차에 따라컴파일된 후 반응형 미티어 템플릿으로 변환된다.<br/>

<br/><br/>

## {{>}} - 템플릿 삽입

```html
<head>
  <title>스페이스바 테스트</title>
</head>

<body>
  <h1>Welcome to Meteor!</h1>
  {{> myPage}}
</body>

<template name = "myPage">
    <p>여기의 내용이 위의 {{> myPage}}에 삽입된다.</p>
</template>
```

{{> myPage}}로 HTML 코드 안에 선언하면 HTML 파일 중에서<br/>
`<template name="myPage">`인 HTML 템플릿의 내용이 삽입된다.<br/>
템플릿 삽입 시 {{> myPage dataObject}} 형태로 데이터를 전달한다.<br/>

<br/><br/>

## {{}} - 일반식 표현

{{}} 형태는 일반식 표현이다.<br/>
일반식은 중괄호 두 개로 표현한다.<br/>

```js
//js

Template.myPage.helpers({
  greeting: function() {
    return "안녕하세요";
  }
});
```

template.myPage 헬퍼안의 내용인 greeting 을일반식 표현을 통해 HTML 에서 렌더링 한다.

```html
<!--html-->
<template name="myPage">
    <br/>{{greeting}}
</template>
```

이렇게 일반식 표현은 헬퍼 함수의 이름을 적으면 DOM 에 해당 값이 렌더링 된다.
또한 아래처럼 HTML 오브젝트의 속성 값을 표현하는 데도 사용할 수 있다.

```html
<!--value 속성 사용-->
<input type="text" value="{{greeting}}"/>

<!--class 속성 사용-->
<input type="text" class="{{greeting}}"/>

<!--checked 속성 사용-->
<input type="checked" checked="{{something}}"/>
```

<br/><br/>

## {{#each}}...{{/each}} - each 블록 헬퍼

each 블록은 헬퍼 함수가 반환하는 배열의 각 요소의 개수만큼 실행되고<br/>
일반식 표현으로 배열 요소의 키 값에 접근할 수 있다.<br/>

```js
// js

Template.myPage.helpers({
  userList: function() {
    return [{ name: "홍길동", age: 27 }, { name: "김길동", age: 32 }];
  }
});
```

템플릿.이름.헬퍼 안의 내용들이 HTML 의 템플릿 블록안으로 전달되어결국에는 {{> myPage}}가 있는 부분에서 렌더링이 된다.

```html
<!--html-->
<head>
  <title>myPage</title>
  <!--html이랑 동일하게 제목을 써준다.-->
</head>

<body>
  {{> myPage}}
  <!--myPage 템플릿이 들어갈 자리라는 의미-->
</body>

<template name="myPage">
  {{#each userList}}
  <br/>{{name}} - {{age}}
  {{/each}}
</template>
```

위의 each 구문에서 삽입 코드를 다음과 같이 사용한다면

```
{{#each userList}}
    {{> userView}}
{{/each}}
```

userList 배열의 각 요소가 userView 템플릿에 전달되고 userView 템플릿 코드에서는 다음과 같이 사용할 수 있다.

```html
<template name="userView">
    <br>{{name}}-{{age}}
</template>
```

<br/><br/>

## {#if something} {{else}} {{/if}} 구문

something 에 해당하는 헬퍼의 반환값이 참일 경우와 거짓일 경우에 따라 분기되어 렌더링 된다.<br/>

```js
// js

Template.myPage.helpers({
    something : function() {
        return true;
    }
});
}
```

```html
<!--html-->
<template name = "myPage">
  {{#if something}}
    참
  {{else}}
    거짓
  {{/if}}
</template>
```

> 렌더링 결과 : 참
