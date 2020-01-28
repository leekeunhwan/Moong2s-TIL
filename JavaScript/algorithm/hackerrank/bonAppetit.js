// Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally.
// Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item.
// Brian gets the check and calculates Anna's portion.
// You must determine if his calculation is correct.

// For example, assume the bill has the following prices: bill = [2, 4, 6].
// Anna declines to eat item k = bill[2] which costs 6.
// If Brian calculates the bill correctly, Anna will pay (2 + 4) / 2 = 3.
// If he includes the cost of bill[2], he will calculate (2 + 4 + 6) / 2 = 6.
// In the second case, he should refund 3 to Anna.

// Function Description
// Complete the bonAppetit function in the editor below.
// It should print Bon Appetit if the bill is fairly split.
// Otherwise, it should print the integer amount of money that Brian owes Anna.

// bonAppetit has the following parameter(s):
// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero - based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

// Input Format
// The first line contains two space - separated integers n and k,
// the number of items ordered and the 0 - based index of the item that Anna did not eat.
// The second line contains n space - separated integers bill[i] where 0 <= i < n.
// The third line contains an integer, b, the amount of money that Brian charged Anna for her share of the bill.

// Constraints
// 2 <= n <= 10^5
// 0 <= k < n
// 0 <= bill[i] <= 10^4
// The amount of money due Anna will always be an integer

// Output Format
// If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise,
// print the difference(i.e. b(charged) - b(actual)) that Brian must refund to Anna.This will always be an integer.

// Sample Input 0
// 4 1
// 3 10 2 9
// 12

// Sample Output 0
// 5

// Explanation 0
// Anna didn't eat item bill[1] = 10, but she shared the rest of the items with Brian.
//  The total cost of the shared items is 3 + 2 + 9 = 14 and, split in half, the cost per person is b(actual) = 7.
// Brian charged her b(charged) = 12 for her portion of the bill.
// We print the amount Anna was overcharged, b(charged) - b(actual) = 12 - 7 = 5, on a new line.

// Sample Input 1
// 4 1
// 3 10 2 9
// 7

// Sample Output 1
// Bon Appetit

// Explanation 1
// Anna didn't eat item bill[1] = 10, but she shared the rest of the items with Brian.
// The total cost of the shared items is 3 + 2 + 9 = 14 and, split in half, the cost per person is b(actual) = 7.
// Because b(actual) = b(charged) = 7, we print Bon Appetit on a new line.

"use strict";

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

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
  // 정확하게 더치페이할 금액을 구한다.
  const actual =
    bill
      // index가 k인 경우는 먹지않은 음식이기에 아닌 경우에만 item 리턴
      .map((item, index) => {
        if (index != k) {
          return item;
          // map이 요소마다 도는 것이라 처리를 안해주면 undefined가 되기에 0을 리턴해줌 (어차피 덧셈할거라서)
        } else {
          return 0;
        }
      })
      // 총 배열의 요소의 합을 구한다음 2로 나눠준다. (실 N빵 금액)
      .reduce((a, b) => a + b, 0) / 2;
  // 정답출력
  // 정확하게 더치할 금액이 청구된 금액과 같으면 보나페티 출력 아니면 청구된 금액에서 정확하게 더치할 금액 빼주기
  // 남은 차액을 refund 받으면 된다.
  console.log(actual === b ? "Bon Appetit" : b - actual);
}

function main() {
  const nk = readLine()
    .replace(/\s+$/g, "")
    .split(" ");

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const bill = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(billTemp => parseInt(billTemp, 10));

  const b = parseInt(readLine().trim(), 10);

  bonAppetit(bill, k, b);
}
