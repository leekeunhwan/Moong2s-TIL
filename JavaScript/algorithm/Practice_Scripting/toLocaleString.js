// 10000원을 실제로 표시할 때는 10,000으로 표시하는데 출력 로직 만들기
// toLocaleString() 사용금지
function pollyFilltoLocaleString(number) {
  const numberStrArr = number.toString().split("");

  return numberStrArr
    .reverse()
    .map((item, index) => (index % 3 === 0 && index != 0 ? `${item},` : item))
    .reverse()
    .join("");
}

pollyFilltoLocaleString(100000000);

// 3n..
// 좋은 방법 찾아보기
