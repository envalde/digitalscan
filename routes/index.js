var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scan-Card - Digitaler Vertrieb für mehr Kunden und Umsatz' });
});

module.exports = router;
