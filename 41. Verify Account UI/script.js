"use strict";

let input_boxes = document.querySelectorAll(".input-num");

input_boxes.forEach((input_box, idx) => {
  input_box.addEventListener("input", () => {
    if (!/^[0-9]\d*$/.test(input_box.value)) {
      input_box.value = "";
    } else if (input_box.value.length === 1) {
      input_box.classList.remove("active-box");
      input_box.blur();
      if (idx + 1 < input_boxes.length) {
        input_boxes[idx + 1].classList.add("active-box");
        input_boxes[idx + 1].focus();
      }
    }
  });
});
