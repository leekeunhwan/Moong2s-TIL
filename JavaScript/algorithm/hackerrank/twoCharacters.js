// In this challenge, you will be given a string.
// You must remove characters until the string is made up of any two alternating characters.
//vWhen you choose a character to remove, all instances of that character must be removed.
//vYour goal is to create the longest string possible that contains just two alternating letters.

// As an example, consider the string abaacdabd.
// If you delete the character a, you will be left with the string bcdbd.
// Now, removing the character c leaves you with a valid string bdbd having a length of 4.
// Removing either b or d at any point would not result in a valid string.

// Given a string, convert it to the longest possible string t made up only of alternating characters.
// Print the length of string t on a new line.
// If no string t can be formed, print 0 instead.

// Function Description

// Complete the alternate function in the editor below.
// It should return an integer that denotes the longest string that can be formed, or 0 if it cannot be done.

// alternate has the following parameter(s):
// s: a string

// Input Format
// The first line contains a single integer denoting the length of s.
// The second line contains string s.

// Constraints
// 1 <= |s| <= 1000
// s[i] = ascii[a-z]

// Output Format
// Print a single integer denoting the maximum length of t for the given s;
// if it is not possible to form string t, print 0 instead.

// Sample Input
// 10
// beabeefeab

// Sample Output
// 5

// Explanation
// The characters present s in are a, b, e, and f.
// This means that t must consist of two of those characters and we must delete two others.
// Our choices for characters to leave are[a, b], [a, e], [a, f], [b, e], [b, f] and[e, f].

// If we delete e and f, the resulting string is babab.
// This is a valid t as there are only two distinct characters(a and b), and they are alternating within the string.

// If we delete a and f, the resulting string is bebeeeb.This is not a valid string t because there are consecutive e's present.
// Removing them would leave consecutive b's, so this fails to produce a valid string t.

// Other cases are solved similarly.
// babab is the longest string we can create.

function alternate(s) {
  const stringElement = [...new Set(s)];
  let count = 0;

  for (let i = 0; i < stringElement.length - 1; i++) {
    for (let k = i + 1; k < stringElement.length; k++) {
      let copyStr = s;
      const target1 = stringElement[i];
      const target2 = stringElement[k];

      const deleteTarget = stringElement.filter((item) => {
        if (item != target1 && item != target2) {
          return item;
        }
      });

      while (deleteTarget.length > 0) {
        while (copyStr.includes(deleteTarget[0])) {
          copyStr = copyStr.replace(deleteTarget[0], "");
        }
        deleteTarget.shift();
      }

      if (checkAnswerCondition(copyStr)) {
        count = count > copyStr.length ? count : copyStr.length;
      }
    }
  }

  return count;
}

function checkAnswerCondition(str) {
  let flag = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] != undefined && str[i] == str[i + 1]) {
      flag = false;
    }
  }

  return flag;
}

alternate("asdcbsdcagfsdbgdfanfghbsfdab");
