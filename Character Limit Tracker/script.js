const current = document.getElementById("current");
const text = document.getElementById("text");
const characters = document.getElementById("characters");


text.addEventListener("input", () => {
  const textValue = text.value;
  if (textValue) {
    characters.classList.add("active");
  } else {
    characters.classList.remove("active");
  }

  current.innerHTML = textValue.length;

  if (textValue.length > 10) {
    characters.style.color = "red"
    text.style.color = "red"
    text.style.borderColor = "red"
    } else {
      characters.style.color = "#5f0a87"
      text.style.color = "#5f0a87"
      text.style.borderColor = "#5f0a87"
  }
})