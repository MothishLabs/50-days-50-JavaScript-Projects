"use strict";

const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

let alph_option = ["a", "b", "c", "d"];

let question_name = document.querySelector(".question");
let radio_btns = document.querySelectorAll(".radio-btn");
let options = document.querySelectorAll(".option");
let chooise_container = document.querySelector(".Options-container");

let submit_btn = document.querySelector(".submit-btn");

// initilization //////////////////////////////////////
question_name.textContent = quizData[0].question;
options.forEach((option, idx) => {
  option.textContent = quizData[0][alph_option[idx]];
});

radio_btns.forEach((radio_btn) => {
  radio_btn.addEventListener("input", () => {
    submit_btn.disabled = false;
  });
});
///////////////////////////////////////////////////////

let QA_no = 0;
let quiz_score = 0;
let no_btn_clicks = 0;

submit_btn.addEventListener("click", () => {
  no_btn_clicks++;
  submit_btn.disabled = true;

  if (no_btn_clicks >= 4) {
    submit_btn.disabled = false;
  }

  if (no_btn_clicks <= quizData.length) {
    radio_btns.forEach((radio_btn, idx) => {
      let is_radio_selected = radio_btn.checked;
      if (is_radio_selected) {
        let user_answer = quizData[QA_no][alph_option[idx]];

        if (user_answer === quizData[QA_no][quizData[QA_no]["correct"]]) {
          quiz_score++;
        }

        QA_no++;
        radio_btn.checked = false;

        if (QA_no < quizData.length) {
          question_name.textContent = quizData[QA_no].question;
          options.forEach((option, idx) => {
            option.textContent = quizData[QA_no][alph_option[idx]];
          });
        } else {
          question_name.textContent = `You answered ${quiz_score}/4 questions correctly`;
          chooise_container.style.display = `none`;
          submit_btn.textContent = "Reload";
        }
      }
    });
  } else {
    QA_no = 0;
    quiz_score = 0;
    no_btn_clicks = 0;

    question_name.textContent = quizData[QA_no].question;
    options.forEach((option, idx) => {
      option.textContent = quizData[QA_no][alph_option[idx]];
    });

    chooise_container.style.display = `flex`;
    submit_btn.textContent = "Submit";
  }
});
