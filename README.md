# Leads Tracker Mobile Web App

A mobile-first leads tracker built with vanilla JavaScript, Vite, and Firebase Realtime Database.

This project started as a Chrome extension and was later refactored into a standalone web app that works well on phones and desktop browsers.

## Live Behavior
- Save a URL from the input field.
- View saved leads instantly in the list.
- Open any saved link in a new tab.
- Remove all leads with a double-click on DELETE ALL.
- Sync data in real time using Firebase Realtime Database.

## Tech Stack
- HTML5
- CSS3 (mobile-first layout)
- Vanilla JavaScript (ES modules)
- Firebase Realtime Database
- Vite (dev server and build)

## Project Structure
- `index.html` - app layout and meta tags
- `index.css` - styling
- `index.js` - app logic and Firebase integration
- `site.webmanifest` and favicon files - installable web metadata/icons
- `package.json` - Vite scripts

## Local Development
1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Build production files:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Firebase Notes
- The app currently connects to a Firebase Realtime Database URL already set in `index.js`.
- For your own deployment, use your own Firebase project and database rules.
- Never commit sensitive keys or private environment data.

## Deploy to GitHub

### Option 1: GitHub Pages (recommended)
For Vite projects hosted from a repository subpath, set the base path in `vite.config.js` first.

Example:

```js
import { defineConfig } from "vite"

export default defineConfig({
	base: "/P11_LeadsTrackerApp/"
})
```

Then:
1. Run `npm run build`.
2. Deploy the `dist` folder to GitHub Pages (via Actions or `gh-pages` branch).
3. In GitHub repo settings, enable Pages and point it to the published branch/folder.

### Option 2: Static hosting platforms
You can also deploy the Vite build output (`dist`) to Netlify, Vercel, or Firebase Hosting.

## Future Improvements
- Add URL validation before saving.
- Add delete-per-item action.
- Add categories/tags for saved leads.
- Add authentication so each user has private leads.

## Author
Built and maintained by Muhammad Hashir.