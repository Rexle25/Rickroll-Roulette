# Rickroll Redirect

A fun and harmless browser extension that redirects links to a Rickroll video with a customizable probability. Perfect for pranking friends or adding a little chaos to your own browsing experience.

---

## Features

- **Customizable Rickroll Probability**: Adjust how often the extension redirects links to the Rickroll video.
- **Easy to Use**: Configure settings through a simple options page.
- **Works on All Websites**: The extension listens for link clicks on any website.
- **Multiple Browser Support**: Available for both Chrome and Firefox.

---

## Installation

### Prerequisites
This extension is designed for **Firefox** and **Chrome**. It must be loaded in "Developer Mode" as it is not yet published on the respective Add-ons stores.

### Step-by-Step Installation

#### **Firefox**

1. **Download the Extension**:
   - Clone the repository using Git:
     ```bash
     git clone https://github.com/deinbenutzername/rickroll-redirect.git
     ```
   - Or download the repository as a ZIP file and extract it.

2. **Open Firefox Developer Tools**:
   - Open Firefox and type `about:debugging` into the address bar.
   - Click on **"This Firefox"** in the left menu.

3. **Load the Extension**:
   - Click the **"Load Temporary Add-on"** button.
   - Navigate to the `firefox` folder within the cloned or extracted repository.
   - Select the `manifest.json` file.
   - The extension will now appear in your browser's toolbar.

4. **Verify Installation**:
   - Once loaded, the extension is active. You should see its icon in your browser toolbar.



## Adjusting the Probability

You can customize how often the Rickroll occurs:

1. **Open the Options Page**:
   - In Firefox, click the extension icon in the toolbar.
   - Select **"Manage Extension"** and then go to **"Preferences"** (or "Options").

2. **Set the Probability**:
   - Use the input box labeled **"Probability (%)"** to set how often a Rickroll should happen.
   - For example:
     - `0%`: No Rickrolls at all (disables the extension).
     - `10%`: One in ten clicks will trigger a Rickroll.
     - `100%`: Every single link click will redirect to a Rickroll.

3. **Save Your Changes**:
   - Click the **"Save"** button to apply the new probability.

---

## How It Works

- The extension intercepts link clicks (`webRequest.onBeforeRequest` API).
- A random number is generated, and if it falls below your chosen probability, the user is redirected to the Rickroll URL:  
  [Never Gonna Give You Up - Rick Astley](https://www.youtube.com/watch?v=oHg5SJYRHA0&t=44s).
- If the number is above the threshold, the link behaves normally.

---

## Development Guide

### File Overview

- **`manifest.json`**: The configuration file for the extension, declaring permissions and scripts.
- **`background.js`**: The logic that listens for link clicks and determines whether to redirect.
- **`options.html`**: A user interface for setting the Rickroll probability.

### Modifying the Code

- If you want to change the Rickroll URL or add additional features:
  1. Open the `background.js` file.
  2. Replace the `RICKROLL_URL` constant with a different URL.

---

## Troubleshooting

1. **Extension Not Working**:
   - Ensure you loaded the correct `manifest.json` file in `about:debugging`.
   - Verify that the extension has the necessary permissions (`<all_urls>`).

2. **Changes Not Applying**:
   - Refresh the browser tab after changing the probability.
   - Check the console logs (`Ctrl+Shift+J` in Firefox) for any error messages.

3. **Temporary Extension Expiration**:
   - Temporary extensions are unloaded when Firefox restarts. Reload the extension via `about:debugging`.

---

## License

This project is licensed under the **MIT License**. Feel free to fork, modify, or use the code for your own projects.

---

## Disclaimer

This extension is intended for **personal use** and **entertainment purposes only**. Please do not use it to disrupt others' browsing experience without their consent. Have fun responsibly!
