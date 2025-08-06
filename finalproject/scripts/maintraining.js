import { loadTrainings, getLastViewed } from "./dataservice.js";
import { renderTrainings, renderLastViewed } from "./ui.js";
import { initModalEvents } from "./modal.js";

async function initApp() {
  try {
    const data = await loadTrainings();
    renderTrainings(data);
  } catch (error) {
    document.querySelector("#training-list").innerHTML = `<p>Error loading training data.</p>`;
    console.error(error);
  }

  const lastViewed = getLastViewed();
  if (lastViewed) {
    renderLastViewed(lastViewed);
  }

  initModalEvents();
}

initApp();