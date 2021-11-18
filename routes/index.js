var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {name: 'Enio'});
});

/* GET home page. */
router.get('/technologies', function(req, res, next) {
  res.render('./technologies', {name: 'Enio'});
});

/* GET home page. */
router.get('/peoples', function(req, res, next) {
  res.render('./peoples', {name: 'Enio'});
});

/* GET home page. */
router.get('/contacts', function(req, res, next) {
  res.render('./contacts', {name: 'Enio'});
});

/* GET home page. */
router.get('/description', function(req, res, next) {
  res.render('./description', {name: 'Enio'});
});

/* GET home page. */
router.get('/configurations', function(req, res, next) {
  res.render('./configurations', {name: 'Enio'});
});

module.exports = router;
