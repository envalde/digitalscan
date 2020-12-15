var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Scan-Card - Login', description: 'Hier steht nacher die Beschreibung' });
});

module.exports = router;
