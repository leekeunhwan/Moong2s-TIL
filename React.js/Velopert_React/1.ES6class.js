class App extends React.Compoment {
    render() {}
}

/**
 * class란?
 * JavaScript class는 ES6에서 소개되었으며, 기존 prototype 기반의 상속을 보다 명료하게 표현 합니다.
 * class는 사실 함수입니다. 
 * 함수를 표현식과 선언으로 정의할 수 있듯이, class 문법도 class 표현식과 class 선언 두가지 방법을 제공합니다.
 *
 * class를 선언하기 위해서는 클래스의 이름과 함께 class 키워드를 사용해야 합니다. */

class Polygon {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}

// 클래스를 사용할 때는 클래스를 먼저 선언한 후에 사용해야 합니다. 기존 네이티브 자바스크립트와는 다르게 호이스팅이 일어나지 않습니다.

var p = new Polygon(); // Reference Error

class Polygon {}

/**
 * Class 표현식
 * class 표현식은 class를 정의 하는 또 따른 방법입니다.
 * class 표현식은 ES5.5의 function처럼 이름을 가질수도 안가질수도 있습니다.
 * 이름을 가진 class 표현식의 클래스 이름은 해당 클래스의 body에 대해 local scope에 한해 유효합니다.
 */

// unnamed

var Polygon = class {
    constructor(height, width) { // contructor 메소드는 class로 생성된 객체를 생성하고, 초기화하기 위한 특수한 메소드로 클래스안에 한개만 존재할 수 있습니다.
        this.height = height;
        this.width = width;
    }
}

// named

var Polygon = class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// 임의의 메소드를 만들때는 아래처럼 해주면 됩니다.

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

// 다른 객체형 언어에서처럼 static method도 만들 수 있습니다.
// static method와 일반 method의 차이는 static method는 객체로 만들기 전에도 사용 가능합니다.

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));

// class는 extends를 통해 상속을 받을 수 있습니다.
// extends는 클래스 선언이나 클래스 표현식에서 다른 클래스의 자식 클래스를 생성하기 위해 사용됩니다.

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' bark.');
    }
}

let d = new Dog('cookie');
d.speak();

// 상속을 했을땐 super를 통해 객체의 부모가 가지고 있는 함수를 호출할 수 있습니다.

class cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise');
    }
}

class lion extends cat {
    speak() {
        super.speak();
        console.log(this.name + ' roars');
    }
}

let e = new lion('King');
e.speak();