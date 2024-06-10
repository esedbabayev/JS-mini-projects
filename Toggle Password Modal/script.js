const openModal = document.getElementById("openModal")
const modalDiv = document.getElementById("modalDiv")
const passwordHolder = document.getElementById("passwordHolder")
const x = document.getElementById("x")
const input = document.getElementById("input")
const hiddenPassword = document.getElementById("hiddenPassword")
const shownPassword = document.getElementById("shownPassword")
const closeBtn = document.getElementById("closeBtn")
const saveChangesBtn = document.getElementById("saveChangesBtn")

openModal.addEventListener("click", () => {
  modalDiv.classList.add("hidden")
  passwordHolder.classList.remove("hidden")
});

x.addEventListener("click", () => {
  passwordHolder.classList.add("hidden")
  modalDiv.classList.remove("hidden")
  input.value = ""
  shownPassword.classList.add("hidden")
  hiddenPassword.classList.remove("hidden")
});

hiddenPassword.addEventListener("click", () => {
  hiddenPassword.classList.add("hidden")
  shownPassword.classList.remove("hidden")
  input.type = "text"
});

shownPassword.addEventListener("click", () => {
  shownPassword.classList.add("hidden")
  hiddenPassword.classList.remove("hidden")
  input.type = "password"
});

closeBtn.addEventListener("click", () => {
  passwordHolder.classList.add("hidden")
  modalDiv.classList.remove("hidden")
  input.value = ""
  shownPassword.classList.add("hidden")
  hiddenPassword.classList.remove("hidden")
});

saveChangesBtn.addEventListener("click", () => {
  if (input.value.length > 8) {
    alert("All changes are saved")
  } else if (!input.value) {
    alert("No changes to save")
  } else {
    alert("The password must contain least 8 characters")
  }
});


