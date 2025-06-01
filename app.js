const express = require('express');
const app = express(); // Create an instance of the Express application
const mongoose = require("mongoose");
require("dotenv/config"); // Load environment variables from .env file

const bodyParser = require("body-parser");

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Import route modules
const postRoute = require("./routes/posts"); // Handles routes starting with /posts
const userRoute = require("./routes/user");  // Handles routes starting with /user

// Use the imported route modules
app.use('/posts', postRoute); // All /posts routes handled by postRoute
app.use('/user', userRoute);  // All /user routes handled by userRoute

// Basic route at the root URL
app.get('/', (req, res) => {
    res.send("I'm inside the home"); // Response for visiting the home page
});

// RESTful API method descriptions:
// GET()    -> Fetches data
// POST()   -> Sends/creates data
// PATCH()  -> Updates existing data
// DELETE() -> Deletes data

// Connect to MongoDB using the connection string in environment variable DB_CONNECTION
mongoose.connect(process.env.DB_CONNECTION);

// Start the server and listen on port 3000
app.listen(3000);
