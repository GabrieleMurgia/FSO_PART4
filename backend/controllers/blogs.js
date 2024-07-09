const express = require('express');
const Blog = require('../models/blog');

const blogsRouter = express.Router();

blogsRouter.get('/', async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json(blogs);
});

blogsRouter.post('/', async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.status(201).json(blog);
});

module.exports = blogsRouter;