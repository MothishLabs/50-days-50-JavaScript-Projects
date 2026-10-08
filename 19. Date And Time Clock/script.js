let x = document.querySelector(".btn-style");
let y = document.querySelector(".container");

let dateEle = document.querySelector(".date");
let monthEle = document.querySelector(".month");
let dayEle = document.querySelector(".day");
let hoursEle = document.querySelector(".hour");
let minutesEle = document.querySelector(".minute");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
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
  "Dec",
];

x.addEventListener("click", () => {
  if (x.classList.contains("black-btn")) {
    x.classList.remove("black-btn");
    x.classList.add("white-btn");
    y.classList.add("black-model");
    x.textContent = "Turn On White Mode";
  } else if (x.classList.contains("white-btn")) {
    x.classList.remove("white-btn");
    x.classList.add("black-btn");
    y.classList.remove("black-model");
    x.textContent = "Turn On Dark Mode";
  }
});

let time;
let date;
let month;
let day;
let hour;
let minute;

let initial_Ui_time_To_Display = setInterval(() => {
  time = new Date();
  date = time.getDate();
  month = months[time.getMonth()];
  day = days[time.getDay()];
  hour = time.getHours();
  hour = hour % 12 || 12;
  minute = String(time.getMinutes()).padStart(2, "0");

  dateEle.textContent = date;
  monthEle.textContent = month;
  dayEle.textContent = day;
  hoursEle.textContent = hour;
  minutesEle.textContent = minute;
  clearInterval(initial_Ui_time_To_Display);
}, 0);

let per_min_update = setInterval(() => {
  time = new Date();
  date = time.getDate();
  month = months[time.getMonth()];
  day = days[time.getDay()];
  hour = time.getHours();
  hour = hour % 12 || 12;
  minute = String(time.getMinutes()).padStart(2, "0");

  dateEle.textContent = date;
  monthEle.textContent = month;
  dayEle.textContent = day;
  hoursEle.textContent = hour;
  minutesEle.textContent = minute;
}, 60000);
