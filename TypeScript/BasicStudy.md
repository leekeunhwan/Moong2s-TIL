[ 타입스크립트 기초 ]

타입스크립트는 프로그래밍 언어, compiled language이다.<br>
전통적인 Compiled Language와는 다른 점이 많다.<br>
(전통적인 컴파일 언어처럼 컴파일->링킹->바이너리->아키텍쳐와 OS에 맞게 돌아가는 것과 다름)<br>
그래서 Transpile이라는 용어를 사용하기도 한다. (바벨처럼)<br>
이런 프로그래밍을 메타프로그래밍이라고도 한다.<br>
(어떤 프로그래밍언어로 기술하면 다른 언어로 변환되서 프로세스를 진행하는 것)<br>

자바스크립트는 Interpretered Language이다.<br>
(컴파일러를 거쳐서 기계어로 변환되지 않고, 바로 실행되는 프로그래밍 언어이다.<br>
인터프리터는 컴파일러를 거쳐서 기계어로 변환되진 않지만, 실행시마다 소스 코드를 한줄씩<br>
기계어로 번역하는 방식이기에 실행속도는 컴파일 언어보다 느리다.<br>
이를 위해 바이트코드 컴파일러를 이용해 소스 코드를 가상머신 타겟의 바이트코드로 변환하거나<br>
반복적으로 쓰이는 함수와 클래스 등의 기계어 코드를 캐싱하는 JIT 컴파일러를 인터프리터에<br>
내장하는 방식이 도입되었다.)<br>

---

컴파일 vs 인터프리터<br>

컴파일은 컴파일이 필요한데, 인터프리터는 컴파일이 필요 없다.<br>
컴파일은 컴파일러가 필요한데, 인터프리터는 컴파일러가 필요업다.<br>
컴파일은 컴파일하는 시점(컴파일 타임)이 있는데, 인터프리터는 컴파일하는 시점이 없다.<br>
컴파일은 컴파일된 결과물(바이너리)을 실행하는데, 인터프리터는 코드 자체를 실행한다.<br>
컴파일은 컴파일된 결과물을 실행하는 시점을 런타임이라고 하며,<br>
인터프리터는 코드를 실행하는 시점을 런타임이라고 한다.<br>

---

정적타입 언어 vs 동적타입 언어<br>

TDD 커버리지를 높게 가져가면 사실 정적타입 언어를 쓰지 않아도 개발을 원할히 할 수 있다.<br>
하지만, 커버리지를 높게 가져가기가 쉽지 않기 때문에 타입 체킹을 통해서,<br>
미리미리 대응을 하기 위해 정적타입 언어를 사용한다.<br>

---

Tranditional Compiled Language (전통적인 컴파일 언어)<br>

컴파일 언어라고 한다.<br>
C, C++, Go, C#, Java...<br>
프로그래머가 작성한 Source Code를 기계어로 변환하는 과정을 컴파일이라 한다.<br>
기계어로 변환된 결과물을 Object Code(목적 코드)라고 한다.<br>
컴파일 하는 프로그램을 컴파일러라고 한다.<br>
컴파일 하는 동안을 컴파일 타임이라고 한다.<br>
컴파일된 코드는 프로세서에 따라 다르다.<br>
소스 코드에서는 OS에 따라 라이브러리가 다르다.<br>
컴파일된 코드는 작은 크기에 최적화 된다.<br>
컴파일된 코드들은 Linking이라는 과정을 통해 실행 파일로 만들어 진다.<br>

- 컴파일된 여러 목적 코드들을 합치고 라이브러리를 추가한다.<br>
- Linking하는 프로그램을 Linker라고 한다.<br>
- 컴파일이라는 말을 링킹까지 포함하여 말하기도 한다.<br>
  컴파일된 코드는 프로세서에 의존적이다.<br>
  컴파일된 코드는 작은 크기에 최적화된다.<br>
  일반적으로 실행시 기계어로 바꾸는 방식(인터프리터)보다 빠르다.<br>
- 실행시 기계어로 바꿔주는 연산이 필요없기 때문이다.<br>

---

IDE : 통합 개발 환경<br>

Intergrated Development Environement<br>

코딩, 디버그, 컴파일, 배포 등 프로그램 개발에 관련된 모든 작업을 하나의 프로그램 안에서<br>
처리하는 환경을 제공하는 소프트웨어<br>

Visual Studio<br>
Visual Studio Code - (타입스크립트로 만들어졌기 때문에 타입스크립트에 대한 지원이 강력)<br>
Intellij IDEA / WebStorm - (특별한 플러그인 설치가 필요없음)<br>

---

`./node_modules/.bin/` 여기서 tsc, tslint등 사용하면 된다.<br>

---

타입스크립트 compiler options 최상위 프로퍼티<br>

- compileOnSave
- extends
- compileOptions
- files
- include
- exclude
- typeAcquisition (Definition 파일 만들때 사용)

---

files, includes, exclude 설정이 없으면 전부다 컴파일함<br>

includes, exclude는 glob 패턴 (마치 .gitignore)<br>

include<br>

- exclude 보다 약하다.
- `*` 같은걸 사용하면, .ts/.tsx/.d.ts만 include (allowJS)

<br>

exclude<br>

- 설정 안하면 4가지 (node_modules, bower_components, jspm_packages, <outDir>)를 default로 제외한다.
- <outDir>은 항상 제외한다. (include에 있어도)

---

@typesmodule<br>

