# Fastcampus Frontend Dev SCHOOL(2018.06.08)

## 들어가기 앞서

웹은 앱처럼, 앱은 웹처럼 서로 확장성을 가진 어플리케이션을 만들려고 하고 있다. (PWA)<br>
생태계가 매우 빠르게 변화하기에 우리는 빠르게 다양한 것을 배우고 습득할 수 있어야 한다.<br>
공부의 생활화가 중요하다<br>

[www.google.com/IO/2018‎] - 다양한 정보를 많이 얻을 수 있다.<br>

<br>

## git, Software Engineering

---

## git is..

---

git 은 형상관리시스템으로 버젼과 소스코드를 관리한다.<br>
린스 토마즈가 만들었다.(리눅스 만드신 분)

<br>

## git Process and Command

![](https://i.stack.imgur.com/MgaV9.png)

`git remote add origin(별칭/origin 이라고 하는 관례가 있긴함) git@github.com:leekeunhwan/Git_Study.git(주소)`<br>
`git remote get-url origin(별칭)`/`git remote -v` 라고 하면 이게 무엇인지 확인하기 좋다.<br>
`git add .` (생성 및 변경된 파일을 모두 스테이징 영역에 추가)<br>
`git add "파일명"` (해당 파일만 스테이징 영역에 추가)<br>
`git reset` / `git rebase` (add/commit 초기화)<br>
`git clean -f` (untracked 파일을 모두 지울 수 있다)<br>
`git clean -fd` (untracked 파일과 디렉토리를 모두 지울 수 있다.)<br>

서로 연관이 없는 파일의 경우 add .로 싸잡아서 올리는 건 좋지 못하다.<br>
연관이 있는 것은 한번에 올려도 되지만 아닌 경우에는 따로따로 올려준다.<br>

---

## 막간을 이용한 Vim 명령어

`"Esc"`를 눌러야 명령어 모드로 바뀐다. 그 다음에 :(쉬트로+세미콜론키)을 누르고 명령어를 입력합니다.

명령어 설명 // [ ](각괄호)안의 글자는 생략해도 됩니다.

`:w`[rite] 저장 // :(콜론)을 누른 다음에 w 를 입력한 것입니다. :w # 처럼 숫자(#는 숫자입력을 표시)에 해당하는 파일 이름을 저장할 수 있다.

`:sav`[eas] # // #(숫자를 의미)에 해당하는 파일을 '다른 이름'으로 저장한다.

`:w` file.txt // file.txt 파일로 저장

`:w »` file.txt // file.tx 파일에 덧붙여서 저장

`:q` // vi 종료

`:up` // 바뀐 내용만 저장합니다.

`:x` // :upq 와 같은 내용입니다.

`:q!` // vi 강제 종료

`ZZ` // 저장 후 종료

`:wq!` // 강제 저장 후 종료

`:e` file.txt // file.txt 파일을 불러옴

`:e` 현재 파일을 불러옴

`:e#` 바로 이전에 열었던 파일을 불러 옴

---

## My First Github Pages

github 저장소를 활용해 정적인 사이트 호스팅이 가능

`username`.github.io
http://tech.kakao.com/
https://spoqa.github.io/

---

### sample index page

After create new repo throuch github,

`$ git clone https://github.com/username/username.github.io.git`

Create New file `index.html`

`$ git add .`
`$ git commit -m "first page"`
`$ git push origin master`

---

### sample index page

```html
<!doctype html>
<html>
 <head>
  <meta charset="utf-8">
  <title>My first gh page</title>
 </head>
 <body>
  <h1>Home</h1>
  <p>Hello, there!</p>
 </body>
</html>
```

---

### Static Site Generator

- [Jekyll](https://jekyllrb.com/): Ruby 기반 정적인 블로그 생성기 - 설치와 사용이 쉬움 - 사용자가 많았음
- [Hugo](https://gohugo.io/): Golang 기반 정적인 블로그 생성기 - 빠른 속도로 사이트를 생성 - 사용자 증가 중
- [Hexo](https://hexo.io/): Node.js 기반 정적인 블로그 생성기 - Node.js 를 안다면 커스터마이즈가 쉬움 - 빠른 속도로 사용자 증가 중

**Recommand**
`Jekyll` > `Hugo` > `Hexo`

---

## What is branch?

---

## What is branch?

![](https://www.sideshowtoy.com/assets/products/3005011-groot/lg/marvel-guardians-of-the-galaxy-groot-premium-format-3005011-02.jpg)

그런트의 몸통 - master branch
그런트의 가지 - brunch

---

## What is branch?

분기점을 생성하고 독립적으로 코드를 변경할 수 있도록 도와주는 모델

(master 는 사용자가 보게될 정식 버젼만 있어야 한다. / master 에서 일하면 혼나는 지름길..)

ex)

master branch

```python
print('hello world!')
```

another branch

```python
for i in range(1,10):
    print('hello world for the %s times!' % i)
```

---

## Branch

Show available local branch
`$ git branch`

Show available remote branch
`$ git branch -r`

Show available All branch
`$ git branch -a`

---

## Branch

Create branch
`$ git branch stem`

Checkout branch
`$ git checkout stem`

Create & Checkout branch
`$ git checkout -b new-stem`

make changes inside readme.md
`$ git commit -a -m 'edit readme.md'`
`$ git checkout master`

merge branch
`$ git merge stem`

---

## Branch

delete branch
`$ git branch -D stem`

push with specified remote branch
`$ git push origin stem`

see the difference between two branches
`$ git diff master stem`

---

## git flow strategy

![](https://cdn-images-1.medium.com/max/1400/1*9yJY7fyscWFUVRqnx0BM6A.png)

---

## use git flow easily!

[Link](https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html)

![](https://danielkummer.github.io/git-flow-cheatsheet/img/git-flow-commands.png)

---

## Collaborate with your Co-worker

---

## Method 1: Collaboration

Add Collaborator
<img src="./image/collaborators.png">

---

## Collaboration

Add, Commit and Push like you own it.

---

## Method 2: Fork and Merge

<img src="./image/fork1.png">

---

## Fork and Merge

<img src="./image/fork2.png">

---

## Fork and Merge

<img src="./image/fork3.png">

---

## Fork and Merge

`$ git clone https://github.com/username/forked-repo.git`

---

## Fork and Merge

`$ git branch -a`
`$ git checkout -b new-feature`

---

## Fork and Merge

Make some change

`$ git add file`
`$ git commit -m "commit message"`
`$ git push origin new-feature`

---

## Fork and Merge

<img src="./image/pr1.png">

---

## Fork and Merge

<img src="./image/pr2.png">

---

## Fork and Merge

<img src="./image/pr3.png">

---

## Fork and Merge

<img src="./image/pr4.png">

---

## Fork and Merge

<img src="./image/pr5.png">

---

## Fork and Merge

<img src="./image/pr6.png">

---

## Fork and Merge

<img src="./image/pr7.png">

## Software Engineering

---

## Software Engineering

### Definition

Software engineering (SWE) is the application of engineering to the design, development, implementation, testing and maintenance of software in a systematic method.
--> 소프트웨어의 개발, 운용, 유지보수 등의 생명 주기 전반을 체계적이고 서술적이며 정량적으로 다루는 학문

---

## Software Engineering

### Why??

---

## Development vs Implementation

- Development - The process of analysis, design, coding and testing software.<br/>
  (프로그램의 생명주기를 처음부터 끝까지 함께할 수 있는 사람)<br/>

- Implementation - The installation of a computer system or an information system. - The use of software on a particular computer system.

---

## Trend of Software Engineering

- Acceleration of **DevOps** adoption (DevOps 채택 가속화)
- Continued wave of everything natively mobile (계속되는 네이티브 모바일의 물결)
- Greater demand for increased privacy (개인 정보 보호에 대한 요구 증가)
- Cloud computing will be a thing of the past (클라우드 컴퓨팅은 과거의 일이 될 것입니다.)
- integration with Web and Mobile App (웹 및 모바일 앱과의 통합)

---

## DevOps

used to refer to a set of practices that emphasizes the **collaboration and communication** of both software developers and other information-technology (IT) professionals while automating the process of software delivery and infrastructure changes.
It aims at establishing a **culture** and **environment** where building, testing, and releasing software can happen **rapidly**, **frequently**, and more **reliably**.

소프트웨어 개발자 및 기타 정보 기술 (IT) 전문가의 협업 및 의사 소통을 강조하면서<br/>
소프트웨어 제공 및 인프라 변경 프로세스를 자동화하는 일련의 사례를 언급하는 데 사용됩니다.<br/>
이는 소프트웨어를 구축하고, 테스트하고, 공개하는 것이 빠르고, 자주, 그리고<br/>
보다 안정적으로 일어날 수있는 문화와 환경을 구축하는 것을 목표로합니다.<br/>

---

## DevOps

- 기존의 개발과 운영 분리로 인해 발생하는 문제들
  문제 발생 -> 비방 -> 욕 -> 상처 -> 원인분석 -> 문제해결

- 좋은 소프트웨어를 위한 필수조건 - 기획팀과의 원활한 소통으로 요구사항을 충실히 반영 - 운영팀과의 원활한 소통으로 소비자 불만과 의견을 반영

---

## DevOps

운영과 개발을 통합하여 커뮤니케이션 리소스를 줄이고, 개발 실패 확률을 줄임과 동시에 보다 안정적인 서비스를 운영할 수 있음!!

![](http://cfile5.uf.tistory.com/image/226C914F528B70D33266F5)

---

## Software Development Life Cycle

---

## Requirements Analysis

나에게 돈을 주는 사람에게 만족도를 주는 것만큼 중요한 것이 없다.

---

## Requirements

> 무엇이 구현되어야 하는가에 대한 명세

시스템이 어떻게 동작해야 하는지 혹은 시스템의 특징이나 속성에 대한 설명

---

## Requirements Analysis

시스템 공학과 소프트웨어 공학 분야에서 수혜자 또는 사용자와 같은 다양한 이해관계자의 상충할 수도 있는 요구사항을 고려하여 새로운 제품이나 변경된 제품에 부합하는 요구와 조건을 결정하는 것과 같은 업무

---

## Requirements Analysis

나(개발자)와 클라이언트(사장) 모두를 만족시키기 위한 연결고리

---

## Requirements Analysis

- 요구사항 유도(수집): 대화를 통해 요구사항을 결정하는 작업<br>
  (수집을 잘못하게되면 다 틀어지므로 제일 중요하다고 할 수 있다.)<br>

- 요구사항 분석: 수집한 요구사항을 분석하여 모순되거나 불완전한 사항을 해결하는 것

- 요구사항 기록: 요구사항의 문서화 작업

---

## Requirements Layer

<img src="./image/r-layer.png">

---

## Business Requirements

> "Why"

---

## Business Requirements

> "왜" 프로젝트를 수행하는지

- 고객이 제품을 개발함으로써 얻을 수 있는 이득
- Vision and Scope(비전과 범위)

---

## User Requirements

> "What"

---

## User Requirements

> 사용자가 이 제품을 통해 할 수 있는 "무엇"

- Use cases, Scenarios, User stories, Event-response tables, ..

---

### use case diagram

![](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Use_case_restaurant_model.svg/320px-Use_case_restaurant_model.svg.png)

---

### user scenario

![](http://www.parachutedigitalmarketing.com.au/wp-content/uploads/2012/08/Website-User-scenario-workflow.png)

---

### user stories

![](https://i17yj3r7slj2hgs3x244uey9z-wpengine.netdna-ssl.com/wp-content/uploads/edd/2016/03/BDUK-63-User-Story-Map-Template-Agile-v05-2-releases-850x600.png)

---

## Functional Requirements

> "What"

---

## Functional Requirements

> 개발자가 이 제품의 "무엇"을 개발할 것인지

- '~ 해야 한다' 로 끝나 반드시 수행해야 하거나 사용자가 할 수 있어야 하는 것들에 대해 작성

---

## System Requirements

- 여러개의 서브 시스템으로 구성되는 제품에 대한 최상위 요구사항을 설명
- 컴퓨터: 모니터 + 키보드 + 마우스 + 본체 + 스피커<br>
  (Express.js 6.0 버전을 쓰자 - 이런식으로 구체적으로 명시하는게 좋다)<br>

---

## Business Rules

- 비즈니스 스트럭쳐의 요구나 제약사항을 명세
- "유저 로그인을 위해서는 페이스북 계정이 있어야 한다."
- "유저 프로필 페이지에 접근하기 위해서는 로그인되어 있어야 한다"

---

## Quality Attribute

- 소프트웨어의 품질에 대해 명세
- "결제과정에서 100 명의 사용자가 평균 1.5 초의 지연시간 안에 요청을 처리해야 한다"
- 용량, 시간, 처리속도에 관련 된 사항 명세

---

## External Interface

- 시스템과 외부를 연결하는 인터페이스
- 다른 소프트웨어, 하드웨어, 통신 인터페이스, 프로토콜, ..

---

## Constraint

- 기술, 표준, 업무, 법, 제도 등의 제약조건 명세
- 개발자들의 선택사항에 제한을 두는 것

---

## When the well is full, it will run over.

---

## 지나치게 자세한 명세작성

- 명세서는 말 그대로 명세일 뿐, 실제 개발 단계에서 마주칠 모든 것을 담을 수 없음
- 개발을 언어로 모두 표현할 수 없음
- 명세서가 완벽하다고 해서 상품도 완벽하리란 보장은 없음
- 때로는 명세를 작성하기 보단 프로토타이핑이 더 간단할 수 있음.

<style>
h1,h2,h3,h4,h5,h6,
p,li, dd {
font-family: 'Nanum Gothic', Gothic;
}
span, pre {
font-family: Hack, monospace;
}
</style>

## Q&A

[메일보내기] me@ulgoon.com

## 과제 - 메디컬 팩토리 - 로그인, 회원가입, 리뷰 : Reverse Engineering

1.  명세 - 이 기능을 구현하기 위해서 어떠한 명세가 나왔을까 적어보기(기능 명세)
