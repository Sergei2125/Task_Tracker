import { inputChangeColor, body } from "./script.js";

const updateTaskFromLocalStorage = (data) => {
  if (data) {
    const tasksList = localStorage.getItem("listTaskInStorage");
    const toDoTaskFromStorage = JSON.parse(tasksList);
    return toDoTaskFromStorage;
  }

  return [
    {
      status: true,
      title: "Lesson 1",
      text: "Exercise 1",
      priority: "Low",
      id: 1634729805514,
      date: "23:15 21.10.2021",
    },
    {
      status: true,
      title: "Lesson 2",
      text: "Exercise 2",
      priority: "Medium",
      id: 1634729805515,
      date: "23:16 21.10.2021",
    },
    {
      status: true,
      title: "Lesson 3",
      text: "Exercise 3",
      priority: "High",
      id: 1634729805516,
      date: "23:17 21.10.2021",
    },
  ];
};

const updateThemeFromLocalStorage = (data) => {
  if (data) {
    const valueOfTheme = localStorage.getItem("themeOfApp");
    const darkTheme = JSON.parse(valueOfTheme);
    if (darkTheme) {
      inputChangeColor.checked = darkTheme;
      body.classList.toggle("dark");
    }

    return darkTheme;
  }
  return false;
};

export { updateTaskFromLocalStorage, updateThemeFromLocalStorage };
