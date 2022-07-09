const express = require('express');
const router = express.Router();

/* Example */
router.get('/', (req, res) => {
  res.send('This is a GET API');
});

/* TODO */
module.exports = router;

//Task 1-5
router.use('/', (req, res, next) => {
  console.log('This is a GET API', req.get)
  next()
}, (req, res, next) => {
  console.log('This is a POST API', req.post)
  next()
}, (req, res, next) => {
  console.log('This is a PUT API', req.put)
  next()
}, (req, res, next) => {
  console.log('This is a DELETE API', req.delete)
})

//Task 6
// a middleware sub-stack that handles POST requests to the /user/:id path
router.post('/user/:id', (req, res, next) => {
  // if the user ID is 12345, skip to the next router
  if (req.params.id === '12345') res.send('User id is correct');
  // otherwise pass control to the next middleware function in this stack
  else next()
}, (req, res, next) => {
  // render a regular page
  res.send(' User id is wrong');
})

