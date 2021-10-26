import { activeTask, completedTask } from "./script.js";

const calcNumbersTask = (toDoTask) => {
  let numberCompletedTask = 0;
  let numberTodoTask = toDoTask.filter((elem) => {
    if (!elem.inProgress) {
      numberCompletedTask++;
    }
    return elem.inProgress;
  }).length;
  activeTask.textContent = `ToDo (${numberTodoTask})`;
  completedTask.textContent = `Completed (${numberCompletedTask})`;
};

export default calcNumbersTask;
