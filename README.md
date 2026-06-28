# Leads Tracker Chrome Extension

A Chrome extension to save and manage URLs, built with vanilla JavaScript.

## Features
- Save URLs manually via input field
- Save the current active tab's URL with one click
- Persists data using localStorage (survives popup close/reopen)
- Double click DELETE ALL to clear all saved leads

## Concepts Used
- `const` for declaring DOM elements
- `addEventListener()` for button click and double click events
- `innerHTML` for rendering the leads list dynamically
- `input.value` for reading and clearing the input field
- Function parameters for reusable `render(leads)` function
- Template strings for building HTML dynamically
- `localStorage` with `setItem`, `getItem`, and `clear`
- `JSON.stringify()` and `JSON.parse()` for storing arrays in localStorage
- Objects in arrays for working with Chrome tabs (`tabs[0].url`)
- Chrome Extension APIs (`chrome.tabs.query`)
- `manifest.json` for extension configuration

## How to Install
1. Clone or download this repo
2. Go to `chrome://extensions`
3. Enable **Developer Mode**
4. Click **Load Unpacked** and select the project folder