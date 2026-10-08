"use strict";
let plus_btn = document.querySelectorAll(".plus-btn");
let minus_btn = document.querySelectorAll(".minus-btn");
let display_answer = document.querySelectorAll(".answer-block");
let change_bg = document.querySelectorAll(".QA-layout");

plus_btn.forEach((x, i) => {
  x.addEventListener("click", (x) => {
    change_bg[i].classList.add("active-QA");
    display_answer[i].classList.add("show-answer");
    plus_btn[i].classList.add("btn-hide");
    minus_btn[i].classList.remove("btn-hide");
  });
});

minus_btn.forEach((x, i) => {
  x.addEventListener("click", () => {
    change_bg[i].classList.remove("active-QA");
    display_answer[i].classList.remove("show-answer");
    minus_btn[i].classList.add("btn-hide");
    plus_btn[i].classList.remove("btn-hide");
  });
});

// let count = 0;

// let x = () => {
//   if (count < 10) {
//     console.log(Math.trunc(Math.random() * 11));
//     count++;
//   } else {
//     clearInterval(asd);
//   }
// };

// let asd = setInterval(x, 1000);
