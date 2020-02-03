// Louise joined a social networking site to stay in touch with her friends.
// The signup page required her to input a name and a password.
// However, the password must be strong.
// The website considers a password to be strong if it satisfies the following criteria:

// Its length is at least 6.
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character.The special characters are: !@#$ %^&* () - +
// She typed a random string of length n in the password field but wasn't sure if it was strong.
// Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

// Note: Here's the set of types of characters in a form you can paste in your solution:
// numbers = "0123456789"
// lower_case = "abcdefghijklmnopqrstuvwxyz"
// upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// special_characters = "!@#$%^&*()-+"

// Input Format
// The first line contains an integer n denoting the length of the string.
// The second line contains a string consisting of n characters, the password typed by Louise.
// Each character is either a lowercase / uppercase English alphabet, a digit, or a special character.

// Constraints
// 1 <= n <= 100

// Output Format
// Print a single line containing a single integer denoting the answer to the problem.

// Sample Input 0
// 3
// Ab1

// Sample Output 0
// 3

// Explanation 0
// She can make the password strong by adding 3 characters,
// for example, $hk, turning the password into Ab1$hk which is strong.
// 2 characters aren't enough since the length must be at least 6.

// Sample Input 1
// 11
// #HackerRank

// Sample Output 1
// 1

// Explanation 1
// The password isn't strong, but she can make it strong by adding a single digit.

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
  // 일단 우리 숫자, 소문자, 대문자, 특수문자 모아놓기
  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";

  // 강력한 비밀번호가 되기위한 글자 추가를 체크할 변수
  let count = 0;
  // 각 타입별로 체크하기 위한 장치
  let numberCheck = false;
  let lowercaseCheck = false;
  let uppercaseCheck = false;
  let specialCharCheck = false;

  // 문자열 한글자씩 체크하면서
  // 글자하나당 하나의 타입을 가질수 있기에 switch 사용
  for (let i = 0; i < password.length; i++) {
    switch (true) {
      // 숫자가 포함되어있으면
      case numbers.indexOf(password[i]) > -1:
        // 체크 확인
        numberCheck = true;
        // 종료
        break;
      // 소문자가 포함되어있으면
      case lower_case.indexOf(password[i]) > -1:
        // 체크 확인
        lowercaseCheck = true;
        // 종료
        break;
      // 대문자가 포함되어있으면
      case upper_case.indexOf(password[i]) > -1:
        // 체크 확인
        uppercaseCheck = true;
        // 종료
        break;
      // 특수문자가 포함되어있으면
      case special_characters.indexOf(password[i]) > -1:
        // 체크 확인
        specialCharCheck = true;
        // 종료
        break;
      // 아닌경우가 없지만
      default:
        // 아니면 종료
        break;
    }
  }

  // 체크한 결과를 가지고 필요한 부분은 카운트에 추가
  // Boolean 값에 '+-*%/' 연산을 하면 숫자로 자동 형변환
  count = !numberCheck + !lowercaseCheck + !uppercaseCheck + !specialCharCheck;
  // 비밀번호의 길이가 최소제한인 6보다 작으면
  if (password.length < 6) {
    // 6에서 비밀번호의 글자수를 뺀 것이 count보다 클경우 그 안에 count가 들어갈 수 있으니 6 - password.length
    // count가 더 크면 count
    count = 6 - password.length > count ? 6 - password.length : count;
  }
  // 정답 도출
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const password = readLine();

  let answer = minimumNumber(n, password);

  ws.write(answer + "\n");

  ws.end();
}

// 문제를 꼼꼼히 읽자.
