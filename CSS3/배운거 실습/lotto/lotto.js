let temp = [];

function lotto() {
  for (let i = 0; i < 6; i++) {
    temp[i] = Math.ceil(Math.random() * 44);
    for (let j = 0; j < i; j++) {
      if (temp[i] == temp[j]) {
        i--;
        break;
      }
    }
  }
  return temp.sort(function(a, b) {
    return a - b;
  });
}

function ex() {
  document.querySelector(".drawNum").textContent = lotto();
}
