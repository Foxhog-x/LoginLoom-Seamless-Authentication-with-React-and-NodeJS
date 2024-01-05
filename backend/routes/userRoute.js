const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/details", (req, res) => {
  res.send("hello");
});

router.post("/", async (req, res) => {
  console.log(req.body);
});

module.exports = router;
