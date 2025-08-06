// js/modal.js
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close-modal");

const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalDate = document.querySelector("#modal-date");
const modalLevel = document.querySelector("#modal-level");
const modalLocation = document.querySelector("#modal-location");

export function showModal(training) {
  modalTitle.textContent = training.title;
  modalDescription.textContent = training.description;
  modalDate.textContent = training.date;
  modalLevel.textContent = training.level;
  modalLocation.textContent = training.location;
  modal.classList.remove("hidden");
}

export function hideModal() {
  modal.classList.add("hidden");
}

export function initModalEvents() {
  closeModal.addEventListener("click", hideModal);
  window.addEventListener("click", (e) => {
    if (e.target === modal) hideModal();
  });
}
