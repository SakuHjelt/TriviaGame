var express = require('express');
var router = express.Router();
var questions = require('../dbhandling/mongodb')

/* GET users listing. */
router
.get('/api/questions', function(req, res, next) {
  questions.getQuestions(result => {
    res.json(result)
  })
})

.post('/api/questions', function(req, res) {
  questions.createNick(req, result => {
    res.status(201).end()
  })
})


module.exports = router;
