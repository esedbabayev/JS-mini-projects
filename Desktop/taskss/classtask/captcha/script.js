const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

const captchaText = document.getElementById("captcha__text");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

let captcha = "";

const arr = numbers.concat(upperCaseLetters, lowerCaseLetters);

const randomGenerator = () => {
    for (let i = 0; i < 6; i++) {
        captcha += arr[Math.floor(Math.random() * arr.length)];
        captchaText.textContent = captcha
    };
};

randomGenerator();

input.addEventListener("input", () => {
    if (input.value === captcha) {
        input.style.borderColor = "green"
        input.style.color = "green"
        btn.style.backgroundColor = "green"
        input.style.outline = "none"
        btn.style.cursor = "pointer"
    } else {
        input.style.borderColor = "grey"
        input.style.color = "grey"
        btn.style.backgroundColor = "grey"
        btn.style.cursor = "not-allowed"
    }

    if (input.value !== captcha && input.value.length === 6) {
        input.style.borderColor = "red"
        input.style.color = "red"
        btn.style.backgroundColor = "red"
    }
});

input.addEventListener("keypress", (e) => {
    if (e.target.value.length === 6) {
        e.preventDefault();
    }
})


