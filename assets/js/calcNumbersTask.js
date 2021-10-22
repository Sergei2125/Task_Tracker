import { activeTask, completedTask } from "./script.js";

const calcNumbersTask = (toDoTask) => {
  let numberCompletedTask = 0;
  let numberTodoTask = toDoTask.filter((elem) => {
    if (!elem.status) {
      numberCompletedTask++;
    }
    return elem.status;
  }).length;
  activeTask.innerHTML = `ToDo (${numberTodoTask})`;
  completedTask.innerHTML = `Completed (${numberCompletedTask})`;
};

export default calcNumbersTask;
