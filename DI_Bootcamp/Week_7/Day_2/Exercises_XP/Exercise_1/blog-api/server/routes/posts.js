const express = require('express');
const router = express.Router();
const { getPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/posts');

router.get('/posts', getPosts);
router.get('/posts/:id', getPostById);
router.post('/posts', createPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;
