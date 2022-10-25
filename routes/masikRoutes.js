const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
  const ut = path.join(__dirname, '..', 'zonaAdatok', 'zonaAdatok.csv');
  fs.readFile(ut, 'utf-8', (err, data) => {
    if (err) {
      res.render('404', { err });
    } else {
      const tomb = data.trim().split('\n');
      //   console.log(tomb);
      const adatok = [];
      const evek = [];
      const elsoAdatok = [];
      tomb.forEach((elem) => {
        const belso = elem.split(',');
        evek.push(belso[0]);
        elsoAdatok.push(belso[1]);
      });
      //   console.log(elsoAdatok);

      res.render('masik', { evek, elsoAdatok });
    }
  });
});

module.exports = router;
