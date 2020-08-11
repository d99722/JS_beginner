const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  finList = document.querySelector(".js-finList");

const PENDING = "pending";
const FINISHED = "finished";

let pending = [],
  finished = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;

  if (li.parentNode.className === "js-toDoList") {
    toDoList.removeChild(li);
    const cleanToDos = pending.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    pending = cleanToDos;
    saveToDos();
  } else if (li.parentNode.className === "js-finList") {
    finList.removeChild(li);
    const cleanToDos = finished.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    finished = cleanToDos;
    saveFin();
  }
}

function finToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const parentName = li.parentNode.className;
  const text = li.childNodes[0].innerText;

  if (parentName === "js-toDoList") {
    toDoList.removeChild(li);
    paintFin(text);
    const cleanToDos = pending.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    pending = cleanToDos;
  } else if (parentName === "js-finList") {
    finList.removeChild(li);
    paintToDo(text);
    const cleanToDos = finished.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    finished = cleanToDos;
  }
  saveToDos();
  saveFin();
}

function saveToDos() {
  localStorage.setItem(PENDING, JSON.stringify(pending));
}
function saveFin() {
  localStorage.setItem(FINISHED, JSON.stringify(finished));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = pending.length + 1;
  delBtn.innerText = "🤬";
  finBtn.innerText = "✔️";
  delBtn.addEventListener("click", deleteToDo);
  finBtn.addEventListener("click", finToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  pending.push(toDoObj);
  saveToDos();
}

function paintFin(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = finished.length + 1;
  delBtn.innerText = "🤬";
  finBtn.innerText = "👈";
  delBtn.addEventListener("click", deleteToDo);
  finBtn.addEventListener("click", finToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finBtn);
  li.id = newId;
  finList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  finished.push(toDoObj);
  saveFin();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(PENDING);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function loadFin() {
  const loadedFin = localStorage.getItem(FINISHED);
  if (loadedFin !== null) {
    const parsedFin = JSON.parse(loadedFin);
    parsedFin.forEach(function (toDo) {
      paintFin(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  loadFin();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
