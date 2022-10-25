const express = require('express');
const app = express();
const adatok = require('./adatok');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const termekek = [];
  const darabok = [];
  adatok.forEach((elem) => {
    termekek.push(Object.keys(elem)[0]);
    darabok.push(Object.values(elem)[0]);
    // console.log(Object.keys(elem));
  });
  res.render('index', { termekek, darabok });
});

app.use('/masik', require('./routes/masikRoutes'));

app.listen(3500, () => {
  console.log('http://localhost:3500');
});
