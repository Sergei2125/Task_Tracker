import calcNumbersTask from "./calcNumbersTask.js";

const activeTaskList = document.querySelector("#currentTasks");
const completedTaskList = document.querySelector("#completedTasks");

const clearCurrentTasksList = () => {
  const currentTask = document.querySelectorAll(".list-group li");
  currentTask.forEach((elem) => {
    elem.remove();
  });
};

const createTasksHtml = (toDoTask) => {
  // let newActiveTask;
  // let newCompletedTask;

  toDoTask.map((task) => {
    let colorTaskStyle = task.priority.toLowerCase();

    const taskItem = document.createElement("li");
    taskItem.classList.add(
      "list-group-item",
      "d-flex",
      "w-100",
      "mb-2",
      `${colorTaskStyle}`
    );
    taskItem.id = `${task.id}`;
    const taskContent = `<div class="w-100 mr-2" >
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
      class="btn btn-secondary h-100 btn-menu"
      type="button"
      id="dropdownMenuItem1"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <i class="fas fa-ellipsis-v btn-menu"></i>
    </button>
  </div>`;

    taskItem.innerHTML = taskContent;

    if (task.status) {
      activeTaskList.append(taskItem);
    } else {
      completedTaskList.append(taskItem);
    }
  });
};

const updateLocalStorage = (toDoTask) => {
  const tasksList = JSON.stringify(toDoTask);
  localStorage.setItem("listTaskInStorage", tasksList);
};

const createTaskList = (toDoTask) => {
  clearCurrentTasksList();
  createTasksHtml(toDoTask);
  calcNumbersTask(toDoTask);
  updateLocalStorage(toDoTask);
};

export default createTaskList;

// const newTaskContent = `<li class="list-group-item d-flex w-100 mb-2 ${colorTaskStyle}" id="${task.id}">
//       <div class="w-100 mr-2" >
//         <div class="d-flex w-100 justify-content-between">
//           <h5 class="mb-1">${task.title}</h5>
//           <div>
//             <small class="mr-2">${task.priority} priority</small>
//             <small>${task.date}</small>
//           </div>
//         </div>
//         <p class="mb-1 w-100">
//         ${task.text}
//         </p>
//       </div>
//       <div class="dropdown m-2 dropleft">
//         <button
//           class="btn btn-secondary h-100 btn-menu"
//           type="button"
//           id="dropdownMenuItem1"
//           data-toggle="dropdown"
//           aria-haspopup="true"
//           aria-expanded="false"
//         >
//           <i class="fas fa-ellipsis-v btn-menu"></i>
//         </button>
//       </div>
//     </li>`;
