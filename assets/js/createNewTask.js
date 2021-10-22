const createNewTask = (inputTitle, inputText, inputPriority) => {
  const currentDate = new Date();
  const taskId = +currentDate;

  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  const taskDate = `${currentDate.getHours()}:${minutes} ${currentDate.getDate()}.${
    currentDate.getMonth() + 1
  }.${currentDate.getFullYear()}`;

  return {
    status: true,
    title: inputTitle,
    text: inputText,
    priority: inputPriority,
    id: taskId,
    date: taskDate,
  };
};

export default createNewTask;
