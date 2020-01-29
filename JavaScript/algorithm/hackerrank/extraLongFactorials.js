// The factorial of the integer n, written n!, is defined as:
// n! = n * n-1 * n-2 * ... * 3 * 2 * 1
// Calculate and print the factorial of a given integer.
// For example, if n = 30, we calculate 30 * 29 * 28 * ... * 2 * 1 and get 265252859812191058636308480000000.

// Function Description
// Complete the extraLongFactorials function in the editor below. It should print the result and return.
// extraLongFactorials has the following parameter(s):
// n: an integer

// Note: Factorials of n > 20 can't be stored even in a 64-bit long long variable.
// Big integers must be used for such calculations.Languages like Java, Python, Ruby etc.can handle big integers,
// but we need to write additional code in C / C++ to handle huge values.
// We recommend solving this challenge using BigIntegers.

// Input Format
// Input consists of a single integer

// Constraints
// 1 <= n <= 100

// Output Format
// Print the factorial of n.

// Sample Input
// 25

// Sample Output
// 15511210043330985984000000

// Explanation
// 25! = 25 * 24 * 23 * ... * 3 * 2 * 1

"use strict";

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

// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
  // answer에 BigInt(1)할당
  // 숫자가 커서 BigInt를 써야하는데 곱셈을 해야하므로 기본값 1
  let answer = BigInt(1);
  // 숫자는 1부터 n까지
  for (let i = 1; i <= n; i++) {
    // 곱해준다.
    answer *= BigInt(i);
  }
  // 정답 노출
  console.log(
    BigInt(answer)
      .toString()
      .split("n")[0]
  );
}

function main() {
  const n = parseInt(readLine(), 10);

  extraLongFactorials(n);
}

// BigInt 과거에는 패키지를 설치해야했지만 지금은 왠만하면 사용가능하다.
// 문자열로 바꿔서 뭐 할 필요가 없다.
