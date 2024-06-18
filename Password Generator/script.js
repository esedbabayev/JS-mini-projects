"use strict";

const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const special = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

const passwordEl = document.querySelector(".password");

const upperInput = document.getElementById("uppercase");
const lowerInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

// Counter
const counterBtns = document.querySelectorAll(".generator__length-counter button");
const counterEl = document.querySelector(".generator__length-counter span");
const [decreaseBtn, increaseBtn] = counterBtns;

// Generate and Copy
const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector(".copy-btn");

let counter = 8;
let myPassword = "";

generateBtn.addEventListener("click", event => {
  event.preventDefault();

  myPassword = "";

  for (let i = 0; i < counter; i++) {
    myPassword += generateRandom();
  };

  if (!myPassword) {
    passwordEl.textContent = "Please check some inputs";
    passwordEl.style.color = "red"
  } else {
    passwordEl.textContent = myPassword;
    passwordEl.style.color = "black"
  };
});

const generateRandom = () => {
  let chars = [];

  if (upperInput.checked) {
    chars.push(upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]);
  };

  if (lowerInput.checked) {
    chars.push(lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]);
  };

  if (numbersInput.checked) {
    chars.push(numbers[Math.floor(Math.random() * numbers.length)]);
  };

  if (symbolsInput.checked) {
    chars.push(special[Math.floor(Math.random() * special.length)]);
  };

  if (!chars.length) {
    return "";
  };

  return chars[Math.floor(Math.random() * chars.length)];
};

increaseBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (counter < 20) {
    counter++
  };
  counterEl.textContent = counter;
});

decreaseBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (counter > 8) {
    counter--
  };
  counterEl.textContent = counter;
});

copyBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (!myPassword) {
    passwordEl.textContent = "Generate a password first!";
    passwordEl.style.color = "red";
  } else {
    passwordEl.textContent = "Copied successfully";
    passwordEl.style.color = "green";
    navigator.clipboard.writeText(myPassword);
  };
}); 