- TypeScript 2.0부터 사용 가능해진 내장 type definition 시스템
- 아무 설정을 안하면? - node_modules/@types 라는 모든 경로를 찾아서 사용
- typeRoots를 사용하면? - 배열 안에 들어있는 경로들 아래서만 가져온다.
- types를 사용하면? - 배열 안의 모듈 혹은 ./node_modules/@types/안의 모듈이름에서 찾아온다. - [] 빈 배열을 넣는다는 건 이 시스템을 이용하지 않겠다는 것이다.
- typeRoots와 types를 같이 사용하지 않다.

---

target과 lib<br>

target<br>

- 빌드의 결과물을 어떤 버젼으로 할 것이냐
- 지정을 안하면 es3이다.

<br>

lib<br>

- 기본 type definition 라이브러리를 어떤 것을 사용할 것이냐
- lib를 지정하지 않을 때 - target이 es3이고, 디폴트로 lib.d.ts를 사용한다.
- target이 es5이면, 디폴트로 dom, es5, scripthost를 사용한다.
- target이 es6이면, 디폴트로 dom, es6, dom.iterable, scripthost를 사용한다.
- lib를 지정하면, 그 lib 배열로만 라이브러리를 사용한다. - 빈 [] => 'no definition found ...'

---

module<br>

- 컴파일 된 모듈의 결과물을 어떤 모듈 시스템으로 할지를 결정
- target이 es6이면 es6이 디폴트이고,
- target이 es6이 아니면, commonjs가 디폴트이다.
- AMD와 System와 사용하려면, outFile이 지정되어야 한다.
- ES6이나 ES2015를 사용하려면, target이 es5이하여야 한다.

moduleResolution<br>

- ts 소스에서 모듈을 사용하는 방식을 지정해야 한다.
- Classic 아니면 Node이다.
- CommonJs 일때만 Node라고 생각하면 된다.

paths와 baseUrl<br>

- 상대경로 방식이 아닌 baseUrl로 꼭지점과 path의 키/밸류로 모듈을 가져가는 방식이다.

rootDirs<br>

- 배열 안에서 상대 경로를 찾는 방식이다.

---

TypeScript Basic Type<br>

타입스크립트에서 프로그램 작성을 위해 기본 제공하는 데이터 타입<br>
사용자가 만든 타입은 결국은 이 기본 자료형들로 쪼개진다.<br>
JavaScript 기본 자료을 포함 (superset)<br>

- ECMAScript 표준에 따른 기본 자료형은 6가지 - Boolean - Number - String - Null - Undefined - Symbol - Array: object 형

- 프로그래밍을 도울 몇가지 타입이 더 제공된다. - Any - Void - Never - Enum - Tuple: object

---

원시값 (Primitive Type)<br>

오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형입니다.<br>
프리미티브 형의 내장 함수를 사용 가능한 것은 자바스크립트 처리 방식 덕분<br>

```js
let name = "hoho";

// 순간 원시값인 문자열이 내장함수를 쓸경우에
// 순간적으로 객체로 바꿔서 처리하고 원시값으로 바꿔놓는 처리방식
name.toString();
```

---

리터럴<br>

값자체가 변하지 않는 값을 의미합니다.<br>
상수와 다른 것은 상수가 가리키는 포인터가 고정이라는 것이고, 리터럴은 그 자체가 값이자 그릇이다.<br>

```js
35; // number 리터럴
'gogo'; // string 리터럴
true; // boolean 리터럴

// object 리터럴
{
	name:'hoho',
	age: 35
}
```

---

Boolean / boolean (가급적 소문자를 쓴다.)<br>

가장 기본적인 데이터 타입<br>
단순한 true 혹은 false 값이다.<br>
Javascript / Typescript에서 boolean이라고 부른다.<br>

```js
let isDone: boolean = false;
typeof isDone === "boolean"; // true

// 대문자 소문자 상관없음
let isOk: Boolean = true;

// 단, 좌측은 원시 레벨인데 우측은 래퍼오브젝트 레벨인 경우에는
// 가능하지 않는다. 둘다 동일한 레벨이여야 한다.
let isOk: boolean = new Boolean(true);
```

Number / number<br>
String / string도 마찬가지<br>
undefined와 null은 소문자만 존재한다.<br>

---

undefined & null are substypes fo all other types.<br>

기본 설정이 그렇다.<br>
number에 null 또는 undefined를 할당할 수 있다는 의미,<br>
하지만 컴파일 옵션에서 '--strictNullChecks' 사용하면, null과 undefined는<br>
void(return이 없는 경)나 자기 자신들에게만 할당할 수 있다.<br>

- 이 경우 null과 undefined를 할당할 수 있게 하려면, union type(|)을 이용해야 한다.

---

null in javascript<br>

null이라는 값으로 할당된 것을 null이라고 한다.<br>
무언가가 있는데, 사용할 준비가 덜 된 상태<br>
null이라는 타입은 null이라는 값만 가질 수 있다.<br>
런타임에서 typeof 연산자를 이용하여 알아내면 object이다.<br>

---

undefined in javascript<br>

값을 할당하지 않은 변수는 undefined라는 값을 가진다.<br>
무언가가 아예 준비가 안된 상태<br>
object의 property가 없을 때도 undefined이다.<br>
런타임에서는 typeof 연산자를 이용해서 알아내면, undefined이다.<br>

---

void<br>

타입이 없는 상태<br>
any와는 반대의 의미를 가지고 있다.<br>
void는 소문자만 있다.<br>
주로 함수의 리턴이 없을 때 사용한다.<br>

---

