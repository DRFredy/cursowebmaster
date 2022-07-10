var express = require('express');
var router = express.Router();
const os = require('os');

router.get('/', function(req, res) {
  const backBtn = '<a href="/">Volver a Inicio</a>'  
  res.send(`${backBtn}<br /><br />Nombre pc: ${os.hostname()}`);
  //res.render('hostname', { name: os.hostname()});
});

module.exports = router;