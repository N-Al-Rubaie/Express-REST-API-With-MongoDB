const express = require("express");
const router = express.Router(); // Create a new router object

// Route to handle GET requests to the root of this router
// Example: GET /users/
router.get("/", (req, res) => {
    res.send("Inside the user"); // Respond with a simple message
});

// Route to handle GET requests to /specific
// Example: GET /users/specific
router.get('/specific', (req, res) => {
    res.send("Inside the specific user"); // Respond with a specific message
});

module.exports = router; // Export the router to be used in other parts of the app
