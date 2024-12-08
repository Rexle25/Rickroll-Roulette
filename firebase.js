// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnrrFUOMjwITTo1znYKerllzlpmLQWAvA",
  authDomain: "rickroll-roulette.firebaseapp.com",
  projectId: "rickroll-roulette",
  storageBucket: "rickroll-roulette.firebasestorage.app",
  messagingSenderId: "455591156147",
  appId: "1:455591156147:web:0bc7583656e611d2e793c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Funktion zum Abrufen des Rickroll-Zählers
async function fetchRickrollCount() {
  const docRef = doc(db, "rickrolls", "counter");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().count;
  } else {
    console.log("Keine Daten gefunden. Initialisiere Zähler.");
    await setDoc(docRef, { count: 0 }); // Falls es noch nicht existiert, setze auf 0
    return 0;
  }
}

// Funktion zum Erhöhen des Rickroll-Zählers
async function incrementRickrollCount() {
  const docRef = doc(db, "rickrolls", "counter");
  await updateDoc(docRef, {
    count: increment(1)
  });
}

export { fetchRickrollCount, incrementRickrollCount };
