# Rickroll Roulette


Rickroll Roulette is a fun Chrome browser extension that gives you a chance to get Rickrolled whenever you click on something! The twist? You can adjust the probability yourself.

## Features

- **Customizable Probability**: Choose how likely you are to get Rickrolled (0% to 100%).
- **Simple Setup**: Just install the extension, adjust the settings, and enjoy!
- **Surprise Factor**: Adds a bit of unpredictability to your browsing experience.

## How It Works

1. Every time you click on a link or element, the extension calculates a random number.
2. If the number falls within the user-defined probability range, you get redirected to the infamous Rickroll video on YouTube.

## Installation

1. Clone this repository or download it as a ZIP file.
2. Extract the files to a folder on your computer.
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable **Developer mode** in the top-right corner.
5. Click **Load unpacked** and select the folder containing the extension files.
6. The extension is now installed and ready to use!

## How to Customize the Probability

1. Click on the extension's settings by navigating to `chrome://extensions/` → Find "Rickroll Roulette" → Click **Options**.
2. Enter a probability value (0 to 100) in the provided field.
3. Save the settings, and the new probability will be applied immediately.

## Development

### File Structure

- **manifest.json**: Configures the extension and its permissions.
- **content.js**: Handles the Rickroll logic.
- **options.html**: Provides the user interface for setting the probability.
- **options.js**: Manages storing and retrieving user settings.

### Key Dependencies

- Chrome's `chrome.storage` API: Used to store and retrieve the user-defined probability.
- Chrome's `content_scripts` API: Used to inject the Rickroll logic into all pages.

### To Make Changes:

1. Edit the code locally.
2. Reload the extension in `chrome://extensions/` after making changes.
3. Test your changes in the browser.

## Contribution

Feel free to fork this repository, submit issues, or make pull requests to improve the extension. Contributions are welcome!

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Disclaimer

This extension is for fun and entertainment purposes only. Use responsibly!
=======
A Chrome extension that redirects you to a Rickroll video with a 50% chance when you click on something.

## How it works

Every time you click on a link or element on a webpage, there is a 50% chance that you will be redirected to the infamous Rickroll video: [Never Gonna Give You Up](https://www.youtube.com/watch?v=dQw4w9WgXcQ).

## Installation

1. Download or clone this repository.
2. Go to `chrome://extensions/` in your Chrome browser.
3. Enable "Developer mode" at the top-right corner.
4. Click "Load unpacked" and select the folder where you saved this repository.

## Usage

After installation, simply start browsing. Click around any webpage, and with a 50% chance, you'll be Rickrolled!

## License

This extension is licensed under the MIT License. Feel free to modify and share it!

## Contributing

If you want to contribute or improve the extension, feel free to create issues or submit pull requests. All contributions are welcome!

## Disclaimer

This extension is meant for fun. Use at your own risk and don't blame me for any frustration caused by unexpected Rickrolls.
>>>>>>> 667862bfd3e1a09ffd645b028dcf61f07da7e67c
