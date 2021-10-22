const showHideModal = (modal) => {
  modal.classList.toggle("show");
  document.body.classList.toggle("modal-open");
  if (document.querySelector(".modal-backdrop")) {
    document.querySelector(".modal-backdrop").remove();
  } else {
    const backElement = document.createElement("div");
    backElement.classList.add("modal-backdrop", "fade", "show");
    document.body.append(backElement);
  }
};

export default showHideModal;
