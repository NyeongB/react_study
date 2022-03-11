const body = document.querySelector("body");

function resizeWindow() {
  let size = window.innerWidth;
  if (643 > size) {
    body.className = "body-blue";
  } else if (964 > size) {
    body.className = "body-yellow";
  } else {
    body.className = "body-purple";
  }
}

window.onresize = resizeWindow;