any<br>

어떤 타입이어도 상관이 없는 타입<br>
최대한 이걸 쓰지 않는게 핵심 (컴파일 타임에 타입 체킹이 안되는거니까..)<br>
그래서 컴파일 옵션중에 any를 쓰면 오류를 뱉도록 하는 옵션도 있음<br>

- nolmplicitAny

---

Never<br>

리턴에 주로 사용된다.<br>
예외 처리, 무한루프 방지정도로 사용됨<br>

---

Array (얘는 대문)<br>

원래 자바스크립트에서 array는 객체이다.<br>
사용방법<br>

- Array<타입>
- 타입[]

```ts
const list: string[] = ['a','b','c'];

// 혹은

const list: Array<String> = ['a', 'b', 'c'];

// 혹은 인터페이스를 이용하여

interface Person {
    name: string;
    age: number;
}

Person[], Array<Person>

// 이렇게 하면 객체(name:string, age:number)가 들어갈 수 있는 배열 탄생
```

---

interface<br>

사용자 정의 타입을 만들수 있도로 해주는 것<br>

```ts
interface Person {
  name: string;
  age: number;
}

const p: Person = {
  name: "hoho",
  age: 36
};
```

---

tuple<br>

배열인데 타입이 한가지가 아닌 경우<br>
마찬가지로 객체,<br>
꺼내 사용할 때 주의가 필요하다.<br>

```ts
let x: [string, number];

x = ["hello", 10]; // ok

x = [10, "hello"]; // Error

x[3] = "world"; // ok, because 'string' can be assigned to 'string | number'

console.log(x[5].toString()); // ok, 'string' and 'number' both have toString();

x[6] = true; // Error, because 'boolean' isn't 'string | number'
```

---

Enum<br>

C에서 보던 것과 같다.<br>
특정한 값을 명하지않으면, 0부터 시작해서 1씩 증가하는 형태로 할당된다.<br>

```ts
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green,
  Blue
}
let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}
let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green,
  Blue
}
let colorName: string = Color[2]; // 이름을 뱉을때는 string으로 지정해야한다.
```

리버스 매핑 지원 안함<br>

```ts
enum Enum {
  A
}
let a = Enum.A; // 키로 값을 획득 하기
let keyName = Enum[a]; // 값으로 키를 획득 하기
```

컴파일 타임에 평가할 수 없는 표현식으로 값을 할당할 수도 없음<br>

```ts
const green = 30;

const enum Color {
  RED = 10,
  BLUE = RED * 2,
  GREEN = green // ERROR: [ts] In 'const' enum declarations member initializer must be constant expression.
}
```

---

Symbol<br>

ES6의 Symbol이다.<br>
프리미티브 타입의 값을 담아서 사용한다.<br>
고유하고 수정불가능한 값으로 만들어준다.<br>
그래서 주로 접근을 제어하는데 쓰는 경우가 많다.<br>

```ts
let sym = Symbol();

let obj = {
  [sym]: "value"
};

console.log(obj[sym]); // 'value'
```

---

let과 const의 타입 추론<br>

```ts
let a: string = "에이";
let b = "비이";

const c: string = "씨이";
const d = "디";
```

a는 명시적으로 지정된 타입인 string<br>
b는 타입추론에 의한 타입인 string<br>
c는 명시적으로 지정된 타입인 string<br>
d는 타입추에 의한 타입인 리터럴타입 '디이'<br>

(const는 할당하는 순간 타입이 강제되며, 또한 값을 바꿀수 없기 때문에 리터럴 타입이라고 한다.)<br>

가급적 const 쓰자, let은 정말 값이 바뀌어야 할 때만...<br>

---

타입 어설션 (Type Assertions)<br>

형변환과는 다르다.<br>

- 형변환은 실제 데이터 구조를 바꾼다.

'타입이 이것이다.'라고 컴파일러에게 알려주는 것을 의미한다.<br>

- 그래서 행동에 대해서 작성자가 100% 신뢰하는 것이 중요

문법적으로 두가지 방법이 있다.<br>

- 변수 as 강제할타입 (가급적 이게 좋다.)
- <강제할타입> 변수

```ts
let something: any = "this is magic";
let strLength: number = (<string>something).length;
let strLength: number = (something as string).length;

// 주로 넓은 타입에서 좁은 타입으로 강제하는 경우가 많다.
// jsx에서는 as를 쓴다.
```

---

타입 별칭 (Type Alias)<br>

인터페이스와 비슷하다.<br>
Primitive, Union, Tuple<br>
기타 직접 작성해야하는 타입을 다른 이름으로 지정할 수 있다.<br>
만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것은 아니다.<br>

`Aliasing Primitive`

```ts
type MyStringType = string;

const str = "world";

let myStr: MyStringType = "hello";
myStr = str;

// 큰 의미 없음
```

`Aliasing Union Type`

```ts
let person: string | number = 0;
person = "hoho"; // ok, because it is 'string | number'

type StringOrNumber = string | number;

let another: StringOrNumber = 0;
another = "Anna";

// 유니온 타입은 A도 가능하고, B도 가능한 타입
// 길게 쓰는 걸 짧게
```

`Aliasing Tuple`

```ts
let person: [string, number] = ["hoho", 35];
type PersonTuple = [string, number];

let another: PersonTuple = ["gogo", 24];

// 튜플 타입에 별칭을 줘서 여러군데서 사용할 수 있게 한다.
```

---

interface와 type alias와의 차이점<br>

