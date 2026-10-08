"use strict";

let menu_btn = document.querySelector(".menu-img");
let close_btn = document.querySelector(".close-img");
let side_navs = document.querySelectorAll(".nav-container");

menu_btn.addEventListener("click", () => {
  menu_btn.style.display = `none`;
  let delay_seconds = 0;

  side_navs.forEach((e) => {
    e.style.transition = `left 0.2s linear ${delay_seconds}s`;
    delay_seconds += 0.2;
  });

  side_navs.forEach((side_nav) => {
    side_nav.classList.add("activate");
  });
});

close_btn.addEventListener("click", () => {
  let delay_seconds = 0.4;

  side_navs.forEach((e) => {
    e.style.transition = `left 0.2s linear ${delay_seconds}s`;
    delay_seconds -= 0.2;
  });

  side_navs.forEach((side_nav, idx) => {
    side_nav.classList.remove("activate");
  });

  let menu_interval = setInterval(() => {
    menu_btn.style.display = `block`;
    clearInterval(menu_interval);
  }, 400);
});
