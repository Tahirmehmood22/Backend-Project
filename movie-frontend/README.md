**README.md**

# My Movie App

A simple full-stack movie management application where users can add, edit, delete, and view movies. Built with React (frontend), Express and MongoDB (backend).

## Features
- Add new movies with title and release year
- Edit existing movies inline
- Delete movies
- Styled using a custom dark theme
- Fully responsive and accessible UI

## Technologies Used
- Frontend: React, React Router DOM, CSS
- Backend: Node.js, Express.js, MongoDB

## Setup Instructions
1. Clone this repository.
2. Run `npm install` in both the frontend and backend folders.
3. Start MongoDB server.
4. Run the backend with `npm run dev`.
5. Run the frontend with `npm run dev`.

## Routes
- `/` - Home page displaying movie form and movie list.
- `/add` - Add movie (currently handled inline on home page).
- `/edit/:id` - Edit movie (currently handled inline on home page).
- `*` - Fallback 404 page.

---

**accessibility-and-seo.md**

## Accessibility and SEO Strategy

To ensure accessibility, semantic HTML elements were used (like `<form>`, `<input>`, `<button>`, `<h1>`, `<div>`). Color contrast has been tested to meet WCAG standards, using light text on dark backgrounds. Buttons are properly labeled and navigable by keyboard. Inputs have clear placeholders and feedback is immediate.

For SEO, pages have distinct and descriptive titles. Routes are clean and follow RESTful patterns. Although client-side rendered, we use headings and structured content to improve visibility to search engines. Link tags and semantic structure help crawlers understand the hierarchy of content.

---

**privacy-and-tracking.md**

## Privacy-Aware Tracking

This application does not use any third-party analytics or tracking cookies. Any user interactions like adding or editing movies are handled locally and sent only to our own backend. This ensures full GDPR compliance and prioritizes user privacy.

Data is stored only in the database and is not shared externally or tracked for marketing purposes. Users are not profiled or monitored.

---

**security-vulnerabilities.md**

## Security Considerations

This application could be vulnerable to common web threats such as:

1. **Cross-Site Scripting (XSS)** – If user inputs are not properly sanitized.
2. **NoSQL Injection** – If MongoDB queries are constructed insecurely from user inputs.
3. **CSRF (Cross-Site Request Forgery)** – If the backend accepts actions without verifying requests come from authenticated sources.
4. **Unvalidated Inputs** – Could cause issues or database corruption.

To mitigate NoSQL Injection, all incoming inputs are validated and parsed explicitly. Express routes use parameterized endpoints and reject malformed data. We also sanitize and limit data size where appropriate. Other protections include CORS headers and limiting HTTP methods.

