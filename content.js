// Firebase-Initialisierung (Firebase-Konfiguration und SDK-Import aus firebase.js)
import { getFirestore, doc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
const db = getFirestore();

// Standard-Wahrscheinlichkeit (falls keine gespeichert wurde)
let probability = 1; // Default: 1% (entspricht 0.01)

// Lade gespeicherte Wahrscheinlichkeit aus chrome.storage
chrome.storage.sync.get("probability", (data) => {
  if (data.probability !== undefined) {
    probability = data.probability / 100; // Prozent in Dezimal umrechnen
  }
});

// Firebase-Dokumentreferenz für die Rickroll-Zählung
const counterDocRef = doc(db, "rickrolls", "counter");

// Zähler anzeigen
function displayRickrollCount() {
  getDoc(counterDocRef)
    .then((docSnap) => {
      if (docSnap.exists()) {
        document.getElementById("rickrollCount").textContent = docSnap.data().count;
      } else {
        console.log("Kein Zähler gefunden!");
      }
    })
    .catch((error) => {
      console.error("Fehler beim Abrufen des Zählers:", error);
    });
}

// Zähler erhöhen und in Firebase speichern
function incrementRickrollCounter() {
  updateDoc(counterDocRef, {
    count: increment(1) // Zähler um 1 erhöhen
  })
  .then(() => {
    console.log("Rickroll-Zähler aktualisiert!");
    displayRickrollCount();
  })
  .catch((error) => {
    console.error("Fehler beim Aktualisieren des Zählers:", error);
  });
}

// Event-Listener für Klicks auf der Seite
document.addEventListener("click", (event) => {
  if (Math.random() < probability) { // Benutzerdefinierte Wahrscheinlichkeit
    event.preventDefault();
    event.stopPropagation();
    window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0"; // Rickroll-Link

    // Zähler erhöhen
    incrementRickrollCounter();
  }
});

// Zähler initial anzeigen
displayRickrollCount();
