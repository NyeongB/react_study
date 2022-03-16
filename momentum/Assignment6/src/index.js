const clockTitle = document.querySelector(".js-clock");

const DAY = 1000 * 60 * 60 * 24;
const HOUR = 1000 * 60 * 60;
const MIN = 1000 * 60;
const SEC = 1000;

//console.log(data_xmas.getMonth() - data_now.getMonth());

function getClock() {
  const date_now = new Date();
  const date_xmas = new Date(`December 25, ${date_now.getFullYear()} 00:00:00`);

  const result = date_xmas - date_now;
  const day = Math.floor(result / DAY);
  const hour = Math.floor((result / HOUR) % 24);
  const min = Math.floor((result / MIN) % 60);
  const sec = Math.floor((result / SEC) % 60);

  clockTitle.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}

getClock();
setInterval(getClock, 1000);
