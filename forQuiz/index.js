// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");

function getTime() {
  // Don't delete this.
  const gonDay = new Date("2020-08-15:00:00:00+0900");
  const date = new Date();
  const diffDate = new Date(gonDay - date);

  if (diffDate < 0) {
    clockTitle.innerText = "After 2021 NUTSDAY!";
  } else {
    const diffDay = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor((diffDate / (1000 * 60 * 60)) % 24);
    const diffMin = Math.floor((diffDate / (1000 * 60)) % 60);
    const diffSec = Math.floor((diffDate / 1000) % 60);

    clockTitle.innerText = `${diffDay}d ${
      diffHour < 10 ? `0${diffHour}` : diffHour
    }h ${diffMin < 10 ? `0${diffMin}` : diffMin}m ${
      diffSec < 10 ? `0${diffSec}` : diffSec
    }s`;
  }

  //   const testDate = diffDate / (1000 * 60 * 60);
  //   console.log(testDate);
  //   console.log(testDate / 24);
  //   console.log(testDate % 24);
}

function init() {
  getTime();
  setInterval(getTime, 100);
}

init();
