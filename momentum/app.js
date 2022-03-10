// h1 html element mdn
const title = document.querySelector("div.hello:first-child h1");

console.log(title);
console.dir(title);

function handleTilteClick() {
    console.log("title was clicked!");
    title.style.color = "blue";
}





function handleMouseEnter() {
    title.innerHTML = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerHTML = "Mouse is gone!";
}

// title.addEventListener("click", handleTilteClick);
title.onclick = handleTilteClick;
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);


function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize", handleWindowResize);

function handleWindowCopy() {
    alert("copier!");
}

function handelWindowOffline() {
    alert("SOS no WIFI");
}

function handelWindowOnline() {
    alert("Oh good WIFI");
}

window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handelWindowOffline);
window.addEventListener("online", handelWindowOnline);