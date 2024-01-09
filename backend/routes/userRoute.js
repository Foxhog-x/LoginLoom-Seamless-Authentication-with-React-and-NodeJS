const express = require("express");
const router = express.Router();

const User = require("../model/userModel");
router.get("/details", (req, res) => {
  res.send("hello");
});

router.post("/", async (req, res) => {
  const data = req.body;
  console.log(data, "adduser");
  try {
    const user = await new User({
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      password: data.password,
      country: data.country,
      state: data.state,
      city: data.city,
    });
    user.save().then(() =>
      res.status(201).json({
        message: "data saved successfully",
      })
    );
  } catch (error) {
    if (error) {
      res.status(400).json({
        error: error,
      });
    }
  }
});

module.exports = router;
