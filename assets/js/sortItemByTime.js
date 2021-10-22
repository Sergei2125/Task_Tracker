import createTaskList from "./createTaskList.js";

const sortItemByTime = (toDoTask) => {
  const sortedArray = toDoTask.sort((a, b) => {
    return a.id > b.id ? 1 : -1;
  });
  createTaskList(sortedArray);
};
export default sortItemByTime;
