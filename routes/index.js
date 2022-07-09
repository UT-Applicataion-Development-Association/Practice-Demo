const express = require("express");
const router = express.Router();

/* Example */
router.get("/", (req, res) => {
  res.send("This is a GET API");
});

/* TODO */
router.post("/", (req, res) => {
  res.send("This is a POST API");
});

router.put("/", (req, res) => {
  res.send("This is a PUT API");
});

router.delete("/", (req, res) => {
  res.send("This is a DELETE API");
});

router.post("/user/:id", (req, res) => {
  if (req.params.id === "12345") {
    res.send("User id is correct");
  } else {
    res.send("User id is wrong");
  }
});

router.get("/addFive/:num", (req, res) => {
  res.send(req.params.num + 5);
});

module.exports = router;
