// <⚠️ DONT DELETE THIS ⚠️>

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter: function () {
    title.style.color = colors[0];
  },
  handleMouseLeave: function () {
    title.style.color = colors[1];
  },
  handleWindowResize: function () {
    title.style.color = colors[2];
  },
  handleWindowContextmenu: function () {
    title.style.color = colors[4];
  }
};

title.onmouseenter = superEventHandler.handleMouseEnter;
title.onmouseleave = superEventHandler.handleMouseLeave;
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener(
  "contextmenu",
  superEventHandler.handleWindowContextmenu
);
