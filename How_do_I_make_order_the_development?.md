# Today I Learned (2018.06.20)

## 이번 프로젝트에는 어떻게 접근해야할까?

규모가 작은 프로젝트는 해왔지만 이제 규모가 조금은 큰 프로젝트를 해야하는데 어떤 방법이 좋을까?

---

<b style="color:salmon">(기획 - 데이터) => Presentation Component => Provider state => Container Component</b>

하나 다하고 하나 하기보다 위처럼 작게작게 사이클을 돌리면서 개발을 해야한다.

예를 들어 게시판이라고 하면

| 로그인                 | 글 목록                | 글 작성                | 댓글목록...            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| 데이터 설계            | 데이터 설계            | 데이터 설계            | 데이터 설계            |
| Presentation Component | Presentation Component | Presentation Component | Presentation Component |
| Provider state         | Provider state         | Provider state         | Provider state         |
| Container Component    | Container Component    | Container Component    | Container Component    |

가로 순으로 데이터 설계를 마치고 PC 를 하고 Provider 를 하고 하면 <b style="font-size:2em; color:red">망.한.다.</b><br>
로그인 기능을 만들고 느낀 것을 가지고 좀 더 효율적으로 글 목록 기능을 만들고,<br>
배운 것을 가지고 더 좋은 글 작성 기능을 만들고 하는 식의 핵심적인 기능단위로 접근해야한다.<br>

기능을 다 구현하고 스타일 다듬기(CSS)는 마지막으로 하도록 하자<br>
