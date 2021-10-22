import createTaskList from "./createTaskList.js";
import showHideModal from "./showHideModal.js";
import {
  toDoTask,
  modal,
  inputText,
  inputTitle,
  ModalLabel,
  buttonAddLabel,
  darkTheme,
} from "./script.js";

const buttonforactiveTask = `<button type="button" class="btn btn-success w-100  ">
    Complete
  </button>
  <button type="button" class="btn btn-info w-100 my-2">
    Edit
  </button>
  <button type="button" class="btn btn-danger w-100">
    Delete
  </button>`;

const buttonforcompletedTask = `<button type="button" class="btn btn-success w-100 " >
    Uncomplete
  </button>
  <button type="button" class="btn btn-danger w-100 my-2">
    Delete
  </button>`;

const initCurrentIndexInArray = (currentId) => {
  return toDoTask.findIndex((elem) => {
    return elem.id === +currentId;
  });
};

let selectedId;
let selectedIndex;

const showButtonMenu = (element) => {
  selectedId = element.getAttribute("id");

  selectedIndex = initCurrentIndexInArray(selectedId);

  if (document.querySelector(".selected")) {
    document.querySelector(".selected").remove();
  } else {
    const menuElement = document.createElement("div");
    menuElement.classList.add(
      "dropdown-menu",
      "p-2",
      "flex-column",
      "show",
      "selected",
      `${darkTheme ? "darkModal" : null}`
    );

    if (toDoTask[selectedIndex].status) {
      menuElement.innerHTML = buttonforactiveTask;
    } else {
      menuElement.innerHTML = buttonforcompletedTask;
    }
    element.lastElementChild.appendChild(menuElement);
  }
};

// task function

const editTask = (index, id) => {
  document.querySelector(".selected").remove();

  showHideModal(modal);

  modal.setAttribute("edit", `${id}`);
  ModalLabel.innerHTML = "Edit task";
  buttonAddLabel.innerHTML = "Edit task";
  inputText.value = toDoTask[index].text;
  inputTitle.value = toDoTask[index].title;
  const priority = toDoTask[index].priority;
  document.querySelector(`#${priority}`).checked = true;
};

const changeStatusTask = (index) => {
  toDoTask[index].status = !toDoTask[index].status;
  createTaskList(toDoTask, darkTheme);
};

const deleteTask = (index) => {
  const numberOfDeleted = 1;

  toDoTask.splice(index, numberOfDeleted);
  createTaskList(toDoTask, darkTheme);
};

// task actions

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-success")) {
    changeStatusTask(selectedIndex);
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-info")) {
    editTask(selectedIndex, selectedId);
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-danger")) {
    deleteTask(selectedIndex);
  }
});

export { showButtonMenu, selectedIndex };
