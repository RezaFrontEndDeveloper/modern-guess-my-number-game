"use strict";
function randomNumber() {
  return Math.floor(Math.random() * 11);
}
let number = randomNumber();
console.log(number);
const clientValue = document.querySelector(".input");
const uiButton = document.querySelector(".form_button");
const upBox = document.querySelector(".guide_box_up ");
const okBox = document.querySelector(".guide_box_ok");
const downBox = document.querySelector(".guide_box_down");
const status1 = document.querySelector(".status");
const guessNumber = document.querySelector(".guess_number");
const guessRecord = document.querySelector(".guess_record");
const resetBtn = document.querySelector(".reset");
let score = 20;
let record = 0;
guessRecord.textContent = record;
console.log(score);

uiButton.addEventListener("click", function () {
  if (!clientValue.value) {
    status1.textContent = "یک مقدار وارد کنید ";
    status1.style.color = "red";
    return;
  }

  if (clientValue.value < 0 || clientValue.value > 10) {
    status1.textContent = "عدد باید بین 0 و 10 باشد  ";
    status1.style.color = "red";
    return;
  }

  if (number > Number(clientValue.value)) {
    status1.textContent = "برو بالاتر";
    score--;
    guessNumber.textContent = score;
    upBox.classList.add("active_box");
    downBox.classList.remove("active_box");
    okBox.classList.remove("active_box_ok");
  }

  if (number < Number(clientValue.value)) {
    status1.textContent = "بیا پایین سرمون درد گرفت";
    score--;
    guessNumber.textContent = score;
    upBox.classList.remove("active_box");
    downBox.classList.add("active_box");
    okBox.classList.remove("active_box_ok");
  }

  if (number === Number(clientValue.value)) {
    status1.textContent = "درسته ";
    guessNumber.textContent = score;
    upBox.classList.remove("active_box");
    downBox.classList.remove("active_box");
    okBox.classList.add("active_box_ok");
    if (score > record) {
      record = score;
      guessRecord.textContent = record;
    }
  }
});

resetBtn.addEventListener("click", function () {
  score = 20;
  number = randomNumber();
  console.log("again", number);
  guessNumber.textContent = score;
  status1.textContent = "";
  okBox.classList.remove("active_box_ok");
  upBox.classList.remove("active_box");
  downBox.classList.remove("active_box");
});
