"use strict";

let submit_btn = document.querySelector(".submit-btn");
let user_email = document.querySelector(".email");
let user_password = document.querySelector(".password");
let indication = document.querySelector(".reply-msg");

submit_btn.addEventListener("click", (e) => {
  e.preventDefault();

  let user_email_value = user_email.value;
  let user_pass_value = user_password.value;
  indication.style.color = "red";

  if (user_email_value === "") {
    indication.textContent = "Empty Email Not Allowed";
  } else if (user_pass_value === "") {
    indication.textContent = "Empty Password Not Allowed";
  } else if (user_pass_value.length < 8) {
    indication.textContent = "Small Password";
  } else if (!/\d/.test(user_pass_value)) {
    indication.textContent =
      "Bad Password - No Numeric Values in Your Password";
  } else if (!/[^a-zA-Z0-9]/.test(user_pass_value)) {
    indication.textContent =
      "Bad Password - No Special Characters in Your Password";
  } else {
    indication.textContent = "Strong Password";
    indication.style.color = "green";
  }
});
