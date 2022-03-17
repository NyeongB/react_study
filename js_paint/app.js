const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");

const mode = document.getElementById("jsMode");


canvas.width = 700;
canvas.height = 700;

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

ctx.strokeStyle = "#2c2c2c";
ctx.fillStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

ctx.fillRect(80, 100, 100, 49);

let painting = false;
let filling = false;

function stopPaingting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    
    const x = event.offsetX;
    const y = event.offsetY;
    
    if(!painting){
        ctx.beginPath(); // 경로 생성
        ctx.moveTo(x, y); // 선 시작 좌표
    } else{
        ctx.lineTo(x,y); // 선 끝 좌표
        ctx.stroke(); // 선 그리기
    }

}

function onMouseDown(event) {
    painting = true;
}

function handleColorClick(event) { 
    
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    
}

function handleRangeChange(event) {

    const size = event.target.value;
    ctx.lineWidth = size;
    
}

function handleModeClick() {
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
        
    }
}

function handleCanvasClick() {
    if(filling){
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
}


if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPaingting);
    canvas.addEventListener("mouseleave", stopPaingting);
    canvas.addEventListener("click", handleCanvasClick);
}

if(colors) {
    Array.from(colors).forEach(
        color => color.addEventListener("click", handleColorClick));
}

if(range) {
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}