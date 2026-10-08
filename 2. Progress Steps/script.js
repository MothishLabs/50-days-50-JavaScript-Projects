"use strict";

const circles = document.querySelectorAll(".circle");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let circle_index = 0;

next.addEventListener("click", () => {
  if (circle_index < circles.length - 1) {
    circle_index += 1;
    circles[circle_index].classList.add("active");
  }

  if (circle_index >= 1) {
    prev.disabled = false;
    prev.classList.remove("inactive-btn-behaviour");
    prev.classList.add("active-btn-color");
  }

  if (circle_index === circles.length - 1) {
    next.disabled = true;
    next.classList.remove("active-btn-color");
    next.classList.add("inactive-btn-behaviour");
  }
});

prev.addEventListener("click", () => {
  if (circle_index > 0) {
    circles[circle_index].classList.remove("active");
    circle_index--;
    next.disabled = false;
    next.classList.add("active-btn-color");
    next.classList.remove("inactive-btn-behaviour");
  }

  if (circle_index === 0) {
    prev.classList.add("inactive-btn-behaviour");
    prev.classList.remove("active-btn-color");
    prev.disabled = true;
  }
});
