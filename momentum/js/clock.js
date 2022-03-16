const clock = document.querySelector("#clock");


function getClock(){
    const data = new Date();
    const hour = String(data.getHours()).padStart(2, "0");
    const min = String(data.getMinutes()).padStart(2, "0");
    const sec = String(data.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour}:${min}:${sec}`;
    
}

getClock();
setInterval(getClock, 1000);

//setInterval(sayHello, 5000); // 인자 두개: 실행할 함수, ms 반복 O
// setTimeout(sayHello, 5000); // 인자 두개: 실행할 함수, ms 반복 X