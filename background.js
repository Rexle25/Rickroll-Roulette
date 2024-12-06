// Default Rickroll probability (10%)
let rickrollProbability = 0.1;

// Rickroll URL
const RICKROLL_URL = "https://www.youtube.com/watch?v=oHg5SJYRHA0&t=44s";

// Listener for link clicks
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    // Roll the dice to decide if a Rickroll should happen
    if (Math.random() < rickrollProbability) {
      console.log("Rickrolled!", details.url);
      return { redirectUrl: RICKROLL_URL };
    }
    return {}; // No redirection
  },
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"]
);

// Listener for probability changes
browser.storage.onChanged.addListener((changes) => {
  if (changes.probability) {
    rickrollProbability = changes.probability.newValue;
    console.log(`Updated Rickroll probability: ${rickrollProbability * 100}%`);
  }
});
