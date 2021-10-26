import createTaskList from "./createTaskList.js";
import showModal from "./showModal.js";

import {
  toDoTask,
  modal,
  inputText,
  inputTitle,
  ModalLabel,
  buttonAddLabel,
} from "./script.js";

// task function

const editTask = (index, id) => {
  showModal(modal);

  modal.setAttribute("edit", `${id}`);
  ModalLabel.textContent = "Edit task";
  buttonAddLabel.textContent = "Edit task";
  inputText.value = toDoTask[index].text;
  inputTitle.value = toDoTask[index].title;
  const priority = toDoTask[index].priority;
  document.querySelector(`#${priority}`).checked = true;
};

const changeStatusTask = (index) => {
  toDoTask[index].inProgress = !toDoTask[index].inProgress;
  createTaskList(toDoTask);
};

const deleteTask = (index) => {
  const numberOfDeleted = 1;
  toDoTask.splice(index, numberOfDeleted);
  createTaskList(toDoTask);
};

export { deleteTask, changeStatusTask, editTask };
