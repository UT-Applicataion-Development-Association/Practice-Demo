var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/', (res, req, next) => {
  res.send('This is a ' + req.method + ' API')
  next()
})

router.post('/user/:id', (res, req) => {
  if (req.params.id === '12345') {
    res.send('User id is correct');
  }
  else {
    res.send('User id is wrong');
  }
})

router.get('/addFive/:num', (res, req) => {
  res.send((req.params.num + 5).toString)
})

module.exports = router;