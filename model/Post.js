const mongoose = require("mongoose");

// Define the schema for the Post collection
const PostSchema = mongoose.Schema({
    title: {
        type: String,      // The title must be a string
        required: true,    // Title is required (cannot be empty)
    },
    description: {
        type: String,      // Description must be a string
        required: true,    // Description is required
    },
    date: {
        type: String,       // Date stored as a string 
        default: Date.now,  // Default value is current date/time (as a timestamp converted to string)
    },
});

// Export the schema as a model named "Posts" to be used elsewhere in the app
module.exports = mongoose.model("Posts", PostSchema);
