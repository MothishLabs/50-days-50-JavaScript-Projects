"use strict";

let x = document.querySelectorAll(".dynamic-grow");
console.log(x);

x.forEach((expand) => {
  expand.addEventListener("mouseenter", () => {
    expand.classList.add("active");
  });
});

x.forEach((expand) => {
  expand.addEventListener("mouseleave", () => {
    expand.classList.remove("active");
  });
});
