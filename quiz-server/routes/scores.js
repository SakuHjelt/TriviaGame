var express = require('express');
var router = express.Router();
var questions = require('../dbhandling/mongodb')

/* GET users listing. */
router
.get('', function(req, res, next) {
  questions.getScores(result => {
    res.json(result)
    .status(200).end()
  })
})

module.exports = router;