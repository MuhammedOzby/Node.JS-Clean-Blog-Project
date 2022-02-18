const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
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

const indexPath = require('./controller/index');
app.use('/', indexPath);

app.listen(PORT, () => {
  console.log(`Sunucu dinlemeye başlamştır. PORT: ${PORT}`);
});
