const sortItemByTime = (toDoTask) => {
  return toDoTask.sort((a, b) => {
    return a.id > b.id ? 1 : -1;
  });
};
export default sortItemByTime;
