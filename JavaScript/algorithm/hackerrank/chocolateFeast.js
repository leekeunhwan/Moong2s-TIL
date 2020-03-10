// Little Bobby loves chocolate.He frequently goes to his favorite 5 & 10 store,
// Penny Auntie, to buy them.They are having a promotion at Penny Auntie.
// If Bobby saves enough wrappers, he can turn them in for a free chocolate.

// For example, Bobby has n = 15 to spend on bars of chocolate that cost c = 3 each.
// He can turn in m = 2 wrappers to receive another bar.
// Initially, he buys 5 bars and has 5 wrappers after eating them.
// He turns in 4 of them, leaving him with 1, for 2 more bars.
// After eating those two, he has 3 wrappers, turns in 2 leaving him with 1 wrapper and his new bar.
// Once he eats that one, he has 2 wrappers and turns them in for another bar.
// After eating that one, he only has 1 wrapper, and his feast ends.
// Overall, he has eaten 5 + 2 + 1 + 1 = 9 bars.

// Function Description
// Complete the chocolateFeast function in the editor below.
// It must return the number of chocolates Bobby can eat after taking full advantage of the promotion.

// chocolateFeast has the following parameter(s):
// n: an integer representing Bobby's initial amount of money
// c: an integer representing the cost of a chocolate bar
// m: an integer representing the number of wrappers he can turn in for a free bar
// Note: Little Bobby will always turn in his wrappers if he has enough to get a free chocolate.

// Input Format
// The first line contains an integer, t, denoting the number of test cases to analyze.
// Each of the next t lines contains three space - separated integers: n, c, and m.
// They represent money to spend, cost of a chocolate, and the number of wrappers he can turn in for a free chocolate.

// Constraints
// 1 <= t <= 1000
// 2 <= n <= 10^5
// 1 <= c <= n
// 2 <= m <= n

// Output Format
// For each trip to Penny Auntie, print the total number of chocolates Bobby eats on a new line.

// Sample Input
// 3
// 10 2 5
// 12 4 4
// 6 2 2

// Sample Output
// 6
// 3
// 5

// Explanation
// Bobby makes the following 3 trips to the store:
// He spends his 10 dollars on 5 chocolates at 2 dollars apiece.
// He then eats them and exchanges all 5 wrappers to get 1 more.
// He eats 6 chocolates.
// He spends his 12 dollars on 3 chocolates at 4 dollars apiece.
// He has 3 wrappers, but needs 4 to trade for his next chocolate.
// He eats 3 chocolates.
// He spends 6 dollars on 3 chocolates at 2 dollars apiece.
// He then exchanges 2 of the 3 wrappers for 1 additional piece.
// Next, he uses his third leftover chocolate wrapper from his initial purchase with
// the wrapper from his trade-in to do a second trade-in for 1 more piece.
// At this point he has 1 wrapper left, which is not enough to perform another trade-in.
// He eats 5 chocolates.

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

// Complete the chocolateFeast function below.
function chocolateFeast(n, c, m) {
  let count = 0;
  let wrappers = parseInt(n / c);

  if (m > wrappers) {
    return wrappers;
  } else {
    count = wrappers;

    while (wrappers >= m) {
      wrappers -= m;
      wrappers++;
      count++;
    }
  }

  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const ncm = readLine().split(" ");

    const n = parseInt(ncm[0], 10);

    const c = parseInt(ncm[1], 10);

    const m = parseInt(ncm[2], 10);

    let result = chocolateFeast(n, c, m);

    ws.write(result + "\n");
  }

  ws.end();
}
