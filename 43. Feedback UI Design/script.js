"use strict";

let submit_btn = document.querySelector(".btn");
let x = document.querySelector(".feedback-container");
let final_report = document.querySelector(".feedback-report-container");
let emojis = document.querySelectorAll(".emoji-box");
let show_feedback = document.querySelector(".feedback-report");

let feedback_text = ["Satisified", "Neutral", "Unhappy"];

show_feedback.textContent = feedback_text[0];

emojis.forEach((emoji, idx) => {
  emoji.addEventListener("click", () => {
    emojis.forEach((emoji_box_shadow) => {
      emoji_box_shadow.classList.remove("active-emoji");
    });
    show_feedback.textContent = feedback_text[idx + 0];
    emoji.classList.add("active-emoji");
  });
});

submit_btn.addEventListener("click", () => {
  x.classList.add("submitted");
  final_report.classList.add("active-report");
});
