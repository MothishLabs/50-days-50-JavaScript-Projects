"use strict";

let x = document.querySelector(".nav-container");
let y = document.querySelector(".list-btn");
let z = document.querySelector(".cancel-btn");

y.addEventListener("click", () => {
  x.classList.add("active");
  y.classList.add("hide-btn");
  z.classList.remove("hide-btn");
});

z.addEventListener("click", () => {
  x.classList.remove("active");
  y.classList.remove("hide-btn");
  z.classList.add("hide-btn");
});
