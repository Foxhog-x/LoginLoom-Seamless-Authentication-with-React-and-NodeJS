const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const db_con = require("../db");
// const mypass = "djslfj";
// const User = require("../model/userModel");

router.post("/", async (req, res) => {
  // const connection = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "",
  //   database: "users",
  // });
  // connection.connect((err) => {
  //   if (err) {
  //     console.error("Error connecting to MySQL server: " + err.stack);
  //     return;
  //   }
  //   console.log("Connected to MySQL server as id " + connection.threadId);
  // });

  const data = req.body;

  const salt = await bcrypt.genSalt(10);
  const secretPassword = await bcrypt.hash(data.password, salt);
  let address = ` ${data.city},${data.state},${data.country}`;
  const userData = {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    password: secretPassword,
    address: address,
    // first_name: "onkar",
    // last_name: "patil",
    // email: "john@example.com",
    // password: "passwod123",
    // address: "123 Main St, City, Country",
  };

  try {
    db_con.query(
      "INSERT INTO users SET ?",
      userData,
      (error, results, fields) => {
        if (error) {
          if (error.code === "ER_DUP_ENTRY") {
            console.error("Duplicate entry found for email: " + userData.email);
          } else {
            console.error("Error inserting data: " + error.stack);
          }
          return;
        }
        console.log("Inserted " + results.affectedRows + " row(s)");
        res.status(201).json({
          message: "data saved successfully",
        });
      }
    );
  } catch (err) {
    console.error("Error executing insert query: " + err.stack);
  }
});
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
