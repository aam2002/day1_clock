let day = document.querySelector(".day");
let date = document.querySelector(".date");
let month = document.querySelector(".months");
let year = document.querySelector(".year");
let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let seconds = document.querySelector(".seconds");
let am_pm = document.querySelector(".Am_pm");

const dayValue = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

setInterval(() => {
  let Get = new Date();
  day.innerText = dayValue[Get.getDay()];
  min.innerText = Get.getMinutes();
  hour.innerText = Get.getHours() % 12;
  seconds.innerText = Get.getSeconds();
  am_pm.innerText = Get.getHours() > 12 ? "PM" : "AM";
  date.innerText = Get.getDate();
  month.innerText = Get.getMonth();
  year.innerText = Get.getFullYear();
}, 1);
