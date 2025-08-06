// js/ui.js
import { showModal } from "./modal.js";
import { saveLastViewed } from "./dataservice.js";

const container = document.querySelector("#training-list");

export function renderTrainings(data) {
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

    card.querySelector("button").addEventListener("click", () => {
      showModal(item);
      saveLastViewed(item);
    });

    container.appendChild(card);
  });
}

export function renderLastViewed(training) {
  const lastViewedSection = document.getElementById("last-viewed");
  document.getElementById("last-title").textContent = training.title;
  lastViewedSection.classList.remove("hidden");
}
