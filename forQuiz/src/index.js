const select = document.querySelector("select"),
  option = select.querySelectorAll("option");
const NATION_LS = "country";

function saveNation(text) {
  localStorage.setItem(NATION_LS, text);
}

function handleSelect(event) {
  event.preventDefault();
  const currentValue = event.target.value;
  saveNation(currentValue);
  paintNation(currentValue);
}

function askForNation() {
  select.addEventListener("change", handleSelect);
}

function paintNation(text) {
  console.log(text);
  for (var i = 0; i < option.length; i++) {
    option[i].removeAttribute("selected");
  }
  const targetNation = document.querySelector(`option[value=${text}`);
  targetNation.setAttribute("selected", "");
}

function loadNation() {
  const currentNation = localStorage.getItem(NATION_LS);
  if (currentNation !== null) {
    paintNation(currentNation);
  }
}

function init() {
  loadNation();
  askForNation();
}

init();
