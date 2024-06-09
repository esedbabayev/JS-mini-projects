"use strict";

const addBtn = document.getElementById("add");

const taskListContainer = document.querySelector(".taskList");
const taskList = document.querySelector(".taskList ul");
const addInput = document.getElementById("input");

let tasks = [];

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const givenText = addInput.value;

  if (!givenText) {
    return;
  }
  tasks.push(givenText);
  displayTasks();

  addInput.value = "";
})

const displayTasks = () => {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    taskList.innerHTML += `<li>
      <span>${task}</span>
      <button id="delete" class="btn delete">Delete Task</button>
      </li>`
  });


const deleteBtns = document.querySelectorAll(".delete");

deleteBtns.forEach((deleteBtn, index) => {
  deleteBtn.addEventListener("click", () => {
    deletetask(index);
  })
})
};


const deletetask = (index) => {
  tasks.splice(index, 1);
  displayTasks();
}
