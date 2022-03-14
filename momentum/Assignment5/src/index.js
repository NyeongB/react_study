function clickButton() {
  const range_n = document.querySelector("#range_n").value;
  const chose_me = document.querySelector("#chose_me").value;
  console.log(range_n, chose_me);
}

const play_button = document.querySelector("#play_button");

play_button.addEventListener("click", clickButton);
