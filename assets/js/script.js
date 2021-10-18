let toDoTask = [];
let darkTheme = false;
class Task {
  status = true;
  constructor(title, text, priority, date, id) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.priority = priority;
    this.date = date;
  }
}
if (localStorage.listTaskInStorage) {
  toDoTask = JSON.parse(localStorage.getItem("listTaskInStorage"));
  darkTheme = JSON.parse(localStorage.getItem("darkThemeApp"));
  createTaskList();
  changeColorTheme();
}
function updateLocalStorage() {
  localStorage.setItem("listTaskInStorage", JSON.stringify(toDoTask));
  localStorage.setItem("darkThemeApp", JSON.stringify(darkTheme));
}
function deleteTask(index) {
  toDoTask.splice(index, 1);
  createTaskList();
  updateLocalStorage();
}
function changeStatusTask(index) {
  toDoTask[index].status = !toDoTask[index].status;
  createTaskList();
  updateLocalStorage();
}
function calcNumbersTask() {
  let numberTodoTask = toDoTask.filter((elem) => {
    return elem.status;
  }).length;
  let numberCompletedTask = toDoTask.filter((elem) => {
    return !elem.status;
  }).length;
  document.querySelector(".num") &&
    document.querySelectorAll(".num").forEach((elem) => elem.remove());

  document
    .querySelector("h3:first-of-type")
    .insertAdjacentHTML(
      "beforeend",
      ` <span class="num">(${numberTodoTask})</span>`
    );
  document
    .querySelector("h3:last-of-type")
    .insertAdjacentHTML(
      "beforeend",
      ` <span class="num">(${numberCompletedTask})</span>`
    );
}
function editTask(index) {
  $("#exampleModal").modal("show");
  document.querySelector("#exampleModal").setAttribute("edit", `${index}`);
  document.querySelector("#exampleModalLabel").textContent = "Edit task";
  document.querySelector("button[type=submit]").textContent = "Edit task";
  const title = document.querySelector("#inputTitle");
  title.value = toDoTask[index].title;
  const text = document.querySelector("#inputText");
  text.value = toDoTask[index].text;
  const priority = toDoTask[index].priority;
  document.querySelector(`#${priority}`).checked = true;
}
