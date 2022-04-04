"use strict";

const ratingNumbers = document.getElementsByClassName("rating-number");
const btnSubmit = document.querySelector(".btn-submit");

for (let i = 0; i < ratingNumbers.length; i++) {
  ratingNumbers[i].addEventListener("click", changeButton);
}

let currentActive = "";

function changeButton(e) {
  let oldActive = document.querySelector(".rating-active");
  oldActive.classList.remove("rating-active", "rating-selected");
  e.target.classList.add("rating-active", "rating-selected");
  currentActive = e.target.innerText;
}

btnSubmit.addEventListener("click", function () {
  if (Number(currentActive) !== 0) {
    document.querySelector(".container-rating").classList.add("hidden");
    document.querySelector(".container-thanks").classList.remove("hidden");
    document.querySelector(
      ".text-rating"
    ).innerText = `You selected ${currentActive} out of 5`;
  } else {
    alert("Please select a rating");
  }
});
