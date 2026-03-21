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
- Shared content storage through a Node + PostgreSQL API

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
- `src/utils/constants.js`: default seeded content used to initialize the database
- `src/utils/storage.js`: frontend API client for loading and saving CMS data
- `server/index.js`: Express API for auth and content persistence

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Environment variables

Copy `.env.example` to `.env` and update:

```bash
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/artika_graphics
ADMIN_PASSWORD=change-this-password
ADMIN_TOKEN_SECRET=change-this-token-secret
PORT=4000
CORS_ORIGIN=http://localhost:3000
VITE_API_BASE_URL=http://localhost:4000/api
CONTACT_TO_EMAIL=hello@artika-gs.com
CONTACT_FROM_EMAIL=no-reply@artika-gs.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
```

### Start the API server

```bash
npm run dev:server
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

The password is verified by the backend using `ADMIN_PASSWORD` from your `.env`.

## Content Management

The admin panel allows you to manage:

- Portfolio projects
- Gallery entries
- Service listings
- Site-wide studio information

Default content is seeded from `src/utils/constants.js` when no saved content exists.

## Storage Behavior

This project now expects a running API at `VITE_API_BASE_URL`.

- Public content is loaded from `GET /api/content`
- Admin login uses `POST /api/auth/login`
- Admin saves use `PUT /api/content/:key`
- Contact form submissions use `POST /api/contact`

The API stores CMS data in PostgreSQL table `content_entries`.

## Contact Form Email

The contact form now sends email through your SMTP provider.

- Set `CONTACT_TO_EMAIL` to the inbox where client inquiries should arrive
- Set `CONTACT_FROM_EMAIL` to the sender address you want on outgoing mail
- Configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, and `SMTP_PASS`

For Gmail, you will usually need an App Password instead of your normal account password.

## Customization

The fastest way to tailor the studio content is to update `src/utils/constants.js`:

- `DEFAULT_PROJECTS`
- `DEFAULT_GALLERY`
- `DEFAULT_SERVICES`
- `DEFAULT_SITE`
You may also want to update:

- `index.html` title and favicon
- contact details and booking link content
- image assets under `src/public/images`

## Notes

- The app uses state-based page switching instead of URL routes.
- The API must be running and connected to PostgreSQL for admin saves to persist across devices.
- The current booking CTA in the home page uses a placeholder Calendly URL.
