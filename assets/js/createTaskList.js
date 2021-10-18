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
          ? "#6fb98f"
          : task.priority === "Medium"
          ? "#2C7873"
          : "#004445";
    } else {
      backTaskColor =
        task.priority === "Low"
          ? "#A1D6E2"
          : task.priority === "Medium"
          ? "#BCBABE"
          : "#1995ad";
    }

    if (task.status) {
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
            Uncomplete
          </button>
          <button type="button" class="btn btn-danger w-100 my-2" onclick = "deleteTask(${index})">
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
  changeColorTheme();
}
