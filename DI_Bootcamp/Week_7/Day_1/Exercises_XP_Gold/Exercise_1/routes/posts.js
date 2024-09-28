const express = require('express');
const router = express.Router();

let posts = [];
let currentId = 1;

const validatePost = (post) => {
    if (!post.title || !post.content) {
        return 'Title and content are required';
    }
    return null;
};

router.get('/', (req, res) => {
    res.json(posts);
});

router.get('/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    res.json(post);
});

router.post('/', (req, res) => {
    const error = validatePost(req.body);
    if (error) return res.status(400).send(error);

    const post = {
        id: currentId++,
        title: req.body.title,
        content: req.body.content,
        timestamp: new Date()
    };
    posts.push(post);
    res.status(201).json(post);
});

router.put('/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');

    const error = validatePost(req.body);
    if (error) return res.status(400).send(error);

    post.title = req.body.title;
    post.content = req.body.content;
    post.timestamp = new Date();
    res.json(post);
});

router.delete('/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) return res.status(404).send('Post not found');

    posts.splice(postIndex, 1);
    res.status(204).send();
});

module.exports = router;
