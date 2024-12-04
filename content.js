// Standard-Wahrscheinlichkeit (falls keine gespeichert wurde)
let probability = 1; // Default: 1% (entspricht 0.01)

// Lade gespeicherte Wahrscheinlichkeit aus `chrome.storage`
chrome.storage.sync.get("probability", (data) => {
  if (data.probability !== undefined) {
    probability = data.probability / 100; // Prozent in Dezimal umrechnen
  }
});

document.addEventListener("click", (event) => {
  if (Math.random() < probability) { // Benutzerdefinierte Wahrscheinlichkeit
    event.preventDefault();
    event.stopPropagation();
    window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0&t=44s"; // Rickroll
  }
});
