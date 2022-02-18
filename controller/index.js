const express = require('express');
const router = express.Router();
const PostModel = require('../models/Post');

/**
 * * Anasayfa page GET request.
 */
router.get('/', async (req, res) => {
  const posts = await PostModel.find({});
  res.render('partials/_content.ejs', { pages: 'index', posts });
});

/**
 * * Anasayfa(index) page GET request.
 */
router.get('/index', (req, res) => {
  res.render('partials/_content.ejs', { pages: 'index' });
});

/**
 * * Hakkımızda page GET request.
 */
router.get('/about', (req, res) => {
  res.render('partials/_content.ejs', { pages: 'about' });
});

/**
 * * Add post page GET request.
 */
router.get('/add_post', (req, res) => {
  res.render('partials/_content.ejs', { pages: 'add_post' });
});

/**
 * * Add new post POST request
 */
router.post('/post', async (req, res) => {
  await PostModel.create(req.body);
  res.redirect('/');
});

/**
 * * Dynamic post page
 */
router.get('/post/:id', async (req, res) => {
  const postData = await PostModel.findById(req.params.id);
  res.render('partials/_content.ejs', { pages: 'post', postData });
});

/**
 * * Delete post
 */
router.get('/delete_post/:id', async (req, res) => {
  await PostModel.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

/**
 * * Delete post
 */
router.get('/update_post/:id', async (req, res) => {
  const postData = await PostModel.findById(req.params.id);
  res.render('partials/_content.ejs', { pages: 'add_post', postData });
});

/**
 * * Update post
 */
router.post('/update_post/:id', async (req, res) => {
  await PostModel.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/post/${req.params.id}`);
});

module.exports = router;
