let twitter_ele = document.querySelector(".t-count");
let youtube_ele = document.querySelector(".y-count");
let facebook_ele = document.querySelector(".f-count");

let initial_value = 0;

let count_begin = setInterval(() => {
  if (initial_value <= 12000) {
    twitter_ele.textContent = initial_value;
    if (initial_value <= 5000) {
      youtube_ele.textContent = initial_value;
    }
    if (initial_value <= 7500) {
      facebook_ele.textContent = initial_value;
    }
    initial_value += 20;
  } else {
    clearInterval(count_begin);
  }
}, 1);
