# 🎬 Movie App 

This is a movie management app built using **React (frontend)** and **Node.js + Express + MongoDB (backend)**. Users can add, edit, delete, and view movies. The app includes validation, tracking, and basic security considerations.

---

## ✅ Project Requirements Breakdown

### 1. HTTP Verbs
The API supports and correctly uses the following HTTP verbs:
- `GET` – to fetch movies
- `POST` – to add new movies
- `PUT` – to update existing movies
- `DELETE` – to remove movies

---

### 2. HTTP Status Codes
The API responds with appropriate status codes:
- `200 OK` – Successful read/update/delete
- `201 Created` – When a movie is added
- `400 Bad Request` – For validation errors or bad input
- `404 Not Found` – When a movie with the given ID doesn't exist
- `500 Internal Server Error` – For unexpected server errors

---

### 3. Stateless + Database
The backend is stateless and persists data using **MongoDB**. Restarting the server has no effect on stored data. Each request is independent and doesn’t rely on previous state.

---

## 🌐 Accessibility & SEO (Min 4 Sentences)

- Semantic HTML is used throughout the frontend with elements like `<form>`, `<input>`, and `<button>`.
- Labels and placeholders make form fields easy to understand.
- Color contrast and a dark mode improve visibility and accessibility.
- The layout is fully responsive, making it accessible across devices and screen sizes.

---

## 📊 Tracking (Min 2 Sentences)

- The app integrates **Google Analytics** for basic usage tracking.
- No personal data is collected, and all data is anonymized to comply with **GDPR** and respect user privacy.

---

## 🔐 Security & Threat Mitigation (Min 5 Sentences)

- The backend uses `express-validator` to prevent invalid inputs and reduce injection risks.
- MongoDB schema validation ensures that only well-structured data is stored in the database.
- Inputs are validated both client-side and server-side to prevent bad data from reaching the API.
- Proper HTTP status codes are returned for invalid or malicious requests, preventing exposure of sensitive error messages.
- One key mitigation is against **NoSQL injection**, using strict input validation and schema enforcement.

---

## 🚀 Performance Optimization (Process)

- Chrome DevTools and console timing were used to check how long frontend operations took.
- Unnecessary re-renders were minimized by properly managing state with `useState` and `useEffect`.
- The backend avoids nested callbacks and uses `async/await` for clean, fast, and readable code execution.
- Static files are cached in production (optional deployment optimization step).

---

## ✅ Final Notes

This project meets all required criteria for the course backend assignment, including full CRUD functionality, stateless database handling, proper use of HTTP verbs and status codes, basic tracking, accessibility, and basic security measures.

