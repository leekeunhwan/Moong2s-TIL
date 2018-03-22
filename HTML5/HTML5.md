# HTML

## HTML이란?
---
웹 페이지를 위한 지배적인 마크업 언어로, 구조적인 의미를 전달합니다.<br/>
마크업 언어는 일련의 마크업 태그로 구성되며, HTML 문서는 이러한 태그로 구성됩니다.<br/>
각각의 HTML태그는 다른의미를 갖고 있습니다.<br/>

HTML의 진화과정(?) 
```
[ SGML => HTML => HTML+ => HTML 2.0 => HTML 3.2 => HTML 4.01, XML 1.0 => XHTML 1.0 => XHTML 2.0 => HTML5 ]
```
<br/>

## HTML5
---
HTML5는 벤더사가 먼저 개발을 시작하였고, 나중에 W3C가 참여하여 개발되었습니다.<br/>
기존의 HTML은 구조를 담당하는 언어였음에 비해 HTML5는 어플리케이션을 위해 만들어졌다는 특징이 있습니다.<br/>
그래서 HTML5는 마크업 단계와 API단계로 나눠서 생각하면 좋습니다.<br/><br/>

## HTML5 구조
---
```html
<!DOCTYPE html>     //	웹 표준 정의 (HTML5 표준)

<html lang=“ko">	//	html의 language를 선언하는 것 (ko는 한국어, en은 영어)

<head>			    //	head에는 필요한 정보를 기입해주도록 한다.

    <meta charset="UTF-8">		//	utf-8은 인코딩 속성이다. (헤드에서 인코딩 속성이 최우선이다.)

    <meta name="viewport" content="width=device-width, initial-scale=1.0">			
    /*	반응형 웹을 만들기 위해 필수인 정보형 태그이다. 
	    viewport는 여러 단말기의 해상도에 대응되기 위해 사용한다.
		content 속성은 설정사항이라고 보면 된다.
		width=device-width는 너비를 단말기,장치의 너비로 설정하는 것,
	    initial-scale=1.0은 원본비율로 보여달라는 것 (minimum 0.5 | maximum 2.0) */

    <meta http-equiv="X-UA-Compatible" content="ie=edge">						
    /*	http-equiv는 protocol과 맘먹는 의미, content는 호환성 보기모드를 사용할 때 사용하는 옵션이다. 
	    (ie=edge는 깔려있는 버젼의 최신버젼으로 렌더링해라라는 의미)    */

    <title>Document</title>													
    /*	해당 페이지를 대표하는 타이틀 태그는 검색엔진 최적화에서 가장 중요하다!
		쓸때없이 특수기호 넣지말고 SEO에 맞게 타이틀을 설정해야 한다.
		사이트 명 + 핵심 키워드 조합으로 작성하면 좋다. */

    <link rel="stylesheet" href="./css/style.css" />
    // html에 필요한 다른 문서를 불러올 수 있다.    

</head>
<body>      //  body는 실질적으로 화면에 보여지는 부분이다.
    <div class="container"/>             // 태그만으로는 아무효과가 없지만 그룹핑할수 있는 div를 이용하여 큰 컨테이너(통)을 만든다.
        <header class="header">헤더</header>    //  통안에 필요한 header, nav, main article, footer와 같은 상징적인 태그로 구조를 표현한다.
        <nav class="navigation">내비게이션</nav>
        <main class="main">
            <section class="recommand-book">추천 서적</section>
            <section class="news">새소식</section>
            <section class="board">게시판</section>
            <section class="favorite-site">인기 사이트</section>
            <section class="twitter">트위터</section>
        </main>
        <article class="slogan">슬로건</article>
        <footer class="footer">푸터</footer> 
    </div>
</body>
</html>

모든 태그는 </>루트 태그로 포함되어야 한다. ex) <html></html>
```
<br/>


## HTML 설계
---
- 구조 설계 (structure architecture)

`<body>`안에 필요한 컨텐츠를 어떻게 짤 것인가?

- body가 사실상 브라우저에 보여지는 영역
- 컨텐츠를 잘 보여주기 위해서는 필요한 엘리먼트(태그)를 사용해야 합니다.

섹션 (Section) : header(include navbar) / content / footer

섹션의 묶음을 다루는 태그 : div (아무 뜻이 없는 태그지만 섹션을 나눌 떄 사용합니다.) / aria
(div도 무분별하게 쓰면 좋지않습니다. / 써야 할 이유가 있을때 쓰도록 합니다.)

Semantic Naming : 단어와 단어를 연결해주는 방법 (카멜케이스 방식, 케밥케이스 방식. 언더스코아 방식)<br/><br/>

## Semantic Markup이란?
---
모든 부분에 이유를 가지고 의미를 밝혀가며 의미에 맞는 HTML을 사용하여 구조를 설계/작성 하는 것입니다.<br/>


| header | div.container |
|---|----|
|nav|nav.navigation|
|main|main.main|
|        |
|        |
|article|article.slogan|
|        |
|footer|footer.footer|


<br/>

* 헤더는 창위에 필요한 부분
* nav는 메뉴
* main+ariticle은 본문
* footer는 제일 아래에 있는 내용

