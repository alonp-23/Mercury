var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/weather', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/holidaysIL', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/holidaysUS', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/holidaysJO', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
