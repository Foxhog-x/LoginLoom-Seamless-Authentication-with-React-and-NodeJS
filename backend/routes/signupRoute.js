const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const db_con = require("../db");
// const mypass = "djslfj";
// const User = require("../model/userModel");

router.post("/", async (req, res) => {
  const data = req.body;
  const salt = await bcrypt.genSalt(10);
  const secretPassword = await bcrypt.hash(data.password, salt);
  // const address = ` ${data.city},${data.state},${data.country}`;
  const userData = {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    password: secretPassword,
    City: data.city,
    State: data.state,
    Country: data.country,
    address: data.address,
  };

  try {
    db_con.query("INSERT INTO users SET ?", userData, (error, results) => {
      if (error) {
        if (error.code === "ER_DUP_ENTRY") {
          console.error("Duplicate entry found for email: " + userData.email);
          res.status(409).json({ message: "email address already register" });
        } else {
          console.error("Error inserting data: " + error.stack);
        }
        return;
      }
      console.log("Inserted " + results.affectedRows + " row(s)");
      res.status(201).json({
        message: "data saved successfully",
      });
    });
  } catch (err) {
    console.error("Error executing insert query: " + err.stack);
  }
});
//This is mongodb code for previous database
// const user = await new User({
//   firstname: data.firstName,
//   lastname: data.lastName,
//   email: data.email,
//   password: secretPassword,
//   country: data.country,
//   state: data.state,
//   city: data.city,

// user.save().then(() =>
//   res.status(201).json({
//     message: "data saved successfully",
//   })
// );

// router.post("/delete", (req, res) => {
//   console.log(req.body);
// });

module.exports = router;
