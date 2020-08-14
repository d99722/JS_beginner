const resetBtn = document.querySelector(".reset"),
  result = document.querySelector(".result2"),
  numbers = document.querySelectorAll(".num"),
  operators = document.querySelectorAll(".operator"),
  eqaul = document.querySelector(".equal");

let calArray = [];

function handleReset() {
  result.innerText = "0";
  calArray = [];
}

function handleNumber() {
  const target = parseInt(event.target.innerText);
  const checker = calArray.length - 1;
  if (calArray.length < 1 || isNaN(calArray[0])) {
    calArray = [];
    calArray.push(target);
    result.innerText = calArray[0];
  } else if (!isNaN(calArray[checker])) {
    const newResult = calArray[checker] * 10 + target;
    calArray[checker] = newResult;
    result.innerText = calArray[checker];
  } else {
    result.innerText = target;
    calArray.push(target);
  }
}

function calculating() {
  const op = calArray[1];
  let newValue = null;
  if (op === "+") {
    newValue = calArray[0] + calArray[2];
  } else if (op === "-") {
    newValue = calArray[0] - calArray[2];
  } else if (op === "*") {
    newValue = calArray[0] * calArray[2];
  } else if (op === "/") {
    newValue = calArray[0] / calArray[2];
  }
  calArray = [];
  calArray.push(newValue);
}

function handleOp() {
  const target = event.target.innerText;
  if (calArray[1] == null) {
    calArray.push(target);
  } else if (isNaN(calArray[1])) {
    calculating();
    calArray.push(target);
  }
  result.innerText = calArray[0];
}

function handleEqual() {
  calculating();
  result.innerText = calArray[0];
}

for (const operator of operators) {
  operator.addEventListener("click", handleOp);
}
for (const number of numbers) {
  number.addEventListener("click", handleNumber);
}
resetBtn.addEventListener("click", handleReset);
eqaul.addEventListener("click", handleEqual);
