// training.js

// 1️⃣ DOM References
const container = document.querySelector("#training-list");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close-modal");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalDate = document.querySelector("#modal-date");
const modalLevel = document.querySelector("#modal-level");
const modalLocation = document.querySelector("#modal-location");

// 2️⃣ Load and Render Trainings
async function loadTrainings() {
  try {
    const response = await fetch("data/trainings.json");
    if (!response.ok) throw new Error("Failed to load training data.");

    const data = await response.json();
    renderTrainings(data);
    showLastViewed();
  } catch (error) {
    container.innerHTML = `<p>Error loading training data. Try again later.</p>`;
    console.error(error);
  }
}

// 3️⃣ Render Training Cards
function renderTrainings(data) {
  container.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <p><strong>Date:</strong> ${item.date}</p>
      <p><strong>Level:</strong> ${item.level}</p>
      <p><strong>Location:</strong> ${item.location}</p>
      <button class="learn-more">Learn More</button>
    `;

    card.querySelector(".learn-more").addEventListener("click", () => {
      openModal(item);
      localStorage.setItem("lastViewedTraining", JSON.stringify(item));
    });

    container.appendChild(card);
  });
}

// 4️⃣ Modal Functions
function openModal(item) {
  modalTitle.textContent = item.title;
  modalDescription.textContent = item.description;
  modalDate.textContent = item.date;
  modalLevel.textContent = item.level;
  modalLocation.textContent = item.location;
  modal.classList.remove("hidden");
}

function closeModalHandler() {
  modal.classList.add("hidden");
}

// 5️⃣ Last Viewed Training
function showLastViewed() {
  const lastViewed = JSON.parse(localStorage.getItem("lastViewedTraining"));
  if (lastViewed) {
    const lastViewedSection = document.getElementById("last-viewed");
    document.getElementById("last-title").textContent = lastViewed.title;
    lastViewedSection.classList.remove("hidden");
  }
}

// 6️⃣ Modal Event Listeners
closeModal.addEventListener("click", closeModalHandler);
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModalHandler();
});

// 7️⃣ Initialize
loadTrainings();
