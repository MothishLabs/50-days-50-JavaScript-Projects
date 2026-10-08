let cat_container = document.querySelector(".cat-container");
let likes = document.querySelector(".times-liked");
let x = document.querySelector(".heart-img-animation");

let count = 0;

cat_container.addEventListener("dblclick", () => {
  count++;
  likes.textContent = count;
  x.classList.remove("active");
  setTimeout(() => {
    x.classList.add("active");
  }, 400);
});
