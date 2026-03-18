# Artika Graphics Solutions

Artika Graphics Solutions is a React + Vite portfolio application for a design studio. It includes a polished public-facing single-page site and a hidden in-app admin panel for updating projects, gallery items, services, and studio details.

## Overview

The app is built as a routed-by-state experience rather than using `react-router`. The public site includes:

- Home
- Portfolio
- Gallery
- Services
- About
- Contact

It also includes an embedded admin CMS that lets you edit site content without changing source code.

## Features

- Editorial, portfolio-style landing page with custom motion and transitions
- Project showcase with featured work support
- Gallery page with visibility controls
- Services, About, and Contact sections powered by editable site data
- Hidden admin entry flow for content management
- Responsive public and admin interfaces
- Persistent content storage through a custom `window.storage` API

## Tech Stack

- React 18
- Vite 5
- Plain inline styling with shared style utilities
- Custom hooks and shared UI components

## Project Structure

```text
.
|-- main.jsx
|-- index.html
|-- src
|   |-- App.jsx
|   |-- admin
|   |-- components
|   |-- hooks
|   |-- pages
|   |-- styles
|   |-- utils
|   `-- public
|-- dist
`-- package.json
```

Key files:

- `src/App.jsx`: top-level app flow, page switching, admin mode, data loading
- `src/pages/*`: public-facing pages
- `src/admin/*`: admin login and content management panels
- `src/utils/constants.js`: default seeded content, storage keys, admin password
- `src/utils/storage.js`: persistence layer using `window.storage`

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Admin Access

The admin interface is not linked from the main navigation.

To open it:

1. Load the app.
2. Type `admin` anywhere on the page.
3. Enter the admin password.

The password is currently defined in `src/utils/constants.js` as `ADMIN_PASS`.

## Content Management

The admin panel allows you to manage:

- Portfolio projects
- Gallery entries
- Service listings
- Site-wide studio information

Default content is seeded from `src/utils/constants.js` when no saved content exists.

## Storage Behavior

This project does **not** use browser `localStorage` directly. It expects a custom global API:

```js
window.storage.get(key)
window.storage.set(key, value)
```

That means:

- In an environment where `window.storage` is available, admin edits persist.
- In a plain browser-only Vite run, the app still loads, but saved admin changes will silently fail and the app will fall back to the default content.

If you plan to deploy this as a standard web app, you should replace `src/utils/storage.js` with a browser-backed or server-backed storage implementation.

## Customization

The fastest way to tailor the studio content is to update `src/utils/constants.js`:

- `DEFAULT_PROJECTS`
- `DEFAULT_GALLERY`
- `DEFAULT_SERVICES`
- `DEFAULT_SITE`
- `ADMIN_PASS`

You may also want to update:

- `index.html` title and favicon
- contact details and booking link content
- image assets under `src/public/images`

## Notes

- The app uses state-based page switching instead of URL routes.
- The admin password is hardcoded in source, so it should be changed before any real deployment.
- The current booking CTA in the home page uses a placeholder Calendly URL.
