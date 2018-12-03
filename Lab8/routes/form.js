var express = require('express');
var router = express.Router();
var parser = require('body-parser');
var jsonParser = parser.json();
var urlencodedParser = parser.urlencoded({ extended: false });

router.get('/form', (req, res) => {
  res.render('form');
});

router.post('/formdata', urlencodedParser, (req, res) => {
  res.render('signed', { login: req.body.login, email: req.body.email });
});

router.post('/formdata',jsonParser, (req, res) => {
  res.render('signed', { login: req.body.login, email: req.body.email });
});
module.exports = router;
