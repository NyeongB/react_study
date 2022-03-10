// h1 html element mdn
const title = document.querySelector("div.hello:first-child h1");

console.log(title);
console.dir(title);

function handleTilteClick() {
    console.log("title was clicked!");
    title.style.color = "blue";
}


title.addEventListener("click", handleTilteClick);


function handleMouseEnter() {
    title.innerHTML = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerHTML = "Mouse is gone!";
}

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);