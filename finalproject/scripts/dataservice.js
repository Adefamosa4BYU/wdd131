// js/dataService.js
export async function loadTrainings() {
  try {
    const response = await fetch("data/trainings.json");
    if (!response.ok) throw new Error("Failed to load training data.");
    return await response.json();

  } catch (error) {
    console.error(error)
  }
}

export function saveLastViewed(training) {
  localStorage.setItem("lastViewedTraining", JSON.stringify(training));
}

export function getLastViewed() {
  return JSON.parse(localStorage.getItem("lastViewedTraining"));
}
