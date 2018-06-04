/**
 * JavaScript - Map
 *
 * map() 메소드는 파라미터로 전달 된 함수를 통하여 배열 내의 각 요소를 처리해서 그 결과로 새로운 배열을 생성합니다.
 *
 * arr.map(callback, [thisArg])
 *
 * callback : 새로운 배열의 요소를 생성하는 함수로서, 다음 세가지 인수를 가집니다.
 *  - currentValue : 현재 처리되고 있는 요소
 *  - index : 현재 처리되고 있는 요소의 index 값
 *  - array : 메소드가 불려진 배열
 *
 * thisArg : (선택항목) callback 함수 내부에서 사용 할 this 값을 설정
 */

var number = [1, 2, 3, 4, 5];

var processed = number.map(function() {
  return num * num;
});

console.log(processed); // [1,4,9,16,25]

// 위의 코드를 ES6에서는 =>를 통해서 작성할 수 있다.

let numbers = [1, 2, 3, 4, 5];

let result = numbers.map(num => {
  return num * num;
});

// ### (=>) arrow function이란?

let one = a => console.log(a);

var one = function one(a) {
  return console.log(a);
};

let two = (a, b) => console.log(a, b);

var two = function two(a, b) {
  return console.log(a, b);
};

let three = (c, d) => {
  console.log(c);
  console.log(d);
};

var three = function three(c, d) {
  console.log(c);
  console.log(d);
};

let four = () => {
  console.log("no params");
};

var four = function four() {
  console.log("no params");
};

// 이렇게 arrow function을 이용하면 native JavaScript보다 조금 더 간단히 작성할 수 있다.
