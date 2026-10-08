"use strict";

let textEle = document.querySelector(".animated-text");

let text = "We Love Programming!";
let splitted_text = text.split("");
let store_words = [];
let rejoin_words = "";

let index = 0;

let text_Animation = setInterval(() => {
  if (index < splitted_text.length) {
    store_words.push(splitted_text[index]);
    rejoin_words = store_words.join("");
    console.log(rejoin_words);
    textEle.textContent = rejoin_words;
    index++;
  } else {
    index = 0;
    store_words = [];
    rejoin_words = "";
  }
}, 100);

// -----------------------chatGpt suggestion----------------------
// "use strict";

// let textEle = document.querySelector(".animated-text");

// let text = "We Love Programming!";
// let index = 0;

// function typeEffect() {
//   if (index <= text.length) {
//     textEle.textContent = text.slice(0, index);
//     index++;
//   } else {
//     clearInterval(timer);

//     // Pause before restarting
//     setTimeout(() => {
//       index = 0;
//       timer = setInterval(typeEffect, 100);
//     }, 1500);
//   }
// }

// let timer = setInterval(typeEffect, 100);
