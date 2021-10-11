let toDoTask = [];
let darkTheme = false;

class Task {
  status = true;
  edit = false;
  constructor(title, text, priority, date) {
    this.title = title;
    this.text = text;
    this.priority = priority;
    this.date = date;
  }
}

if (localStorage.listTaskInStorage) {
  toDoTask = JSON.parse(localStorage.getItem("listTaskInStorage"));
  darkTheme = JSON.parse(localStorage.getItem("darkThemeApp"));
  changeColorTheme();
  createTaskList();
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
  toDoTask[index].status = false;
  createTaskList();
  updateLocalStorage();
}

function editTask(index) {
  if (toDoTask[index].status) {
    toDoTask[index].edit = !toDoTask[index].edit;
    createTaskList();
    updateLocalStorage();
  }
}
function saveChangeTask(index) {
  const editText = document.querySelector("#inputEdit").value;
  toDoTask[index].text = editText;
  editTask(index);
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

function changeColorTheme() {
  if (darkTheme) {
    document.querySelector("body").classList.add("darkBackground");
    document.querySelector("nav").classList.add("darkTitle");
    document.querySelector(".modal-content").classList.add("darkBackground");
  } else {
    document.querySelector("body").classList.remove("darkBackground");
    document.querySelector("nav").classList.remove("darkTitle");
    document.querySelector(".modal-content").classList.remove("darkBackground");
  }
}

function createTaskList() {
  document.querySelectorAll(".list-group li").forEach((elem) => {
    elem.remove();
  });

  toDoTask.map((task, index) => {
    let backTaskColor;
    let newTask;

    if (darkTheme) {
      backTaskColor =
        task.priority === "Low"
          ? "#9c9827"
          : task.priority === "Medium"
          ? "#1d7333"
          : "#992239";
    } else {
      backTaskColor =
        task.priority === "Low"
          ? "#f9fbc4"
          : task.priority === "Medium"
          ? "#c4fbc4"
          : "#f8acb0";
    }

    if (!task.edit) {
      newTask = `<li class="list-group-item d-flex w-100 mb-2" style="background:${backTaskColor}">
    <div class="w-100 mr-2">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${task.title}</h5>
        <div>
          <small class="mr-2">${task.priority} priority</small>
          <small>${task.date}</small>
        </div>
      </div>
      <p class="mb-1 w-100">
      ${task.text}
      </p>
    </div>
    <div class="dropdown m-2 dropleft">
      <button
        class="btn btn-secondary h-100"
        type="button"
        id="dropdownMenuItem1"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fas fa-ellipsis-v"></i>
      </button>
      <div
        class="dropdown-menu p-2 flex-column"
        aria-labelledby="dropdownMenuItem1"
      >
        <button type="button" class="btn btn-success w-100" onclick = "changeStatusTask(${index})">
          Complete
        </button>
        <button type="button" class="btn btn-info w-100 my-2" onclick = "editTask(${index})">
          Edit
        </button>
        <button type="button" class="btn btn-danger w-100" onclick = "deleteTask(${index})">
          Delete
        </button>
      </div>
    </div>
  </li>`;
    } else {
      newTask = `<li class="list-group-item d-flex w-100 mb-2" style="background:${backTaskColor}">
    <div class="w-100 mr-2">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${task.title}</h5>
        <div>
          <small class="mr-2">${task.priority} priority</small>
          <small>${task.date}</small>
        </div>
      </div>
      <input type="text" id="inputEdit" size="40px" value="${task.text}">
      <button onclick = "saveChangeTask(${index})">Save change</button>
      <button onclick = "editTask(${index})">Cancel</button>
    </div>
    <div class="dropdown m-2 dropleft">
      <button
        class="btn btn-secondary h-100"
        type="button"
        id="dropdownMenuItem1"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fas fa-ellipsis-v"></i>
      </button>
      <div
        class="dropdown-menu p-2 flex-column"
        aria-labelledby="dropdownMenuItem1"
      >
        <button type="button" class="btn btn-success w-100" onclick = "changeStatusTask(${index})">
          Complete
        </button>
        <button type="button" class="btn btn-info w-100 my-2" onclick = "editTask(${index})">
          Edit
        </button>
        <button type="button" class="btn btn-danger w-100" onclick = "deleteTask(${index})">
          Delete
        </button>
      </div>
    </div>
  </li>`;
    }

    if (task.status) {
      document
        .querySelector("#currentTasks")
        .insertAdjacentHTML("afterbegin", newTask);
    } else {
      document
        .querySelector("#completedTasks")
        .insertAdjacentHTML("afterbegin", newTask);
    }
  });
  calcNumbersTask();
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#inputTitle").value;
  const text = document.querySelector("#inputText").value;
  const priority = document.querySelector(
    'input[name="gridRadios"]:checked'
  ).value;

  const now = new Date();
  let minutes = now.getMinutes();
  if (now.getMinutes() < 10) minutes = "0" + now.getMinutes();
  const date = `${now.getHours()}:${minutes} ${now.getDate()}.${
    now.getMonth() + 1
  }.${now.getFullYear()}`;

  const newTask = new Task(title, text, priority, date);
  console.log(newTask);
  toDoTask.push(newTask);
  updateLocalStorage();
  createTaskList();

  document.querySelector("#inputTitle").value = "";
  document.querySelector("#inputText").value = "";
  document.querySelector('input[name="gridRadios"]:checked').checked = false;
});

document.querySelector(".mx-2").addEventListener("click", function () {
  toDoTask.sort((a, b) => {
    return a.date > b.date ? 1 : -1;
  });

  createTaskList();
});
document.querySelector(".mx-1").addEventListener("click", function () {
  toDoTask.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });

  createTaskList();
});

document
  .querySelector("#dropdownMenuSettings")
  .addEventListener("click", () => {
    darkTheme = !darkTheme;
    changeColorTheme();
    createTaskList();
    updateLocalStorage();
  });
