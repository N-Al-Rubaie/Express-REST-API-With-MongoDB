const express = require("express");
const router = express.Router();

const Post = require("../model/Post"); // Import the Post model

// Route to get all the posts
router.get("/", async (req, res) => {
    try {
        // Retrieve all posts from the database
        const posts = await Post.find();
        res.json(posts); // Send the posts as JSON
    } catch(err) {
        res.json({ message: err }); // Send error message
    }
});

// Route to save a new post
router.post('/', async (req, res) => {
    // Create a new Post instance with title and description from request body
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        // Save the post to the database
        const savedPost = await post.save();
        res.json(savedPost); // Send the saved post as JSON
    } catch (err) {
        res.json({ message: err }); // Send error message
    }
});

// Route to get a specific post by ID
router.get("/:postId", async (req, res) => {
    try {
        // Find the post by its ID
        const post = await Post.findById(req.params.postId);
        res.json(post); // Send the found post as JSON
    } catch(err) {
        res.json({ message: err }); // Send error message
    }
});

// Route to update a specific post by ID
router.patch("/:postId", async (req, res) => {
    try {
        // Update the post with new title and description
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                },
            }
        );
        res.json(updatedPost); // Send the result of the update operation
    } catch (err) {
        res.json({ message: err }); // Send error message
    }
});

// Route to delete a specific post by ID
router.delete("/:postId", async (req, res) => {
    try {
        // Find and delete the post by its ID
        const deletedPost = await Post.findByIdAndDelete(req.params.postId);
        
        // If post not found, send 404 response
        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Send success message and the deleted post
        res.json({ message: "Post deleted successfully", post: deletedPost });
    } catch (err) {
        // Send internal server error message
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; // Export the router for use in other parts of the app
