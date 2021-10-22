import createTaskList from "./createTaskList.js";
import showHideModal from "./showHideModal.js";

import {
  toDoTask,
  modal,
  inputText,
  inputTitle,
  ModalLabel,
  buttonAddLabel,
  darkTheme,
} from "./script.js";

// task function

const editTask = (index, id) => {
  document.querySelector(".selected").remove();

  showHideModal(modal);

  modal.setAttribute("edit", `${id}`);
  ModalLabel.innerHTML = "Edit task";
  buttonAddLabel.innerHTML = "Edit task";
  inputText.value = toDoTask[index].text;
  inputTitle.value = toDoTask[index].title;
  const priority = toDoTask[index].priority;
  document.querySelector(`#${priority}`).checked = true;
};

const changeStatusTask = (index) => {
  toDoTask[index].status = !toDoTask[index].status;
  createTaskList(toDoTask, darkTheme);
};

const deleteTask = (index) => {
  const numberOfDeleted = 1;
  toDoTask.splice(index, numberOfDeleted);
  createTaskList(toDoTask, darkTheme);
};

export { deleteTask, changeStatusTask, editTask };
