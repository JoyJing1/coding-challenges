// Countdown Clock

setInterval(updateClock, 1000);

function updateClock() {
  console.log("inside updateClock");
  const root = document.getElementsByClassName("root")[0];

  let currentDate = new Date();
  const newYear = new Date(currentDate.getFullYear() + 1, 0,0,0,0,0,0);

  let delta = newYear - currentDate;

  console.log(newYear);
  console.log(delta);

  let seconds = Math.floor((delta / 1000) % 60);
  let minutes = Math.floor((delta / 1000 / 60) % 60);
  let hours = Math.floor((delta / 1000 / 60 / 60) % 24);
  let days = Math.floor(delta / 1000 / 60 / 60 / 24);

  let dayDiv = document.querySelector("span.days");
  dayDiv.innerHTML = days;

  let hourDiv = document.querySelector("span.hours");
  hourDiv.innerHTML = hours;

  let minuteDiv = document.querySelector("span.minutes");
  minuteDiv.innerHTML = minutes;

  let secondDiv = document.querySelector("span.seconds");
  secondDiv.innerHTML = seconds;

  if (delta === 0) {
    alert("Happy New Year!!!");
  }
}
