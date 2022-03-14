const result = document.querySelector("#result");
const result_me = document.querySelector("#result_me");
const result_machine = document.querySelector("#result_machine");
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");

const HIDDEN = "hidden";

function clickButton() {
  const range_n = document.querySelector("#range_n").value;
  const chose_me = parseInt(document.querySelector("#chose_me").value);
  console.log(range_n, chose_me);

  // make range
  const random_number = Math.floor(Math.random() * (parseInt(range_n) + 1));

  // check number

  result.classList.remove(HIDDEN);
  result_me.innerHTML = chose_me;
  result_machine.innerHTML = random_number;

  if (random_number === chose_me) {
    win.classList.remove(HIDDEN);
    lose.classList.add(HIDDEN);
  } else {
    lose.classList.remove(HIDDEN);
    win.classList.add(HIDDEN);
  }
}

const play_button = document.querySelector("#play_button");

play_button.addEventListener("click", clickButton);
