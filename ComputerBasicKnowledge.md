# 1. Today I Learned

## 컴퓨터의 역사
---
* 전기-기계식 컴퓨터
    - 릴레이를 이용하였습니다.<br/><br/>
    ![릴레이](https://github.com/fds9/fds-introduction/raw/master/images/relay.jpg)<br/><br/>
    릴레이란? 쉽게 생각하면 On, Off가 있는 일종의 스위치입니다.<br/>
    별도로 분리되어 흐르는 전기를 스위칭할 수 있는 신호 또는 펄스를 만들어 자동으로 On, Off할수 있게 해줍니다.<br/>
    전원을 공급받아 릴레이 내부에 전자석이 자석이 되어 옆에 있는 철편을 끌어당겨 스위치가 On이 되는 원리입니다.<br/>
    다음사진은 릴레이를 사용한 컴퓨터입니다.<br/><br/>
    <img src="https://github.com/fds9/fds-introduction/raw/master/images/z1.jpg" width="500" height="400" alt="릴레이컴퓨터" /><br/><br/>


* 전자식 컴퓨터
    - 진공관<br/><br/>
    <img src="https://github.com/fds9/fds-introduction/raw/master/images/vacuum.jpg"><br/><br/>
    공기가 없는 유리관안에 열전자로 하나의 전극을 만들어 직류의 흐름을 형성하는 것입니다.<br/>
    진공관은 정류하는 의미보다 각종 가전제품의 증폭장치로 사용되어왔으나 다이오드나 트랜지스터의 등장으로
    쓰임새가 좁아지게 되었습니다.<br/>
    진공관을 사용한 컴퓨터로는 1세대 컴퓨터인 애니악이 있습니다.<br/><br/>
    <img src="http://cfile8.uf.tistory.com/image/2430F33D521424A71284DB"><br/><br/>
    - 트랜지스터<br/><br/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Transistors-white.jpg/350px-Transistors-white.jpg"><br/><br/>
    증폭 작용과 스위칭 역할을 하는 반도체 소자입니다.<br/>
    크게 접합형 트랜지스터와 전계효과 트랜지스터로 구분이 되며, 입력단,공통단 그리고 출력단으로 구성되어 있습니다.<br/>
    입력단과 공통단 사이에 전압또는 전류를 인가하면 공통단과 출력단 사이의 전기전도도가 증가하게 되고 이를 통해 전류흐름을 제어하는 원리입니다.<br/><br/>
    <img src="https://github.com/fds9/fds-introduction/raw/master/images/etl.jpg" width="500" height="400" alt="트랜지스터컴퓨터" /><br/><br/>
    기판안에 촘촘히 트랜지스터가 박혀있고, 트랜지스터가 진공관의 역할을 훨씬 수행하기 좋기에 애니악에 비해 많이 발전되었다고 볼 수 있습니다.<br/><br/>
    - 집적 회로<br/><br/>
    <img src="https://github.com/fds9/fds-introduction/raw/master/images/eprom.jpg"><br/><br/>
    칩안에 수천만개의 트랜지스터가 박혀서 빠른 연산처리를 합니다.<br/>
    작동원리는 과거의 컴퓨터와 같으나 속도가 매우 빠르고 경량화가 되었습니다.<br/>
    최근에 나오는 컴퓨터,모바일들 모두 집적회로를 사용하고 있습니다.<br/><br/>
    <img src="https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/l9p/image/sLvqWQ5MqztfI3Iyw-TQY3-TAwI" width="500" height="400"><br/><br/>

```
과거에서 현재로 오면서 과학기술의 발전에 따라 프로그래밍의 방법 또한 바뀌어왔고,
생산성과 편의성 또한 많이 높아졌다고 볼 수 있습니다.
```

## 컴퓨터의 정보 표현
---
### 숫자 (Number)

* 이진법
    - 컴퓨터에서 자연수, 정수를 표현할 때 이진법으로 계산을 합니다. 0,1이라는 숫자만을 이용하여 다양한 정보를 표현해 냅니다.<br/>
      사람이 쓰는 10진수에 비해 0,1이라는 숫자만을 사용하기에 빠른 연산처리가 가능합니다.<br/><br/>
* 십진법
    - 10을 기수로 한 기수법입니다. 자리수로 0,1,2,3,4,5,6,7,8,9를 씁니다.<br/><br/>
* 십육진법
    - 16을 밑으로 하는 기수법입니다. 0`~`9까지의 수와 A`~`F까지의 로마 문자를 사용하고, 대소문자를 구별하지 않습니다.<br/><br/>
    <img src="http://ehpub.co.kr/wp-content/uploads/2016/06/3-5.png">

### 문자 (String)

* 아스키코드 (ASCII)
    - 미국정보교환표준부호라는 뜻을 가진 아스키는 영문 알파벳을 사용하는 대표적인 문자 인코딩입니다.<br/><br/>
* 유니코드 (Unicode)
    - 전 세계의 모든 문자를 컴퓨터에서 일관되게 표현하고 다룰 수 있도록 설계된 산업 표준입니다.<br/><br/>
> 추후에 추가 공부시 업데이트할 예정입니다.


<br/><br/>
### 컴퓨터의 구조
---
<img src="https://github.com/fds9/fds-introduction/raw/master/images/architecture.gif" width="500" height="400" /><br/><br/>
* CPU : 컴퓨터 시스템 전체를 제어하는 장치로 실질적인 계산을 담당하며, 기계어로 작성된 프로그램을 실행시킬수 있습니다.<br/> 컴퓨터의 두뇌라고 불립니다.<br/><br/>
    - CPU의 코어란? CPU에는 프로그램 실행을 위한 처리 장치, 즉 코어(Core)가 내장되어 있습니다.<br/>코어는 여러 개 내장되어 있을 수 있는데 이런 CPU를 멀티 코어라고 합니다.<br/>코어의 갯수가 많을수록 동시에 실행할 수 있는 프로그램이 늘어나므로 성능 향상에 도움이 됩니다.<br/><br/>
    - CPU의 비트란? CPU가 한 번에 연산할 수 있는 데이터의 크기로 비트 수가 늘어나면 프로그램을 실행하는 데 필요한 연산 횟수를 줄일 수 있으므로, 성능 향상에 도움이 됩니다.<br/> 최근 컴퓨터와 스마트폰은 대개 64비트 CPU를 탑재하고 있습니다.<br/><br/>
* Main Memory : 실행 중인 프로그램 및 그 프로그램이 필요로 하는 데이터가 저장되는 주기억 장치입니다.<br/> 
                보통 RAM(Random Access Memory)이 사용되며, 빠르다는 장점이 있지만, 비싸며 용량이 작고 휘발성이라는 단점이 있습니다.<br/><br/>
* Secondary Memory : 실행 중인 프로그램 및 데이터가 저장되는 기억 장치로, 보통 HDD나 SSD가 사용됩니다.<br/> 느리다는 단점이 있지만, 저렴하고 용량이 크며 비휘발성이라는 장점이 있습니다.<br/><br/>
* GPU : 화면을 그리기 위한 수치 연산에 특화된 연산 장치로 CPU에 내장되기도 하고, 별도의 그래픽 카드로 사용되기도 합니다.<br/> 최근 출시되는 고성능 GPU의 코어는 수천개까지 되며, 빠른 수치연산이 필요한 머신러닝과 코인채굴에 활용되고 있습니다.<br/><br/>
* Input Device : 사용자가 원하는 문자, 기호, 숫자등의 데이터를 컴퓨터의 기억 장치에 전달하는 장치입니다.<br/> 대표적인 것으로 키보드와 마우스등이 있습니다.<br/><br/>
* Output Device : 사용자가 읽을 수 있는 빛, 소리, 인쇄등의 방식으로 컴퓨터의 결과물을 출력하는 장치입니다.<br/> 대표적인 것으로 프린터와 스피커등이 있습니다.<br/><br/>

## 운영체제(OS)
---
* 하드웨어를 관리하는 프로그램입니다.
* 여러 프로그램이 한정된 자원(CPU, 메모리, 입출력 장치)을 공유하는 데 문제가 없도록 중재합니다. 
* 다른 프로그램이 컴퓨터 자원을 사용할 수 있도록 API를 제공합니다.<br/><br/>
```
왜 윈도우용 프로그램은 맥에서 호환이 안될까?
서로 다른 운영체제 API로 인해 API를 제공받지 못해 자원도 사용못하고,
실행파일 형식마저 달라서 실행이 안된다.
* PE 포맷 (Window)
* Mach-Q (mac)
* ELE (linux)
```
<br/><br/>

# 2. Today I Found Out
```
컴퓨터에 대해 전반적으로 알아보는 수업을 들으면서 비전공자라서 더더욱 좋다고 느꼈습니다. 
컴퓨터의 역사를 알아보면서 과학의 발전을 실감할 수 있었고,
그냥 사용하던 컴퓨터가 어떻게 동작하고, 어떤 장치가 무슨 역할을 하는지 알게 되니
좀 더 멋져보이는 것 같습니다~!
앞으로도 틈틈히 시간이 난다면 관련된 지식을 찾아 공부하고,
더욱 컴퓨터와 친해질수 있도록 노력하겠습니다.
```






