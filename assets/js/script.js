import sortItemByTime from "./sortItemByTime.js";
import createTaskList from "./createTaskList.js";
import createNewTask from "./createNewTask.js";
import showHideModal from "./showHideModal.js";
import {
  updateTaskFromLocalStorage,
  updateThemeFromLocalStorage,
} from "./updateFromLocalStorage.js";

import { showButtonMenu, selectedIndex } from "./showButtonMenu.js";

const modal = document.querySelector("#exampleModal");
const form = document.querySelector("form");
const inputTitle = document.querySelector("#inputTitle");
const inputText = document.querySelector("#inputText");
const buttonIncreaseSort = document.querySelector(".mx-2");
const buttonReduceSort = document.querySelector(".mx-1");
const settingMenu = document.querySelector("#dropdownMenuSettings");
const dropdownMenuColor = document.querySelector(".dropdown-menu");
const taskList = document.querySelector(".col-10");
const buttonAddTask = document.querySelector("#addTask");
const activeTask = document.querySelector(".my-1");
const complitedTask = document.querySelector(".my-2");
const priorityLow = document.querySelector("#Low");
const priorityMedium = document.querySelector("#Medium");
const priorityHigh = document.querySelector("#High");
const ModalLabel = document.querySelector("#exampleModalLabel");
const buttonAddLabel = document.querySelector(".createTask");
const inputChangeColor = document.querySelector("#customSwitch1");
const body = document.querySelector("body");

let toDoTask = [];

let darkTheme = false;
let sortValueAscending = true;

// update from local localStorage

toDoTask = updateTaskFromLocalStorage(localStorage.listTaskInStorage);
darkTheme = updateThemeFromLocalStorage(localStorage.themeOfApp);
createTaskList(toDoTask);

// create task from form

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputPriority = priorityLow.value;
  if (priorityMedium.checked) {
    inputPriority = priorityMedium.value;
  } else if (priorityHigh.checked) {
    inputPriority = priorityHigh.value;
  }

  if (modal.hasAttribute("edit")) {
    toDoTask[selectedIndex].title = inputTitle.value;
    toDoTask[selectedIndex].text = inputText.value;
    toDoTask[selectedIndex].priority = inputPriority;

    modal.removeAttribute("edit");
  } else {
    const newTask = createNewTask(
      inputTitle.value,
      inputText.value,
      inputPriority
    );
    toDoTask.push(newTask);
  }

  createTaskList(toDoTask);
  showHideModal(modal);
});

// sort Tasks

buttonIncreaseSort.addEventListener("click", () => {
  toDoTask = sortItemByTime(toDoTask);
  createTaskList(toDoTask);
});

buttonReduceSort.addEventListener("click", () => {
  toDoTask = sortItemByTime(toDoTask).reverse();
  createTaskList(toDoTask);
});

// open/close colorMenu

settingMenu.addEventListener("click", () => {
  dropdownMenuColor.classList.toggle("show");
});

// open/close Modal
buttonAddTask.addEventListener("click", () => {
  ModalLabel.innerHTML = "Add task";
  buttonAddLabel.innerHTML = "Add task";
  form.reset();
  priorityLow.checked = true;
  showHideModal(modal);
});

modal.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-dismiss")) {
    showHideModal(modal);
  }
});

//dropDownMenuTask

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-menu")) {
    const taskTarget = e.target.closest("li");
    showButtonMenu(taskTarget);
  }
});

// changeThemeColor
inputChangeColor.addEventListener("click", () => {
  darkTheme = !darkTheme;
  body.classList.toggle("dark");
  const valueOfTheme = JSON.stringify(darkTheme);
  localStorage.setItem("themeOfApp", valueOfTheme);
});

export {
  darkTheme,
  toDoTask,
  activeTask,
  complitedTask,
  modal,
  inputText,
  inputTitle,
  ModalLabel,
  buttonAddLabel,
  inputChangeColor,
  body,
};
