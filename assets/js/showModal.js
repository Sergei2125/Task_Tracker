const modalBackground = document.querySelector("#modalBackground");

const showModal = (modal) => {
  modal.classList.toggle("show");
  document.body.classList.toggle("modal-open");
  modalBackground.classList.toggle("show");
  modalBackground.classList.toggle("modal-backdrop");
};

export default showModal;
