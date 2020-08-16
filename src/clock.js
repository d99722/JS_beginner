const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const dayTitle = document.querySelector(".date-title");

const week = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);

const monthList = new Array(
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
);

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 13 ? `am ${hours}` : `pm ${hours - 12}`}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function getDay() {
  const date = new Date();
  const month = date.getMonth();
  const dateToday = date.getDate();
  const dayLabel = date.getDay();
  const todayLabel = week[dayLabel];
  const monthLabel = monthList[month];

  dayTitle.innerText = `${monthLabel} ${dateToday}, ${todayLabel}`;
}

function init() {
  getTime();
  getDay();
  setInterval(getTime, 10);
}

init();
