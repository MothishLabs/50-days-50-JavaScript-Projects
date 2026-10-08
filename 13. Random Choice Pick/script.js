// ---------------------------   My Code   ---------------------------

let p_tag = document.querySelectorAll(".ele");
let begin = document.querySelector(".btn");

let rand_num = 1;

begin.addEventListener("click", (x) => {
  begin.disabled = true;
  p_tag[rand_num - 1].classList.remove("bf");
  p_tag[rand_num - 1].classList.remove("active");

  rand_num = Math.trunc(Math.random() * 10) + 1;

  let loop_count = 98 + rand_num;
  let index = 0;

  let run_animation = setInterval(() => {
    if (loop_count > 0) {
      console.log(loop_count);
      if (index < 10) {
        p_tag[index].classList.remove("active");

        if (index < 9) {
          p_tag[index + 1].classList.add("active");
        }
        index++;
      } else {
        index = 0;
        p_tag[index].classList.add("active");
      }
      loop_count--;
    } else {
      p_tag[rand_num - 1].classList.add("bf");
      clearInterval(run_animation);
      begin.disabled = false;
    }
  }, 100);
});

// ---------------------------------------    ChatGpt Recommadation (UI Gluitch Fix)    ---------------------------------------

// let p_tag = document.querySelectorAll(".ele");
// let begin = document.querySelector(".btn");

// begin.addEventListener("click", () => {
//   begin.disabled = true;

//   const length = p_tag.length;

//   // reset all
//   p_tag.forEach((el) => el.classList.remove("active", "bf"));

//   let rand_num = Math.trunc(Math.random() * length);
//   let loop_count = 98 + rand_num;

//   let index = 0;
//   p_tag[index].classList.add("active");

//   let run_animation = setInterval(() => {
//     p_tag[index].classList.remove("active");

//     index = (index + 1) % length;

//     p_tag[index].classList.add("active");

//     loop_count--;

//     if (loop_count === 0) {
//       p_tag[index].classList.add("bf");
//       clearInterval(run_animation);
//       begin.disabled = false;
//     }
//   }, 100);
// });
