const express = require('express');
const router = express.Router();

/* Example */
router.get('/', (req, res) => {
  res.send('This is a GET API');
});

/* TODO */

module.exports = router;