```ts
type Alias = { num: number };

interface Interface {
  num: number;
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

// 타입스크립트가 컴파일시 무언가가 잘못되었다고 알려주기되면
// tpye alias는 object literal type으로
// interface는 interface로 알려준다.
```

```ts
type PersonAlias = {
  name: string;
  age: number;
};

interface IPerson extends PersonAlias {}

let ip: IPerson = {
  name: "hoho",
  age: 35
};

class PersonImpl implements PersonAlias {
  name: string;
  age: number;

  hello() {
    console.log("hi");
  }
}

let pi: PersonImpl = new PersonImpl();
pi.hello();

class PersonChild extends PersonAlias {}

// 당연한건 type alias 끼리는 extends, implements 불가
// interface extends type alias 가능
// class implements type alias 가능
// class extends type alias 불가 (interface도 마찬가지)
// 마치 interface처럼 동작한다.
```

---

Interface<br>

사용자 정의 타입을 만들수 있도로 해주는 것<br>

```ts
interface Person {
  name: string;
  age: number;
}

const p: Person = {
  name: "hoho",
  age: 36
};
```

Type Alias와 유사하다. 까지가 위에서 배운 내용<br>

---

Interface - optional property (1)<br>

```ts
interface Person {
  name: string;
  age: number;
  job?: string; // job이란 것은 있을 수도 있고, 없을수도 있다는 것임
}
```

---

Interface - optional property (2)<br>

```ts
// indexable type

// array case
interface Person2 {
  [index: number]: string;
}

const p2: Person2 = {};
p2[0] = "hi";
p2[100] = "hello";
// 이런식이 가능하다.

// dictionary case
interface Person {
  name: string;
  [index: string]: string; //
}

const person: Person = {
  name: "hoho"
};

person.anybody = "gogo";
// 이게 의미하는 것이 어떤거냐면
// person의 프로퍼티명으로 스트링 형태의 indexable type이 들어가면,
// .PROPERTY_NAME으로 들어올 수 있다는 내용

// indexable 타입은 Array, Dictionary 같은 느낌을 가지고 있다.
```

---

Interface - function in interface<br>

```ts
interface Person {
  name: string;
  age: number;
  hello(): void;
}

const p1: Person = {
  name: "hoho",
  age: 35,
  hello(): void {
    console.log("good");
    console.log(`안녕하세요! 저는 ${this.name}입니다.`);
  }
};
```

Interface 정의할때 class랑 차이를 주기위해 I를 붙여도 좋다.<br>

---

Interface - class implements interface<br>

```ts
interface IPerson {
  name: string;
  hello(): void;
}

class Person implements IPerson {
  name: string = "";
  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log("안녕하세요");
  }

  public hi(): void {
    console.log("hihi");
  }
}

// person에 Interface나 class를 타입으로 정할 수 있는데
// Interface를 하면 Interface에 정의된 것까지만 사용가능하다.
// public한 class 메소드도 사용 못함
const person: IPerson = new Person("hoho");
person.hello(); // '안녕하세요'
```

---

Interface - interface extends interface<br>

```ts
interface Person {
  name: string;
  age?: number;
}

interface Korean extends Person {
  city: string;
}

const k: Korean = {
  name: "hoho",
  city: "서울"
};

// 인터페이스간의 상속은 가능하다.
```

---

Interface - function interface

```ts
interface HelloPerson {
  (name: string, age?: number): void;
}

let helloPerson: HelloPerson = () => {};

// name이 없어서 에러가 나야되지만
// 여기서는 에러가 발생하지 않는다.

helloPerson(); // 여기서 에러가 발생한다. (실행하는 단계에서 에러가 난다.)
```

인터페이스는 컴파일 타임에 체크가 되기에, 런타임과는 상관이 없다.<br>
펑션은 위와 같은 경우가 있으니 사용할 때 주의가 필요하다.<br>

---

Indexable Type<br>

StringOrNumber<br>

```ts
interface StringArray {
  [index: number]: string;
}

const sa: StringArray = {}; // 옵셔널하다.
sa[100] = "백";

interface StringDictionary {
  [index: string]: string;
}

const sd: StringDictionary = {};
sd.hundred = "백";

interface StringArrayDictionary {
  // 이렇게 사용하면, 배열처럼 객체처럼 사용가능하다.
  [index: number]: string;
  [index: string]: string;
}

const sad: StringArrayDictionary = {};
// 당연히 옵셔널하다.
sad[100] = "백";
sad.hundred = "백";
```

---

string index = optional property<br>

```ts
interface StringDictionary {
	[index: string]: string;
	name: string;
}

const sd: StringDictionary = {
	name: '이름'; // 필수
}

sd.any = 'any'; // 어떤 프로퍼티도 가능

interface StringDictionaryNo {
	[index: string]: string;
	// name: number;
	// (x) 인덱서블 타입이 string 값을 가지기 때문에, number를 필수로 끌어오면 에러
}

```

---

class<br>

```ts
class Person {
  name: string;
  age: number;
}

const person: Person = new Person();
console.log(person); // Person {}
person.age = 35;
console.log(person.name); // undefined

// 생성자 함수가 없으면, 디폴트 생성자가 불린다.
// 클래스의 프로퍼티 혹은 멤버 변수가 정의되어 있지만, 값을 대입하지 않으면 undefined이다.
// => 오브젝트에 프로퍼티가 아예 존재하지 않는다.
// 접근 제어자 (Access Modifier)는 public이 디폴트이다.
```

---

class와 property<br>

