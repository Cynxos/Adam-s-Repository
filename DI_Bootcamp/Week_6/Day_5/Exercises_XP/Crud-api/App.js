const express = require('express');
const { fetchPosts } = require('./data/dataService');
const app = express();

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        res.json(posts);
        console.log('Data successfully retrieved and sent as response');
    } catch (error) {
        res.status(500).send('Error fetching posts');
    }
});
