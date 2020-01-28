// Marie invented a Time Machine and wants to test it by time - traveling
// to visit Russia on the Day of the Programmer(the 256th day of the year)
// during a year in the inclusive range from 1700 to 2700.

// From 1700 to 2700, Russia's official calendar was the Julian calendar;
// since 1919 they used the Gregorian calendar system.
// The transition from the Julian to Gregorian calendar system occurred in 1918,
// when the next day after January 31st was February 14th.
// This means that in 1918, February 14th was the 32nd day of the year in Russia.

// In both calendar systems, February is the only month with a variable amount of days;
// it has 29 days during a leap year, and 28 days during all other years.
// In the Julian calendar, leap years are divisible by 4;
// in the Gregorian calendar, leap years are either of the following:
// Divisible by 400.
// Divisible by 4 and not divisible by 100.
// Given a year, y, find the date of the 256th day of that year according to the official Russian calendar during that year.
// Then print it in the format dd.mm.yyyy, where dd is the two - digit day, mm is the two - digit month, and yyyy is y.

// For example, the given year = 1984. 1984 is divisible by 4, so it is a leap year.
// The 256th day of a leap year after 1918 is September 12, so the answer is 12.09.1984.

// Function Description\
// Complete the dayOfProgrammer function in the editor below.
// It should return a string representing the date of the 256th day of the year given.
// dayOfProgrammer has the following parameter(s):
// year: an integer

// Input Format
// A single integer denoting year y.

// Constraints
// 1700 <= y <= 2700

// Output Format
// Print the full date of Day of the Programmer during year y in the format dd.mm.yyyy,
// where dd is the two - digit day, mm is the two - digit month, and yyyy is y.

// Sample Input 0
// 2017

// Sample Output 0
// 13.09.2017

// Explanation 0
// In the year y = 2017, January has 31 days, February has 28 days, March has 31 days, April has 30 days, May has 31 days,
// June has 30 days, July has 31 days, and August has 31 days.
// When we sum the total number of days in the first eight months, we get 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243.
// Day of the Programmer is the 256th day, so then calculate 256 - 243 = 13 to determine that
// it falls on day 13 of the 9th month(September).
// We then print the full date in the specified format, which is 13.09.2017.

// Sample Input 1
// 2016

// Sample Output 1
// 12.09.2016

// Explanation 1
// Year y = 2016 is a leap year, so February has 29 days but all the other months have the same number of days as in 2017.
// When we sum the total number of days in the first eight months, we get 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 = 244.
// Day of the Programmer is the 256th day, so then calculate 256 - 244 = 12 to determine that
// it falls on day 12 of the 9th month(September).
// We then print the full date in the specified format, which is 12.09.2016.

// Sample Input 2
// 1800

// Sample Output 2
// 12.09.1800

// Explanation 2
// Since 1800 is leap year.
// Day lies on 12 September.

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

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
  // 윤년인지 알기위한 변수 (기본값 false)
  let leapYear = false;
  // 달에 해당하는 날짜를 나열해보기 위한 변수 (기본값 빈배열)
  let monthToDay = [];
  // 그레고리력 제정 전인 1918년 전에는
  if (year < 1918) {
    // 4로 나누어지면 윤년이 맞음
    leapYear = year % 4 === 0;
    // 윤년일 경우 29, 아니면 28
    monthToDay = [31, leapYear ? 29 : 28, 31, 30, 31, 30, 31, 31];
    // 그레고리력 제정이 된 1918년 후에는
  } else if (year > 1918) {
    // 400으로 나누어지거나 4로는 나누어지지만 100으로 나누어지지ㅣ 않는 경우 윤년이 맞음
    leapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    // 윤년일 경우 29, 아니면 28
    monthToDay = [31, leapYear ? 29 : 28, 31, 30, 31, 30, 31, 31];
  } else {
    // 제정된 해인 1918년에는
    // 1월 32일이 2월 14일이였으므로,
    // 윤년인 29일에서 14일을 제외해서 계산해준다.
    monthToDay = [31, 29 - 14, 31, 30, 31, 30, 31, 31];
  }

  // 날짜의 합을 구하고
  const daySum = monthToDay.reduce((a, b) => a + b, 0);
  // 프로그래머의 날인 256에서 날짜의 합을 감한다.
  const programmersDayDiff = 256 - daySum;
  // 정답 출력
  return `${programmersDayDiff}.09.${year}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim(), 10);

  const result = dayOfProgrammer(year);

  ws.write(result + "\n");

  ws.end();
}
