// Complete the function solveMeFirst to compute the sum of two integers.

// Function prototype:

// int solveMeFirst(int a, int b);

// where,

// a is the first integer input.
// b is the second integer input
// Return values

// sum of the above two integers
// Sample Input

// a = 2
// b = 3
// Sample Output

// 5
// Explanation

// The sum of the two integers  and  is computed as: .

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function(data) {
  input_stdin += data;
});

process.stdin.on("end", function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function solveMeFirst(a, b) {
  // 두 파라미터의 합은 정답
  return a + b;
}

function main() {
  var a = parseInt(readLine());
  var b = parseInt(readLine());

  var res = solveMeFirst(a, b);
  console.log(res);
}

// 영어랑 친해지기
// 이건 뭐 처음하는 분들도 푸는거라서.. 딱히..
