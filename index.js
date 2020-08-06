const title = document.querySelector("body");
const MAX_WIDTH = window.screen.availWidth;

function handleResize() {
  const CURRENT_WIDTH = window.innerWidth;
  if (CURRENT_WIDTH > MAX_WIDTH * 0.75) {
    remove();
    title.classList.add("first");
  } else if (CURRENT_WIDTH > MAX_WIDTH * 0.5) {
    remove();
    title.classList.add("second");
  } else {
    remove();
  }
}

function remove() {
  title.classList.remove("first");
  title.classList.remove("second");
  title.classList.remove("third");
}

window.addEventListener("resize", handleResize);
