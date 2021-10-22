import calcNumbersTask from "./calcNumbersTask.js";
import createTaskHtml from "./createTaskHtml.js";

const clearCurrentTasksList = () => {
  const currentTask = document.querySelectorAll(".list-group li");
  currentTask.forEach((elem) => {
    elem.remove();
  });
};

const updateLocalStorage = (toDoTask) => {
  const tasksList = JSON.stringify(toDoTask);
  localStorage.setItem("listTaskInStorage", tasksList);
};

const createTaskList = (toDoTask) => {
  clearCurrentTasksList();
  createTaskHtml(toDoTask);
  calcNumbersTask(toDoTask);
  updateLocalStorage(toDoTask);
};

export default createTaskList;
