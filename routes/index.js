const express = require('express');
const router = express.Router();

router.post('/user/:id', (req, res) => {
  if (req.params.id === '12345') {
    res.send('User id is correct');
  } else {
    res.send('User id is wrong');
  }
});

router.get('/addFive/:num', (req, res) => {
  res.send((parseInt(req.params.num) + 5).toString());
});

router.use('/', (req, res, next) => {
  res.send('This is a ' + req.method + ' API');
});

module.exports = router;
