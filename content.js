import { fetchRickrollCount, incrementRickrollCount } from "./firebase.js";

// Standard-Wahrscheinlichkeit (falls keine gespeichert wurde)
let probability = 1; // Default: 1% (entspricht 0.01)

chrome.storage.sync.get("probability", (data) => {
  if (data.probability !== undefined) {
    probability = data.probability / 100; // Prozent in Dezimal umrechnen
  }
});

// Zeige die Gesamtzahl der Rickrolls oben rechts
async function displayRickrollCount() {
  const count = await fetchRickrollCount();
  const counterElement = document.createElement("div");
  counterElement.id = "rickroll-counter";
  counterElement.style.position = "fixed";
  counterElement.style.top = "10px";
  counterElement.style.right = "10px";
  counterElement.style.padding = "10px";
  counterElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  counterElement.style.color = "white";
  counterElement.style.fontSize = "16px";
  counterElement.style.borderRadius = "5px";
  counterElement.textContent = `Gesamt-Rickrolls: ${count}`;
  document.body.appendChild(counterElement);
}

// Wenn ein Klick ein Rickroll auslöst, erhöhe den Zähler
document.addEventListener("click", (event) => {
  if (Math.random() < probability) { // Benutzerdefinierte Wahrscheinlichkeit
    event.preventDefault();
    event.stopPropagation();
    incrementRickrollCount(); // Rickroll zählen
    window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0&t=44s"; // Rickroll-Link
  }
});

// Zähler anzeigen
displayRickrollCount();
