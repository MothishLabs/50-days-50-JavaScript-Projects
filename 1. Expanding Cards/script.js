"use strict";

const images = document.querySelectorAll(".bg_img");

images.forEach((img) => {
  img.addEventListener("click", (x) => {
    x.preventDefault();
    images.forEach((img) => {
      img.classList.remove("active");
    });
    img.classList.add("active");
  });
});