```ts
class Person {
  name: string = "Moong2";
  age: number = 32;

  constructor() {
    console.log(this.name); // 'Moong2'
  }
}

const person: Person = new Person();
console.log(person); // Person {name: 'Moong2', age: 32}

// 1. 클래스의 프로퍼티를 선언과 동시에 값을 할당하는 방법도 있다.
// 2. 생성자가 불리기 전에 이미 프로퍼티 값이 저장되어 있음을 알 수 있다.
```

---

class와 프로퍼티의 접근 제어자 (1)<br>

```ts
class Person {
  public name: string;
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }
}

const person: Person = new Person(35);
person.name = "뭉이";
// person._age; (x)
console.log(person); // Person {name: "뭉이", _age: 35}

// 1. private로 설정된 프로퍼티는 dot으로 접근할 수 없다.
// 2. 클래스 내부에서는 private 프로퍼티를 사용할 수 있다.
// 3. private이 붙은 변수나 함수는 _를 이름앞에 붙이는데,
//	  이는 문법이 아니라 널리 쓰이는 코딩 컨벤션이다.
```

---

class와 프로퍼티의 접근 제어자 (2)<br>

```ts
class Parent {
  private privateProp: string;
  protected protectedProp: string;

  constructor() {}
}

class Child extends Parent {
  constructor() {
    super();
    this.protectedProp = "protected";
    this.privateProp = "private"; // (x)
  }
}

// 1. 부모에서 private으로 설정된 프로퍼티는 상속을 받은 자식에서도 접근할 수 없다.
// 2. 부모에서 protected 설정된 프로퍼티는 상속을 받은 자식에서 접근이 가능하다.
// 3. 상속을 받은 자식 클래스에서 부모 클래스에 this를 통해 접근하려면, 생성자에서 super();를 통해 초기화를 해야한다.
```

```ts
class Person {
  protected _name: string = "Moong2";
  private _age: number = 34;
}

class Child extends Person {
  constructor() {
    super();
    this._name = "아들";
  }
  getName() {
    console.log(this._name);
  }
}

const person: Child = new Child();
console.log(person);
```

---

클래스와 디폴트 생성자<br>

```ts
class Person {
  public name: string;
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }
}

const person: Person = new Person();

// 1. 디폴트 생성자는 프로그래머가 만든 생성자가 없을 때 사용할 수 있다.
// => 사용자가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
```

---

클래스와 메서드<br>

```ts
class Parent {
  constructor(protected _name: string, protected _age: number) {}

  print(): void {
    console.log(`이름은 ${this._name}이고, 나이는 ${this._age}살 입니다.`);
  }

  printName = (): void => {
    console.log(`이름은 ${this._name}입니다.`);
  };

  private printAge(): void {
    console.log(`나이는 ${this._age}살 입니다.`);
  }
}

class Child extends Parent {
  // 내려받은 _name 재정
  _name = "Moong2";
}

// const p:Child = new Child() // (x)
const p: Child = new Child("", 5);
p.print(); // 이름은 Moong2이고 나이는 5살입니다.

// 상속은 extends 키워드 이용한다.
// 자식은 클래스에서 디폴트 생성자는 부모의 생성자와 입력 형태가 같다.
```

---

클래스와 상속 (2)<br>

```ts
class Parent {
	constructor(protected _name: string, private _age: number) {}

	print = ()void => {
		console.log(`이름은 ${this._name}이고, 나이는 ${this._age}살 입니다.`)
	}

	protected printName = ():void => {
		console.log(`이름은 ${this._name}입니다.`)
	}

	protected printAge = ():void => {
		console.log(`나이는 ${this._age}입니다.`)
	}
}

class Child extends Parent {
	constructor(age: number) {
	 	super('Moong2', age);
	 	this.printName();
	 	this.printAge();
	}
}


const child:Child = new Child(1)
// 이름은 Moong2 Jr입니다.
// 나이는 1입니다.

// 1. 생성자를 정의하고, this를 사용하려면, super를 통해 부모의 생성자를 호출해줘야 한다.
// 2. super를 호출할때는 부모 생성자의 입력 타입이 같아야 한다.
// 3. super를 호출하는 것은 클래스 외부에서 호출하는 것과 같다.
// 4. protected 함수를 호출해서 그 안의 private를 출력하는 것에 주의한다.
```

---

클래스와 getter, setter<br>

```ts
class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = `${name}`;
  }
}

const person: Person = new Person("Moong2", 31);

console.log(person.name); // 'Moong2'
person.name = "hoho";
console.log(person.name); // 'hoho'
```

이렇게 쓰는데.. getName, setName이라고 명명해서 메소드를 관리해도 좋을 것 같다.

---

클래스와 static 프로퍼티 => 클래스 멤버 변수<br>

```ts
class Person {
  public static CITY = "";
  private static lastName: string = "Lee";
  // private에서 static을 붙이는건 가급적 쓰지 않도록 하는게 좋다.
  // const lastName:string = 'Lee'라고 하는 것과 다르지 않음..
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  public print() {
    console.log(`${this._name} ${Person.lastName} in ${Person.CITY}`);
  }
}

const person: Person = new Person("Moong2", 25);
Person.CITY = "Seoul"; // Public Static이라 Person.CIIY에서 직접 값을 바꿀 수 있다.
person.print();
```

---

클래스와 static 메서드 => 클래스 멤버 함수<br>

```ts
class Person {
  public static Talk(): void {
    console.log("안녕하세요");
  }
  // 사실 그냥 클래스 내부에 함수 선언해서 쓰는 것과 크게 차이점이 없다.
}

Person.Talk(); // 안녕하세요
```

