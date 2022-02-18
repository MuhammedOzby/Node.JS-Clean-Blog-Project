const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose
  .connect(
    //'mongodb://cleandb:plQ3s9SSnE2bd6QC@localhost/cleanblog-test-db',
    'mongodb+srv://cleandb:plQ3s9SSnE2bd6QC@cluster0.lnjvx.mongodb.net/cleanblog-test-db?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Connection succesful.');
  })
  .catch((err) => {
    console.log('Connection error. \n' + err);
  });

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const indexPath = require('./controller/index');
app.use('/', indexPath);

app.get('/', function (req, res, next) {
  res.statusCode = 400;
  var e = new Error('error message');
  next(e);
});

app.listen(PORT, () => {
  console.log(`Sunucu dinlemeye başlamştır. PORT: ${PORT}`);
});
