const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Max Store ' });
});

module.exports = router;
