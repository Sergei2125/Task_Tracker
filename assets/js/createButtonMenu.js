import { toDoTask, darkTheme } from "./script.js";

const buttonForActiveTask = `<button type="button" class="btn btn-success w-100  ">
Complete
</button>
<button type="button" class="btn btn-info w-100 my-2">
Edit
</button>
<button type="button" class="btn btn-danger w-100">
Delete
</button>`;

const buttonForCompletedTask = `<button type="button" class="btn btn-success w-100 " >
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

// selected id and index of selected task

const createButtonMenu = (element) => {
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
      menuElement.innerHTML = buttonForActiveTask;
    } else {
      menuElement.innerHTML = buttonForCompletedTask;
    }
    element.lastElementChild.appendChild(menuElement);
  }
};

export { createButtonMenu, selectedIndex, selectedId };
