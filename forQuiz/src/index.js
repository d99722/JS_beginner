const btn = document.querySelector(".js-button"),
  bar = document.querySelector("#js-bar"),
  title = document.querySelector(".js-title"),
  number = document.querySelector("#js-guessNum"),
  info = document.querySelector("h3"),
  result = document.querySelector(".js-result");

function handleBtn() {
  let randomNumber = Math.floor(Math.random() * bar.value);
  info.innerText = `You chose : ${number.value}, the Machine choose : ${randomNumber}`;
  if (parseInt(number.value) === randomNumber) {
    result.innerText = "🔥You won!🔥";
  } else {
    result.innerText = "😂You lost!😂";
  }
}

function handleInput() {
  title.innerText = `Generate a number between 0 and ${bar.value - 1}`;
}

bar.addEventListener("input", handleInput);
btn.addEventListener("click", handleBtn);
