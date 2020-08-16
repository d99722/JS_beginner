const things = document.querySelector(".things"),
  tdl = document.querySelector(".toDoList");

function handleThingsClick() {
  things.style.zIndex = 1;
  tdl.style.zIndex = 0;
}

function handleTdlClick() {
  things.style.zIndex = 0;
  tdl.style.zIndex = 1;
}

things.addEventListener("click", handleThingsClick);
tdl.addEventListener("click", handleTdlClick);
