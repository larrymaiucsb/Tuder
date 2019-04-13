var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("in login")
  res.render('login', { title: 'man fuck this shit' });
});

module.exports = router;
