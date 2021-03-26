
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('stats/index', {});
});

router.get('/updatestats', function(req, res, next) {
  res.render('stats/updatestats', {});
});

module.exports = router;