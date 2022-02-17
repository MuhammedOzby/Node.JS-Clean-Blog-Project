const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const PostModel = require('./models/Post');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

/**
 * * Anasayfa page GET request.
 */
app.get('/', async (req, res) => {
  const posts = await PostModel.find({});
  res.render('partials/_content.ejs', { pages: 'index', posts });
});

/**
 * * Anasayfa(index) page GET request.
 */
app.get('/index', (req, res) => {
  res.render('partials/_content.ejs', { pages: 'index' });
});

/**
 * * Hakkımızda page GET request.
 */
app.get('/about', (req, res) => {
  res.render('partials/_content.ejs', { pages: 'about' });
});

/**
 * * Add post page GET request.
 */
app.get('/add_post', (req, res) => {
  res.render('partials/_content.ejs', { pages: 'add_post' });
});

app.post('/post', async (req, res) => {
  await PostModel.create(req.body);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Sunucu dinlemeye başlamştır. PORT: ${PORT}`);
});
