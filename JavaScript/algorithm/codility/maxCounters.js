// You are given N counters, initially set to 0, and you have two possible operations on them:

// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.
// A non-empty array A of M integers is given. This array represents consecutive operations:

// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
// For example, given integer N = 5 and array A such that:
//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4

// the values of the counters after each consecutive operation will be:
//     (0, 0, 1, 0, 0)
//     (0, 0, 1, 1, 0)
//     (0, 0, 1, 2, 0)
//     (2, 2, 2, 2, 2)
//     (3, 2, 2, 2, 2)
//     (3, 2, 2, 3, 2)
//     (3, 2, 2, 4, 2)

// The goal is to calculate the value of every counter after all operations.

// Write a function:
// function solution(N, A);
// that, given an integer N and a non-empty array A consisting of M integers,
// returns a sequence of integers representing the values of the counters.
// Result array should be returned as an array of integers.

// For example, given:
//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4

// the function should return [3, 2, 2, 4, 2], as explained above.
// Write an efficient algorithm for the following assumptions:

// N and M are integers within the range [1..100,000];
// each element of array A is an integer within the range [1..N + 1].

function solution(N, A) {
  const answer = new Array(N).fill(0);
  let maxCounter = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > N && A[i - 1] === A[i]) {
      continue;
    }

    if (A[i] > N) {
      answer.fill(maxCounter);
      continue;
    }

    const countUp = answer[A[i] - 1] + 1;

    if (maxCounter < countUp) {
      maxCounter = countUp;
    }

    answer[A[i] - 1] = countUp;
  }

  return answer;
}

// new Array()는 느리다.
// 조금이라도 속도를 줄이고 싶다면 변수 선언 후 배열.length = size를 통해
// 배열을 만들고 fill을 하는 것이 좋다.
// 하지만 가독성 측면에서는..? 흠..

// 가급적 배열 한번으로 문제를 해결하는 쪽으로 생각하는 습관을 들여보자!
// 그리고 무의식적에 쓰는 메소드들이 iterable한지 생각하고 사용하자!

// O(N + M)
