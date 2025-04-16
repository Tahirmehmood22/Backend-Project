## Security Considerations

This project uses Express with MongoDB and includes several common security practices. Two common vulnerabilities are:

1. **NoSQL Injection**: Users might send malicious input to manipulate MongoDB queries. To mitigate this, we use Mongoose’s query validation and always use parameterized methods like `findByIdAndUpdate`, which helps avoid raw query injections.

2. **CORS Misconfiguration**: We use the `cors` package and have it configured to accept requests from trusted origins only (in production). This helps prevent unauthorized client apps from accessing the API.

Other measures include:
- JSON parsing using `express.json()` to prevent malformed payloads.
- Using environment variables for sensitive data like the Mongo URI.
- The API is stateless, so restarting it has no effect on data persistence.
- Input validation is ensured in the frontend to minimize bad requests reaching the backend.

These practices reduce risk while maintaining functionality. Further enhancements like helmet.js and rate limiting could be considered for production.