---

모듈에서 private static 프로퍼티 혹은 메서드<br>

```ts
class Person {
  private static PROPERTY = "프라이빗 프로퍼티";
  private static METHOD() {
    console.log("프라이빗 메서");
  }

  constructor() {
    console.log(Person.PROPERTY);
    Person.METHOD();
  }
}

////////////////////////////////////////////////

const PROPERTY = "모듈 내 변수";
function METHOD() {
  console.log("모듈 내 함수");
}

export class Person {
  constructor() {
    console.log(PROPERTY);
    METHOD();
  }
}

// 사용처가 같아서 비교의 의미가 크게 없다고 하는데,
// 위의 코드가 더 좋은것 같다.
```

---

Abstract Class<br>

```ts
abstract class APerson {
  protected _name: string = "Moong2";
  abstract setName(name: string): void;
}

class Person extends APerson {
  setName(name: string): void {
    this._name = name;
  }
}

const person = new Person();
console.log(person);

// 1. abstract 키워드가 사용된 클래스는 new로 생성할 수 없다.
// 2. abstract 키워드가 사용된 클래스를 상속하면, abstract 키워드가 붙은 함수를 구현해야 한다.
```

---

class와 private contsructor<br>

```ts
class Preference {
  private contructor() {}
}

// const p:Preference = new Preference(); // (X);

// 1. 생성자 함수 앞에 접근제어인 private를 붙일 수 없다.
// 2. 외부에서 생성이 불가능하다.
```

---

class와 싱글톤 패턴<br>

```ts
class Preference {
  public static getInstance() {
    if (Preference.instance === null) {
      Preference.instance = new Preference();
    }
    return Preference.instance;
  }

  private static instance: Preference = null;
  private constructor() {}
}

const p: Preference = Preference.getInstance();
console.log(p);

// 1. private 생성자를 이용해서 내부에서만 인스턴스 생성이 가능하도록 함.
// 2. public static 메서드를 통해 private static 인스턴스 레퍼런스를 획득한다.
// 3. Lazy Loading (Initialization) : 최초 실행시가 아니라, 사용시에 할당을 함.
```

```ts
class Person {
  private static instance: Person = null;
  public static getInstance(): Person {
    if (Person.instance === null) {
      Person.instance = new Person();
    }
    return Person.instance;
  }

  private constructor() {}

  hello() {
    console.log("test");
  }
}

const p: Person = Person.getInstance();
p.hello();
```

---

class와 readonly<br>

```ts
class Person {
  private readonly _name: string = null;
  public readonly age: number = 35;

  constructor(name: string) {
    this._name = name;
  }

  public setName(name: string) {
    // this._name = name; (x)
  }
}

const p: Person = new Person("Moong2");
console.log(p.age);
// p.age = 36; // (x)

// private readonly로 선언된 경우, 생성자에서 할당이 가능하다.
// private readonly로 선언된 경우, 생성자 이외에서는 할당이 불가하다.
// public readonly로 선언된 경우, 클래스 외부에서는 다른 값을 할당할 수 없다.
// 마치 getter 만 있는 경우와 같다.
```

---

코드 바꿔보기 (js -> ts)<br>

```js
function car(name) {
  this.name = name;
  this.speed = 0;
  this.honk = function() {
    console.log("부우우웅");
  };
  this.accelerate = function(speed) {
    this.speed += speed;
  };
}

var car = new Car("벤츠");
car.honk();
console.log(car.speed);
car.accelerate(10);
```

```ts
// myCode

class Car {
  private _name: string;
  private _speed: number = 0;

  constructor(name: string) {
    this._name = name;
  }

  honk = (): void => {
    console.log("부우우웅");
  };

  get speed() {
    return this._speed;
  }

  accelerate = (speed: number): void => {
    this._speed += speed;
  };
}

const car: Car = new Car("벤츠");
car.honk();
console.log(car.speed);
car.accelerate(10);
car.accelerate(10);
car.accelerate(10);
console.log(car.speed);
```

```ts
// teacher code

interface ICar {
  honk(): void;
  accelerate(speed: number): void;
  getSpeed(): number;
}

class Car implements ICar {
  private _speed: number = 0;
  constructor(private name: string) {}

  public honk(): void {
    console.log("부우우웅");
  }

  public accelerate(speed) {
    this._speed += speed;
  }

  public getSpeed(): number {
    return this._speed;
  }
}

const car: ICar = new Car("벤츠");
car.honk();
console.log(car.getSpeed());
car.accelerate(10);
car.accelerate(10);
car.accelerate(10);
console.log(car.getSpeed());
```

---

Generic (any => generic)<br>

제네릭은 타입을 변수로 주고 싶을 때 사용하는 것<br>

```ts
function helloString(message: string): string {
  return message;
}

// message의 타입이 넘버가 들어올수도, 다른 타입이 들어올 수도 있다면..
// type을 any로 할수도 있지만, any는 지양하기에 제네릭을 사용한다.

function hello<T>(message: T): T {
  return message;
}

console.log(hello("moong2"));

// 이렇게 제네릭을 사용하면, 인자의 타입을 추론하여 제네릭의 타입을 결정하게 된다.

hello<string>("moong2");

// 이렇게 명시적으로도 사용가능하다.

// 타입이 any이면 타입 헬퍼가 제대로 작동하지 않는다.
// 이럴떄 제네릭을 사용하면, 정상적으로 사용가능하다.
// 또한 타입추론형 제네릭을 통해 내장함수까지도 사용가능하다.

hello("moong2").length;
hello(35).toFixed();

// 덤으로 b처럼 제네릭을 이용하여 배열 타입을 정하여 쓸 수 있다.
const a: string[] = [];
const b: Array<string> = [];
```

