// You have been asked to help study the population of birds migrating across the continent.
// Each type of bird you are interested in will be identified by an integer value.
// Each time a particular kind of bird is spotted, its id number will be added to your array of sightings.
// You would like to be able to find out which type of bird is most common given a list of sightings.
// Your task is to print the type number of that bird and if two or more types of birds are equally common,
// choose the type with the smallest ID number.

// For example, assume your bird sightings are of types arr=[1,1,2,3,3].
// There are two each of types 1 and 2, and one sighting of type 3.
// Pick the lower of the two types seen twice: type 1.

// Function Description
// Complete the migratoryBirds function in the editor below.
// It should return the lowest type number of the most frequently sighted bird.
// migratoryBirds has the following parameter(s):
// arr: an array of integers representing types of birds sighted

// Input Format
// The first line contains an integer denoting n, the number of birds sighted and reported in the array arr.
// The second line describes arr as n space - separated integers representing the type numbers of each bird sighted.

// Constraints
// 5 <= n <= 2 * 10^5
// It is guaranteed that each type is 1, 2, 3, 4, or 5.

// Output Format
// Print the type number of the most common bird;
// if two or more types of birds are equally common, choose the type with the smallest ID number.

// Sample Input 0
// 6
// 1 4 4 4 5 3

// Sample Output 0
// 4

// Explanation 0
// The different types of birds occur in the following frequencies:

// Type 1 : 1 bird
// Type 2 : 0 birds
// Type 3 : 1 bird
// Type 4 : 3 birds
// Type 5 : 1 bird
// The type number that occurs at the highest frequency is type 4, so we print 4 as our answer.

// Sample Input 1
// 11
// 1 2 3 4 5 4 3 2 1 3 4

// Sample Output 1
// 3

// Explanation 1
// The different types of birds occur in the following frequencies:
// Type 1 : 2
// Type 2 : 2
// Type 3 : 3
// Type 4 : 3
// Type 5 : 1
// Two types have a frequency of 3, and the lower of those is type 3.

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  // 타입체크 및 카운트를 해줄 변수
  const typeCheck = [
    {
      type: "1",
      count: 0
    },
    {
      type: "2",
      count: 0
    },
    {
      type: "3",
      count: 0
    },
    {
      type: "4",
      count: 0
    },
    {
      type: "5",
      count: 0
    }
  ];

  // 조류 배열을 돌면서
  arr.forEach(element => {
    // 요소가 포함되어 있는 타입을 체크해서
    const findResult = typeCheck.find(item => Number(item.type) === element);
    // 결과가 있으면
    if (findResult) {
      // 숫자 카운트업
      findResult.count++;
    }
  });

  // 타입체크를 마친 배열에서 카운트가 제일 높은 것을 찾되, 동일한 것이 있으면,
  // 타입이 낮은 것으로 찾는다.
  const result = typeCheck.reduce((a, b) =>
    a.count > b.count ? a : a.count === b.count ? (a.type > b.type ? b : a) : b
  );
  // 정답은 숫자형이기에 숫자타입으로 바꿔준다.
  return Number(result.type);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}

// easy는 쉽다.
// medium은 조금 꼬아져있다.

// 오늘 배운 표현들

/*
    1) 중복된 요소를 제거한 배열을 구하는 법
    
    // 가급적 첫번째로 사용하기
    -> [...new Set(arr)]; 
    -> [...arr].filter((item,index) => [...arr].indexOf(item) === index);


    2) 최대값 구하기 (요소가 객체인 경우)

    arr.reduce((previous, next) => previous.property > next.property ? previous : next)


    3) 복습, some(), every()
    
    some은 배열의 요소들중 조건을 일치하는 것이 하나라도 있으면 true, 아니면 false
    every는 배열의 요소들이 조건을 모두 일치해야 true, 아니면 false
*/
