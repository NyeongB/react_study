// h1 html element mdn
const h1 = document.querySelector("h1");

function handleTilteClick() {
    h1.classList.toggle("clicked");
};

//h1.onclick = handleTilteClick;
h1.addEventListener("click", handleTilteClick);