---

Generic Array<br>

```ts
function hello<T>(messages: T[]): T {
  return messages[0];
}

console.log(
  hello<string>(["hello", "world"])
);

// hello 함수의 제네릭 타입을 []를 이용하여, 배열로 사용할 수 있다.
```

---

Generic Types<br>

```ts
type HelloGeneric = <T>(message: T) => T;

const hello: HelloGeneric = <T>(message: T): T => {
  return message;
};

console.log(hello<string>("Hello").length);

// 구현체에 return T를 설정하지 않아도,
// return false시 오류가 안난다.
// 사용은 판단에 따라 눈치껏..
```

---

Generic Class<br>

```ts
class Person<T> {
  private _name: T;
  private _age: number;

  constructor(name: T) {
    this._name = name;
  }
}

new Person("Moong2");
// new Person<string>(35);
// 명시적으로 타입을 설정하면,
// 타입과 다른 인자가 들어갈경우 에러발생
```

---

Generic with extends<br>

```ts
class Person<T extends string | number> {
  private _name: T;
  private _age: T;

  constructor(name: T) {
    this._name = name;
  }
}

new Person("moong2");
new Person(35);
// new Person(true);

// T가 string || number를 상속받기 때문에 boolean은 안된다.
```

유니온 타입을 설정해놓은 것을 상속받아서 제네릭으로 충분히 활용가능하다.

---

Generic with multiple types<br>

```ts
class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person("Moong2", 31);
// 제네릭 T는 string 타입, 제네릭 K는 number 타입 된다.
```

---

type lookup system (타입을 찾아내는 시스템)<br>

```ts
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Moong2",
  age: 31
};

// 이렇게 하면 없는 프로퍼티에 접근할 경우 에러가 나서 미리 알수 있기 떄문에 좋다.
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

console.log(getProperty(person, "name"));
setProperty(person, "name", "min_zzz");
console.log(getProperty(person, "name"));
```

keyof는 타입에 대한 이야기이다. (Type Alias와 같이 사용할 수 밖에 없다.)<br>
keyof OO이라고 하면 OO의 리터럴타입이 할당된다.<br>
이걸 그냥쓰진 않고 제네릭과 같이 쓴다.<br>

---

iterator<br>

for..of<br>

es3 : `for (var i=0; i<arr.length; i++)` : 우리가 아는 그것..<br>
es5 : `array.forEach` : return으로 순회탈출 가능<br>
es6 : for (const item of array) : 배열에서만 사용가능(원칙적으로는)<br>

---

for..in : 배열같은 경우는 index가 나오는데 number타입이 아니라 스트링 타입으로 나온다..<br>

- 배열을 순회할 때는 사용하지 않을
- index가 number가 아니라 string으로 나온다.
- 배열의 프로퍼티를 순회할 수 있다.
- prototype 체인의 프로퍼티를 순회할 수도 있다. (엔진에 따라 다름..)
- 루프가 무작위로 순회할 수도 있다. (이게 제일 큼..)
- for..of를 쓸 것

- 객체를 순회할 때
- for (const prop of Object.keys(obj))도 사용할 수 있다.

---

Symbol.iterator<br>

- 프로퍼티이며, 함수가 구현되어 있으면, iterable이라고 한다.
- Array, Map, Set, String, Int32Array, Uint32Array, etc.에는 내장된 구현체가 있으므로, 이터러블 하다.
- 그냥 객체는 이터러블하지 않다.
- 이터레이터를 통해 이터러블한 객체의 Symbol.iterator 함수를 호출한다.

```
Data Consumers			Interface           Data Sources

 for-of loop                                 Arrays

 				 ->    iterable   <-         Maps

 spread syntax                               Strings


```

- target: es3 or es5 - Array에만 for..of 사용가 - 일반 객체에 사용하면 오류

- target: es6 - Symbol.iterator 함수를 구현하면 어떤 객체에도 for..of 사용 가능

---

lib.es6.d.ts<br>

```ts
interface IteratorResult<T> {
  done: boolean;
  value: T;
}

interface Iterator<T> {
  next(value?: any): IteratorResult<T>;
  return?(value?: any): IteratorResult<T>;
  throw?(e?: any): IteratorResult<T>;
}

interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}

interface IterableIterator<T> extends Iterator<T> {
  [Symbol.iterator](): IterableIterator<T>;
}
```

---

Custom Iterator<br>

```ts
class CustomIterable implements Iterable<string> {
  [Symbol.iterator]() {
    const iterator: Iterator<string> = {
      next() {
        return {
          done: false,
          value: "어렵다."
        };
      }
    };
    return iterartor;
  }
}

const cIterable = new CustomIterable();

for (const item of cIterable) {
  console.log(item);
}
```

---

Decorator<br>

Class Decorator<br>
Method Decorator<br>
Property Decorator<br>
Parameter Decorator<br>

---

Class Decorator Basic<br>

```ts
function hello(constructorFn: Function) {
  console.log(constructorFn);
}

function helloFactory(show: boolean) {
  if (show) {
    return hello;
  } else {
    return null;
  }
}

@helloFactory(false)
class Person {}
```

