// A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.

// Write a function:

// function solution(S);

// that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

// For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]",
// the function should return 0, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..200,000];
// string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".

const strMatch = {
  ["["]: "]",
  ["]"]: "[",
  ["("]: ")",
  [")"]: "(",
  ["{"]: "}",
  ["}"]: "{",
};

function solution(S) {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    if (
      (S[i] === ")" || S[i] === "}" || S[i] === "]") &&
      !stack.includes(strMatch[S[i]])
    ) {
      return 0;
    }

    if (stack[stack.length - 1] === strMatch[S[i]]) {
      stack.pop();
      continue;
    }

    stack.push(S[i]);
  }
  return stack.length === 0 ? 1 : 0;
}

// 실무에서 쓰는 가독성을 좋게하기 위한 코드가
// 생각보다 복잡도가 나오는 코드일 수 있다.
// 지금 짠 코드가 얼마나 복잡도를 갖고 있는지
// 판단하면서 코드를 작성하는 것을 길러야 할 것이다.
