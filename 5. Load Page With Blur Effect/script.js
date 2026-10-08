"use strict";

let load = document.querySelector(".dynamic-value");
console.log(load);

let count = 1;

let delay = setInterval(() => {
  if (count < 101) {
    load.textContent = count;
    count++;
  } else {
    clearInterval(delay);
  }
}, 30);