보통 바로 클래스위에 데코레이터를 직접쓰지않고,<br>
helloFactory처럼 팩토리 구현을 통해 인자를 주어 사용한다.<br>

---

Class Decorator Advanced<br>

```ts
function hello(constructorFn: Function) {
  constructorFn.prototype.hello = function() {
    console.log("hello");
  };
}

@hello
class Person {}

const p = new Person();
(<any>p).hello();
```

프로토 타입으로 빼서 생성자 할당후 불러서 쓰면되는 방법인데..<br>
any를 붙이지 않으면 class Person에서 hello에 대한 타입을 모른다고 에러가 난다.<br>
any를 붙여주면 되긴하는데.. 모호하다.<br>

프로토타입으로 함수를 추가해서 데코레이터 붙여 사용하면<br>
프레임워크를 만들거나 할때는 좋을것같다고 한다.<br>

---

Method Decorator<br>

```ts
function editable(canBeEditable: boolean) {
  return function(
    target: any,
    propName: string,
    description: PropertyDescriptor
  ) {
    console.log("target", target);
    console.log("propName", propName);
    console.log("description", description);
    description.writable = canBeEditable;
  };
}

class Person {
  constructor() {
    console.log("new Person()");
  }

  @editable(false)
  hello() {
    console.log("hello");
  }
}

const p: Person = new Person();
p.hello();

p.hello = function() {
  console.log("world zzz");
};
p.hello();
```

메소드에 데코레이터를 걸어서 제어를 할 수 있다.<br>
되게 유용해보인다. 활용도를 찾아보자.<br>

---

Property Decorator<br>

```ts
function writable(canBeWritable: boolean) {
  return function(target: any, propName: string): any {
    console.log("target", target);
    console.log("propName", propName);
    return {
      writable: canBeWritable
    };
  };
}

class Person {
  @writable(true)
  name: string = "Moong2";
  constructor() {
    console.log("new Person()");
  }
}

const p: Person = new Person();
console.log(p.name);
```

파라미터에 데코레이터를 걸어서 제어를 할 수 있다.<br>
이 것도 유용해보인다.<br>

---

Parameter Decorator<br>

```ts
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log("target", target);
  console.log("methodName", methodName);
  console.log("paramIndex", paramIndex);
}

class Person {
  private _name: string;
  private _age: number;
  constructor(name: string, @printInfo age: number) {
    this._name = name;
    this._age = age;
  }

  hello(@printInfo message: string) {
    console.log(message);
  }
}

const p: Person = new Person("Moong2", 31);

// hello - 정상적인 파라미터 형식은 다음과 같다고 생각하면 좋다.
// target Person {}
// methodName hello
// paramIndex 0

// constructor - 이 경우가 특이하다.
// target [Function: Person]
// methodName undefined
// paramIndex 1
```

---

Type Inference (타입 추론)<br>

- 타입을 명시적으로 쓰지 않을 때 추론하는 방법에 대한 규칙
- 명시적으로 쓰는 것은 타입 추론이 아니라 코드를 읽기 좋게 하는 지름길

- let은 기본적으로 우리가 아는 기본 자료형으로 추론
- const는 리터럴 타입으로 추론 - 오브젝트 타입을 쓰지 않으면, 프로퍼티는 let처럼 추론
- const person = {name: 'Moong2', age: 35};
- person => {name: string; age: number;}

- 대부분은 추론이 쉽다.
- 단순 변수
- structuring, destructuring

- array, 함수의 리턴에서는 원하는데로 얻기가 힘들다.

---

배열 타입 추론<br>

```ts
const array1 = []; // any
const array2 = ["a", "b", "c"]; // string[]
const array3 = [1, "b", true]; // (string | number | boolean)[]

class Animal1 {
  name: string;
}

class Dog extends Animal1 {
  dog: string;
}

class Cat extends Animal1 {
  cat: string;
}

const array = [new Dog(), new Cat()]; // (Dog | Cat)[]
```

---

리턴 타입 추론<br>

```ts
function hello(message: number | string) {
  if (message === "hello") {
    return "world";
  } else {
    return 0;
  }
}

// 'world' | 0
```

---

유니온 타입과 타입 가드<br>

유니온 타입을 사용할 때, 대부분 유니온 타입으로 추론이 된다.<br>
그런 경우를 어떻게 잘 쓸수 있을지 프로그래밍을 해줘야하는데,<br>
이 것을 런타임에서 분류하는건 매력이 반감된다.<br>

그래서 등장한게 타입 가드이다.<br>

```ts
interface Person {
    name: string;
    age: number;
}

interface Car {
    brand: string;
    wheel: number;
    age: number;
}

function hello(obj: Person | Car) {
    obj.
}

// obj.을 찍으면 common한 프로퍼티인 age가 나온다.
// 하지만 age를 지우면 common한 요소가 없게 된다.
// 그럴때 isPerson 함수처럼 인터페이스를 알수 있게 하는 장치를
// 타입가드라고 한다.

interface Person {
    name: string;
    age: number;
}

interface Car {
    brand: string;
    wheel: number;
}

function isPerson(arg: any): arg is Person {
    return arg.name !== undefined
}

function hello(obj: Person | Car) {
    if (isPerson(obj)) {
        return obj.age
    } else {
    	return obj.brand
    }
}
```

---

넓은 타입으로 좁은 타입으로가는건 문제가 있다고 오류를 냄<br>
좁은 타입에서 넓은 타입으로가는건 문제가 없다고 판단하기 때문에<br>
이런 부분을 좀 더 타이트하게 해줘야한다.<br>
