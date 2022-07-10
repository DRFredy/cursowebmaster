var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('generic', {title: 'Tours'});
});

module.exports = router;