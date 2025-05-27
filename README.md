✅ To Run the Project
Run the following commands:

bash
Copy
Edit
npm install
npm run dev
This will start the frontend using Vite. Make sure your backend (Node + Express + MongoDB) is running in a separate terminal.

✅ Login Credentials
pgsql
Copy
Edit
Username: admin
Password: password
Login is required to Add, Edit, or Delete movies.

🎬 Movie App
This is a movie management application built with React (frontend) and Node.js + Express + MongoDB (backend). Authenticated users can add, edit, and delete movies. It includes full CRUD functionality, accessibility features, validation, usage tracking, and basic security hardening.

✅ Project Requirements Breakdown
1. HTTP Verbs
The REST API supports:

GET – Fetch all or one movie

POST – Add a new movie

PUT – Update an existing movie

DELETE – Remove a movie by ID

2. HTTP Status Codes
The server uses appropriate status codes:

200 OK – Success (read/update/delete)

201 Created – Movie added

400 Bad Request – Validation or input errors

404 Not Found – Invalid movie ID

500 Internal Server Error – Unhandled or server-level failures

3. Stateless + Database
The backend is stateless and uses MongoDB for persistence. The application does not rely on server-side sessions — all operations are handled independently. Data persists across restarts.

🌐 Accessibility & SEO
Semantic HTML elements like <form>, <label>, <input>, and <button> are used to improve accessibility and structure.

Every input field includes a semantic <label> with a matching htmlFor and id, ensuring screen reader compatibility.

Proper color contrast is maintained across all UI elements — including the Login button — meeting WCAG AA standards.

The layout is fully responsive and mobile-friendly using flexbox and media queries.

📊 Tracking
The frontend integrates Google Analytics (G-J6LV9SRFTY) for tracking page views.

All collected data is anonymized (via anonymize_ip: true) to comply with GDPR. No personal information is stored.

🔐 Security & Threat Mitigation
All user input is validated both client-side and server-side using express-validator.

The MongoDB schema is strictly typed to prevent malformed or injected data.

HTTP status codes and error handling provide safe, structured feedback without exposing sensitive internal logic.

Dummy login credentials are used for demonstration purposes. Admin-only actions (Add/Edit/Delete) are hidden from unauthenticated users.

Common threats like NoSQL injection are mitigated by validating and sanitizing all incoming requests.

🚀 Performance Optimization
Used Chrome DevTools and console timing to benchmark render speed.

Minimized unnecessary re-renders with correct useState and useEffect usage.

Backend uses async/await to handle operations cleanly and avoid blocking the event loop.

Static assets are optimized and cached where applicable.

✅ Final Notes
This project meets all required criteria for the assignment:

Full CRUD via REST API

Stateless backend with persistent database

Protected user actions behind login

Accessible form design with semantic labels

Good contrast and mobile responsiveness

Usage tracking with GDPR-friendly setup

Input validation and secure architecture