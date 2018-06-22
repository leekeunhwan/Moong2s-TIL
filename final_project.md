# 최종 프로젝트 - 프로젝트 관리 웹 서비스 만들기

## 주제 설정 - 프로젝트 관리

---

## 개발 일정

---

1 주차 - 데이터 구조 설계, 로그인, 회원가입, 전반적인 UI 설계(CRUD)등.. 기본적인 기능은 다 구현하기<br>
2 주차 - CSS 및 코드 개선, 추가 기능 구현

<br>

## 팀의 공동 목표

---

아틀라시안의 컨플루언스와 유사한 프로젝트 협업툴을 만드는 것

<br>

## 개별 팀원 목표

---

```
보현 : Git으로 협업을 해보면서 협업에 대한 경험을 쌓기
      시간안에 목표 달성하기
      보기 좋은 코드를 작성하기 (최대한 간결하면서 가독성 높은 코드)

근환 : 배운 것을 최대한 활용하여 프로젝트 만들기
      핵심기능 구현 및 REST API도 활용해보기
      협업을 통해 커뮤니케이션 경험 및 스킬을 쌓기
```

<br>

## 중점적으로 구현할 기능 3 가지와 이를 위해 사용할 기술

1.  로그인 및 회원가입등 인증, 기본적이면서 중요한 CRUD 구현 - Axios, Json-Server 사용
2.  다대다 형식의 데이터 구조 설계 - Json-Server
3.  가독성이 좋게 프로젝트를 보게할 레이아웃과 디자인, 달성현황을 보기좋게 할 데이터 시각화 - 디자인 (bulma || bootstrap || materialcss). 시각화 (react-via)

<br>

## 원할한 협업을 위한 방안 2 가지

1.  최대한 오프라인(?)으로 많이 만나기, 탄력적으로 개발시간을 갖기 (default 10:30 ~ 6:00) - 이후에는 개발현황에 따른 after develop
2.  carbon.js 를 통해 코드를 주고 받으면서 보기 - (코드를 알아보기 쉽게 주석달아서), 시간이 있으면 react & react-router 문서 한번 보고 오기

<br>

## 권한 설정

---

```
{
 “users”: [
   {
     “id”: 1,
     “username”: “member1",
     “admin”: true,
     “companyId”: 1
   },
   {
     “id”: 2,
     “username”: “member2”,
     “companyId”: 2
   }
 ],
 “companies” : [
   {  
     id: 1,
     “name”:“fastcampus”
   },
   {
     id:2,
     “name”:“kakao”
   }
   ],
 “projects”: [
   {
     “id”: 1,
     “title”: “Project 1”,
     “body”:“hahah”,
     “companyId”:1
   },
   {
     “id”: 2,
     “title”: “Project 2”
   }
 ],
 “assignees”: [
   {
     “id”: 1,
     “userId”: 1,
     “projectId”: 1,
     “companyId”: 1
   },
   {
     “id”: 2,
     “userId”: 1,
     “projectId”: 2
   },
   {
     “id”: 3,
     “userId”: 2,
     “projectId”: 1
   },
   {
     “id”: 4,
     “userId”: 2,
     “projectId”: 2
   }
 ],
 “tasks” : [
   {
     “id”: 1,
     “projectId”: 1,
     “userId”: 1,
     “todoTitle”: “db 설계“,
     “description”: “db.json을 설계하였습니다.“,
     “date”: “”,
     “complete”: true
   }
 ]
}
```

## 세부기능

---

회원가입, 로그인, (프로젝트 등록, 삭제, 수정), (프로젝트 세부업무 등록, 삭제, 수정, 완료),
달성 현황 계산, 디자인...
