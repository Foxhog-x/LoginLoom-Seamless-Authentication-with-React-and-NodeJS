const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../model/userModel");
router.get("/", (req, res) => {
  res.send(req.body);
});

router.post("/post", async (req, res) => {
  const finduser = await User.findOne({ email: req.body.email });

  if (finduser === "") {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    user
      .save()
      .then(
        res
          .status(201)
          .json({ success: true, message: "User has been save successfully" })
      );
  } else {
    res.status(200).json({ success: false, message: "user already existed" });
  }
});

module.exports = router;
