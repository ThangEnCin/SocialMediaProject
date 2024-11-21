const express = require('express');
const router = express.Router();
const { getPosts, createPost, getPostById } = require('../controllers/postController');

// Routes
router.get('/', getPosts); // Get all posts
router.post('/', createPost); // Create a new post
router.get('/:id', getPostById); // Get a post by ID

module.exports = router;
