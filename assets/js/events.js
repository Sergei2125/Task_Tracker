document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#inputTitle").value;
  const text = document.querySelector("#inputText").value;
  const priority = document.querySelector(
    'input[name="gridRadios"]:checked'
  ).value;
  if (document.querySelector("#exampleModal").hasAttribute("edit")) {
    const index = document.querySelector("#exampleModal").getAttribute("edit");
    toDoTask[index].title = title;
    toDoTask[index].text = text;
    toDoTask[index].priority = priority;
    document.querySelector("#exampleModal").removeAttribute("edit");
  } else {
    const currentDate = new Date();
    const id = +currentDate;
    let minutes = currentDate.getMinutes();
    if (currentDate.getMinutes() < 10) minutes = "0" + currentDate.getMinutes();
    const date = `${currentDate.getHours()}:${minutes} ${currentDate.getDate()}.${
      currentDate.getMonth() + 1
    }.${currentDate.getFullYear()}`;
    const newTask = new Task(title, text, priority, date, id);
    toDoTask.push(newTask);
  }
  $("#exampleModal").modal("hide");
  updateLocalStorage();
  createTaskList();
});

document
  .querySelector("#flexSwitchCheckDefault")
  .addEventListener("click", () => {
    darkTheme = document.querySelector("#flexSwitchCheckDefault").checked;
    changeColorTheme();
    createTaskList();
    updateLocalStorage();
  });

document
  .querySelector('button[data-target="#exampleModal"]')
  .addEventListener("click", () => {
    document.querySelector("#exampleModalLabel").textContent = "Add task";
    document.querySelector("button[type=submit]").textContent = "Add task";
    document.querySelector("form").reset();
    document.querySelector('input[name="gridRadios"]').checked = true;
  });

document.querySelector(".mx-2").addEventListener("click", function () {
  toDoTask.sort((a, b) => {
    return a.id > b.id ? 1 : -1;
  });
  createTaskList();
});
document.querySelector(".mx-1").addEventListener("click", function () {
  toDoTask.sort((a, b) => {
    return a.id < b.id ? 1 : -1;
  });
  createTaskList();
});
