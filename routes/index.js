var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/json', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dishes', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/dishes', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dishes/:dishKey', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
