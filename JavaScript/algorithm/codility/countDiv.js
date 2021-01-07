// Write a function:

// function solution(A, B, K);

// that, given three integers A, B and K,
// returns the number of integers within the range[A..B] that are divisible by K, i.e.:

// { i : A ≤ i ≤ B, i mod K = 0 }

// For example, for A = 6, B = 11 and K = 2, your function should return 3,
// because there are three numbers divisible by 2 within the range[6..11], namely 6, 8 and 10.

// Write an efficient algorithm for the following assumptions:

// A and B are integers within the range [0..2,000,000,000];
// K is an integer within the range [1..2,000,000,000];
// A ≤ B.

function solution(A, B, K) {
  const resultA = Math.ceil(A / K);
  const resultB = Math.ceil((B + 1) / K);

  return resultB - resultA;
}

// B+1인 이유?
// A와 B와 K가 같다고 가정해보자
// 5는 5로 나눠진다.
// 값이 1이 나와야하는데
// Math.ceil(A / K) - Math.ceil(B / K)를 하면
// 0이 되므로 이를 방지하기 위해 처리해둠
