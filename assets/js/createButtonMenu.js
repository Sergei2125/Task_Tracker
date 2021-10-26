import { toDoTask } from "./script.js";

const buttonComplete = `
<button type="button" class="btn btn-info w-100 my-2">
Edit
</button>
<button type="button" class="btn btn-danger w-100" my-2>
Delete
</button>`;

const buttonUnComplete = `
<button type="button" class="btn btn-danger w-100 my-2" >
Delete
</button>`;

let selectedId;
let selectedIndex;

const defineCurrentIndexInArray = (currentId) => {
  return toDoTask.findIndex((elem) => {
    return elem.id === +currentId;
  });
};

const createButtonContent = (taskStatus) => {
  const menuElement = document.createElement("div");
  menuElement.classList.add(
    "dropdown-menu",
    "p-2",
    "flex-column",
    "show",
    "selected"
  );
  menuElement.innerHTML = `<button type="button" class="btn btn-success w-100 ">
  ${taskStatus ? "Complete" : "Uncomplete"}
  </button>
    ${taskStatus ? buttonComplete : buttonUnComplete}`;

  return menuElement;
};

// selected id and index of selected task

const createButtonMenu = (element) => {
  selectedId = element.getAttribute("id");

  selectedIndex = defineCurrentIndexInArray(selectedId);

  if (document.querySelector(".selected")) {
    document.querySelector(".selected").remove();
  }
  const buttonMenu = createButtonContent(toDoTask[selectedIndex].inProgress);

  element.lastElementChild.appendChild(buttonMenu);
};

export { createButtonMenu, selectedIndex, selectedId };
