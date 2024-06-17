// "use strict";

const addBtn = document.getElementById("add");

const taskListContainer = document.querySelector(".taskList");
const taskList = document.querySelector(".taskList ul");
const addInput = document.getElementById("input");

let tasks;

// first version

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const givenValue = addInput.value.trim();
  if (!givenValue.length) return;

  tasks.push(givenValue);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTask();
  addInput.value = "";
});

const displayTask = () => {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const liELment = document.createElement("li");
    const spanELement = document.createElement("span");

    // delete btn
    const deleteButtonELement = document.createElement("button");
    const deleteIcon = document.createElement("i");
    deleteButtonELement.className = "btn";
    deleteIcon.className = "fa-solid fa-trash";

    // edit btn
    const editButtonELement = document.createElement("button");
    const editIcon = document.createElement("i");
    editButtonELement.className = "btn";
    editIcon.className = "fa-solid fa-pen";

    // task element
    spanELement.textContent = task;

    deleteButtonELement.insertAdjacentElement("afterbegin", deleteIcon);
    editButtonELement.insertAdjacentElement("afterbegin", editIcon);
    liELment.insertAdjacentElement("afterbegin", spanELement);
    liELment.insertAdjacentElement("beforeend", editButtonELement);
    liELment.insertAdjacentElement("beforeend", deleteButtonELement);

    taskList.insertAdjacentElement("afterbegin", liELment);

    deleteButtonELement.addEventListener("click", () => {
      deleteTask(index);
    });

    editButtonELement.addEventListener("click", () => {
      editTask(index, task);
    })
  });
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTask();
};

const editTask = (index, task) => {
  const editedTask = prompt("Edit your task", task);

  if (!editedTask) return;

  tasks.splice(index, 1, editedTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTask();
};

let fetchedData = JSON.parse(localStorage.getItem("tasks"))
if (fetchedData && fetchedData.length > 0) {
  tasks = fetchedData;
  displayTask();
} else tasks = [];

// second verison

// `addBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   const givenText = addInput.value;

//   if (!givenText) {
//     return;
//   }
//   tasks.push(givenText);
//   displayTasks();

//   addInput.value = "";
// })

// const displayTasks = () => {
//   taskList.innerHTML = "";

//   tasks.forEach(task => {
//     taskList.innerHTML += `<li>
//       <span>${task}</span>
//       <button id="delete" class="btn delete">Delete Task</button>
//       </li>`
//   });


// const deleteBtns = document.querySelectorAll(".delete");

// deleteBtns.forEach((deleteBtn, index) => {
//   deleteBtn.addEventListener("click", () => {
//     deletetask(index);
//   })
// })
// };


// const deletetask = (index) => {
//   tasks.splice(index, 1);
//   displayTasks();
// }`
