document.getElementById("save").addEventListener("click", () => {
  const probability = parseInt(document.getElementById("probability").value, 10);

  if (isNaN(probability) || probability < 0 || probability > 100) {
    document.getElementById("status").innerText = "Bitte gib eine Zahl zwischen 0 und 100 ein.";
    return;
  }

  // Wahrscheinlichkeit in Chrome Storage speichern
  chrome.storage.sync.set({ probability }, () => {
    document.getElementById("status").innerText = "Einstellungen gespeichert!";
    setTimeout(() => (document.getElementById("status").innerText = ""), 2000);
  });
});

// Aktuelle Wahrscheinlichkeit laden und anzeigen
chrome.storage.sync.get("probability", (data) => {
  if (data.probability !== undefined) {
    document.getElementById("probability").value = data.probability;
  }
});
