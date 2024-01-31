require("dotenv").config();
const express = require("express");
const User = require("../model/userModel");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_JWT;
router.post("/", async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email });

    if (user !== null) {
      let password = await user.password;
      console.log(password, "password");
      bcrypt.compare(req.body.password, password).then(function (result) {
        if (result === true) {
          const data = {
            user: {
              id: user.id,
            },
          };
          const jwtAuthToken = jwt.sign(data, secret);
          res.status(201).json({
            success: true,
            authToken: jwtAuthToken,
            message: "Login Successfull",
          });
        } else {
          console.log();
          res
            .status(400)
            .json({ success: false, message: "user does not exist" });
        }
      });
    } else {
      console.log();
      res.status(400).json({ success: false, message: "user does not exist" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
