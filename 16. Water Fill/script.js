let a = document.querySelectorAll(".small-cup");
let remaining_water_quantity = document.querySelector(".Remaining");
let fill_water_quantity = document.querySelector(".fill-water");

let empty_container_remaining = document.querySelector(".empty-remaining");
let filled_water = document.querySelector(".filled-water");

let fill_water = 12.5;

a.forEach((ele, indx) => {
  ele.addEventListener("click", () => {
    a.forEach((deactivate) => {
      deactivate.classList.remove("active");
    });
    let total_cup_of_water;
    for (let i = 0; i <= indx; i++) {
      a[i].classList.add("active");
      total_cup_of_water = fill_water * (indx + 1);
      fill_water_quantity.style.height = `${total_cup_of_water}%`;
      remaining_water_quantity.style.height = `${100 - total_cup_of_water}%`;

      empty_container_remaining.textContent = 100 - total_cup_of_water;
      filled_water.textContent = total_cup_of_water;
    }
  });
});
