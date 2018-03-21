# Git

## Git이란?
---
대표적인 버전관리시스템(VCS)입니다.
시간에 따른 코드의 변화를 체계적으로 관리해주는 소프트웨어로
소스코드가 <strong>언제, 어떻게, 누가, 왜</strong> 바꾸었는지 정보를 관리합니다.
커맨드라인을 사용하거나 Sourcetree와 같은 GUI 프로그램을 통해 사용할 수도 있습니다.
<br/>
<br/>

## Git의 장점
---
* 시간에 흐름에 따른 작업 내역을 확인할 수 있습니다.
* 이전 버전으로 쉽게 돌아갈수 있습니다. (시스템 복원같은 개념)
* 다른 사람들에게 영향을 미치지 않고 코드를 변경해볼 수 있습니다. (branch)
* 소스코드의 특정 부분을 누가 언제 변경했는지 쉽게 확인할 수 있습니다.
* 실수로 파일을 삭제하더라도 쉽게 복구할 수 있습니다.
<br/>
<br/>

## Git 초기 설정
---
    * git config --global user.name "사용자 이름"
    * git config --global user.email "이메일-가급적 Github 계정이메일 사용"

<br/>

## Git 저장소 (Repository)
---
* Git에 의해 관리되는 디렉토리(폴더)
* git init이라는 명령어를 통해 특정 디렉토리를 Git 저장소로 만들수 있습니다.<br/>
  (한번 저장소로 만든 폴더에 중복으로 git init을 선언하면 안됩니다.)
* 선언후에 ls -al로 확인하면 .git 디렉토리가 하위에 생성된 것을 볼 수 있습니다.
* 저장소의 현재 상태를 확인할 때에는 <strong>git status</strong>라는 명령어를 사용합니다.

## Git에서 관리하는 영역
---
![gitarea](https://github.com/fds9/fds-introduction/raw/master/images/git-scheme.png)
<br/><br/>

* 작업 디렉토리 (Working directory)
    - 현재 편집중인 파일이 저장되는 영역 (편집한 문서를 단순저장했을 때)<br/><br/>
* 스테이징 영역 (Staging area)
    - 저장소에 저장할 변경 사항을 보관하는 임시 저장소 (git add가 적용됬을 때)<br/><br/>
* .git 디렉토리 (Repository)
    - 모든 작업 내역이 영구히 저장되는 저장소<br/><br/>


## 작업의 흐름
---
1. 소스코드를 작성/편집 한 후<br/><br/>
2. git add <경로> || .(폴더내에 작성/편집된 모든 파일을 의미)
    - 작업 디렉토리의 특정 변경 사항을 스테이징 영역에 등록<br/><br/>
3. git commit -m "메모"
    - 스테이징 영역에 올라온 변경 사항을 영구히 보관
      메모를 통해 변경된 사항 및 변경 이유등을 공유할 수 있습니다.
      git log를 통해 커밋 히스토리 확인 가능<br/><br/>
4. 제품이 완성될 때까지 반복<br/><br/><br/>

## 여기서 Commit이란?
---
Commit은 떄에 따라 두가지 의미를 갖습니다.<br/>
1. 스테이징 영역에 올라온 변경사항을 영구히 보관하는 행위<br/>
2. 여러 파일에 대한 변경 사항을 하나로 묶어주는 단위<br/>
Commit을 통해 실제로 저장되는 정보는 변경 사항이지, 파일이 아닙니다.<br/><br/>

## Github
---
* 클라우드 형태의 Git 저장소를 제공하는 장소
* 웹브라우저를 통해 Git 저장소를 관리할 수 있습니다.
* Git에는 내장되어 있지 않은 다양한 편의 기능 제공<br/><br/>

## Github 초기설정
---
* ssh-keygen 명령 실행
* ~./ssh.id_rsa.pub 내용 복사
* Github 설정에서 SSH Key 등록<br/><br/>

## Git 원격 저장소 (Remote Repo)
---
* Git 저장소에 다른 Git 저장소의 주소를 등록하고, 이 저장소와 정보를 주고받을 수 있습니다.
* 파일 업로드/다운로드와 유사하나, Git 저장소끼리 주고받는 정보는 파일이 아니라 Commit입니다.<br/><br/>

## Git Push
---
* Github 저장소 생성
* git remote add origin <Github 저장소 주소>
* git push -u origin master<br/>
  (컴퓨터내 Git 저장소 => Github)<br/>
  (다음 번 부터는 git push만 입력해도 잘 푸쉬됩니다.)<br/><br/>

## Git Pull
---
* Github에서 파일 편집(커밋 생성)
* Git pull (Github => 컴퓨터내 Git 저장소)<br/><br/>

## Etc Function
---
* Git
    - 브랜치 (branch, checkout, merge, rebase)
    - 되돌리기 & 임시 저장 (reset, revert, stash)<br/><br/>
* Github
    - Pull Request & Issue & Project<br/><br/>

## 잠시 설명
---
* 브랜치(branch) : 코드를 통째로 복사하고 나서 원래 코드와는 상관없이 독립적으로 코드를 개발할 수 있는데 이렇게 독립적으로 코드를 개발하는 것을 브랜치라고 합니다.
* 체크아웃(checkout) : 내가 사용할 브랜치를 지정하는 것을 의미합니다.    
* 머지(merge) : 머지는 각 분기된 커밋을 하나로 다시 합치고 싶을 때 사용하는 명령어 입니다.
* 리베이스(rebase) : 브랜치의 변경사항을 순서대로 다른 브랜치에 적용하여 머지하는 것을 의미합니다.
* 리셋(reset) & 리버트(revert) : 리셋은 이력을 그 당시로 돌리는 것을 의미하고, 리버트는 이전 이력은 그대로 두고, 그 되돌릴 커밋의 코드만 원복시키는 것입니다.<br/>
  이해잘되는 만화 : (http://www.devpools.kr/2017/01/31/%EA%B0%9C%EB%B0%9C%EB%B0%94%EB%B3%B4%EB%93%A4-1%ED%99%94-git-back-to-the-future/)                   
* 스태쉬(stash) : Git에서 사용하는 임시저장 명령으로 git의 다른 branch를 체크아웃받을 때 작업하던 것을 stash를 이용해 임시 저장합니다.

```
추후에 업데이트 하겠습니다!
```

> 자료 출처 : https://github.com/fds9/fds-introduction/blob/master/git.md