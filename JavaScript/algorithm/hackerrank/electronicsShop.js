// Monica wants to buy a keyboard and a USB drive from her favorite electronics store.
// The store has several models of each.
// Monica wants to spend as much as possible for the 2 items, given her budget.

// Given the price lists for the store's keyboards and USB drives, and Monica's budget,
// find and print the amount of money Monica will spend.
// If she doesn't have enough money to both a keyboard and a USB drive, print -1 instead.
// She will buy only the two required items.

// For example, suppose she has b = 60 to spend.
// Three types of keyboards cost keyboards = [40, 50, 60].
// Two USB drives cost drives = [5, 8, 12].
// She could purchase a 40 Keyboard + 12 drives = 52, or a 50 Keyboard + 8 drives.
// She chooses the latter.
// She can't buy more than 2 items so she can't spend exactly 60.

// Function Description
// Complete the getMoneySpent function in the editor below.
// It should return the maximum total price for the two items within Monica's budget,
// or - 1 if she cannot afford both items.
// getMoneySpent has the following parameter(s):
// keyboards: an array of integers representing keyboard prices
// drives: an array of integers representing drive prices
// b: the units of currency in Monica's budget

// Input Format
// The first line contains three space - separated integers b, n, and m,
// her budget, the number of keyboard models and the number of USB drive models.
// The second line contains n space - separated integers keyboards[i], the prices of each keyboard model.
// The third line contains m space - separated integers drives, the prices of the USB drives.

// Constraints
// 1 <= n, m <= 1000
// 1 <= b <= 10^6
// The price of each item is in the inclusive range [1, 10^6].

// Output Format
// Print a single integer denoting the amount of money Monica will spend.
// If she doesn't have enough money to buy one keyboard and one USB drive, print -1 instead.

// Sample Input 0
// 10 2 3
// 3 1
// 5 2 8

// Sample Output 0
// 9

// Explanation 0
// She can buy the 2nd keyboard and the 3rd USB drive for a total cost of 8 + 1 = 9.

// Sample Input 1
// 5 1 1
// 4
// 5

// Sample Output 1
// - 1

// Explanation 1
// There is no way to buy one keyboard and one USB drive because 4 + 5 > 5, so we print -1.

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
    .trim()
    .split("\n")
    .map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
  // 배열 원본 보존을 위해 복사
  const copyKeyboards = [...keyboards];
  // 결과값을 담을 배열
  const result = [];
  // 배열의 크기가 0이 될때까지
  while (copyKeyboards.length > 0) {
    // 드라이브의 배열을 순회한다.
    for (let i = 0; i < drives.length; i++) {
      // copyKeyboards의 0번째 요소와 drives의 i번째 요소가 예산보다 같거나 작으면
      // 구입가능하면
      if (copyKeyboards[0] + drives[i] <= b) {
        // 결과에 넣는다.
        result.push(copyKeyboards[0] + drives[i]);
      }
    }

    // 루프가 끝나면 배열의 첫번째 요소를 제거해준다.
    copyKeyboards.shift();
    // copyKeyboards.splice(0,1) <= 이거 이제 앞 뒤에서는 쓰지말기
    // shift, pop 이용하기
  }
  // 결과값 담긴게 하나라도 있으면, 그중에서 최대값 반환, 없으면 -1 반환
  return result.length > 0 ? Math.max.apply(null, result) : -1;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const bnm = readLine().split(" ");

  const b = parseInt(bnm[0], 10);

  const n = parseInt(bnm[1], 10);

  const m = parseInt(bnm[2], 10);

  const keyboards = readLine()
    .split(" ")
    .map(keyboardsTemp => parseInt(keyboardsTemp, 10));

  const drives = readLine()
    .split(" ")
    .map(drivesTemp => parseInt(drivesTemp, 10));

  /*
   * The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
   */

  let moneySpent = getMoneySpent(keyboards, drives, b);

  ws.write(moneySpent + "\n");

  ws.end();
}

// 이제 본게임전 준비운동 끝!!
