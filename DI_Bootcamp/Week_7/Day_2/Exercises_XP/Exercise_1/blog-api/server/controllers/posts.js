const { Pool } = require('pg');
const pool = new Pool({
  user: 'yourusername',
  host: 'localhost',
  database: 'yourdatabase',
  password: 'yourpassword',
  port: 5432,
});

const getPosts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const result = await pool.query('INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const result = await pool.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };
