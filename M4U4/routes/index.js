var express = require('express');
var router = express.Router();
var utils = require('../utils');

router.get('/', function(req, res) {  
  if (!req.session.names_texts)
    req.session.names_texts = [];

  let name = req.body.name || '';
  let someText = req.body.someText || '';
  let exists = utils.nameExists(req.session.names_texts, name);

  name = name.trim();

  if (exists) {
    let item = utils.getItemByName(req.session.names_texts, name);    
    name = item.name;
    someText = item.text;
  }

  res.render('index', {
    title: 'Sesiones en express..',
    existent: exists,
    name: name,
    someText: someText
  });
});

router.post('/insert', function(req, res) {
  let name = req.body.name || '';
  let someText = req.body.someText || '';
  let exists = utils.nameExists(req.session.names_texts, name);

  name = name.trim();

  if (exists) {
    let item = utils.getItemByName(req.session.names_texts, name);
    name = item.name;
    someText = item.text;

    res.render('index', {
      title: 'Sesiones en express..',
      existent: exists,
      name: name,
      someText: someText
    });    
  }
  else {
    req.session.names_texts.push({name: name, text: someText});
    
    res.redirect('/');
  }
});

router.get('/exit', function(req, res) {
  req.session.destroy();
  res.redirect('/');
});


module.exports = router;
