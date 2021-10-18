function changeColorTheme() {
  if (darkTheme) {
    document.querySelector("#flexSwitchCheckDefault").checked = true;
    document.querySelector("body").classList.add("darkBackground");
    document.querySelector("nav").classList.add("darkTitle");
    document.querySelector(".close").classList.add("darkModal");
    document.querySelector(".modal-content").classList.add("darkModal");
    document
      .querySelectorAll(".form-control")
      .forEach((elem) => elem.classList.add("darkForm"));
    document
      .querySelectorAll(".list-group-item")
      .forEach((elem) => elem.classList.add("darkTask"));
    document.querySelectorAll(".btn-success").forEach((elem) => {
      elem.classList.add("darkComplete");
    });
    document.querySelectorAll(".btn-info").forEach((elem) => {
      elem.classList.add("darkEdit");
    });
    document.querySelectorAll(".btn-danger").forEach((elem) => {
      elem.classList.add("darkDlt");
    });
  } else {
    document.querySelector("body").classList.remove("darkBackground");
    document.querySelector("nav").classList.remove("darkTitle");
    document.querySelector(".close").classList.remove("darkModal");
    document.querySelector(".modal-content").classList.remove("darkModal");
    document
      .querySelectorAll(".form-control")
      .forEach((elem) => elem.classList.remove("darkForm"));
    document
      .querySelectorAll(".list-group-item")
      .forEach((elem) => elem.classList.remove("darkForm"));
    document.querySelectorAll(".btn-success").forEach((elem) => {
      elem.classList.remove("darkComplete");
    });
    document.querySelectorAll(".btn-info").forEach((elem) => {
      elem.classList.remove("darkEdit");
    });
    document.querySelectorAll(".btn-danger").forEach((elem) => {
      elem.classList.remove("darkDlt");
    });
  }
}
