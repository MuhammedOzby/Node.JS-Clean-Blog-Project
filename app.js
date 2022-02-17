const express = require('express');
const ejs = require('ejs');

const app = express();

const PORT = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

/**
 * * Anasayfa page GET request.
 */
app.get('/', (req, res) => {
  /**
   * ? Kendi sayfalama yöntemimle yapmış bulunmaktayım bu şekilde her dosyada
   * ? çağırmak zorunda değilim ve test, blank page vb. olayları buradan
   * ? yönetebiliyorum.
   */
  res.render('partials/_content.ejs', { pages: 'index' });
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
 * * İndex page GET request.
 */
app.get('/add_post', (req, res) => {
  res.render('partials/_content.ejs', { pages: 'add_post' });
});

app.listen(PORT, () => {
  console.log(`Sunucu dinlemeye başlamştır. PORT: ${PORT}`);
});
