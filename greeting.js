const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const box = document.querySelector(".ask-name");

const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  box.classList.add(SHOWING_CN);
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function checkTime() {
  const date = new Date();
  const hours = date.getHours();
  if (hours > 18) {
    return 1;
  } else if (hours > 12) {
    return 2;
  } else if (hours > 6) {
    return 3;
  } else {
    return 4;
  }
}

function paintGreeting(text) {
  box.classList.remove(SHOWING_CN);
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  const checker = checkTime();
  if (checker === 1) {
    greeting.innerText = `Good Evening, ${text}!`;
  } else if (checker === 2) {
    greeting.innerText = `Good Afternoon, ${text}!`;
  } else if (checker === 3) {
    greeting.innerText = `Good Morning, ${text}!`;
  } else {
    greeting.innerText = `Good Night, ${text}!`;
  }
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
