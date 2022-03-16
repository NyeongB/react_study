
const login_form = document.querySelector("#login_form");
const button = document.querySelector("#login_form button");

const loginInput = document.querySelector("#login_form input");

const message = document.querySelector("#message");

const HIDDEN = "hidden";

function onClickSubmit(event) {
    event.preventDefault();

    const text = loginInput.value;

    login_form.classList.add(HIDDEN);

    message.classList.remove(HIDDEN);

    message.innerHTML = `Hello ${text}`;

    
}


login_form.addEventListener("submit", onClickSubmit);