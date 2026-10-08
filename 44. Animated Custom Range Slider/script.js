"use strict";

let display_number = document.querySelector(".range-number");
let ui_slider = document.querySelector(".range-slider");
let ui_indicator = document.querySelector(".slider-range-indicator");

ui_slider.addEventListener("input", () => {
  ui_indicator.style.left = `${ui_slider.value}%`;
  display_number.textContent = ui_slider.value;
});
