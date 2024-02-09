require("dotenv").config();
const express = require("express");
const User = require("../model/userModel");
const router = express.Router();
const jwtAuthoriztionMiddleware = require("../middlewares/authMiddleware");
const db_con = require("../db");

router.get("/", jwtAuthoriztionMiddleware, async (req, res) => {
  const sqlquery = "SELECT * FROM users ";
  // const user = await User.find({});
  try {
    db_con.query(sqlquery, (error, results) => {
      if (error) console.log(error);
      res.json(results);
    });
    // if (user != null) {
    //   res.json(user);
    // }
  } catch (error) {
    console.log(error);
  }
});

router.post("/delete", jwtAuthoriztionMiddleware, async (req, res) => {
  const id = req.body.id;

  const sqlquery = `DELETE FROM users WHERE id = ${id} `;
  try {
    db_con.query(sqlquery, (error, results) => {
      if (error) console.log(error);
      res.send({ status: "success" });
    });
  } catch (error) {
    console.log(error);
  }
  // const userObjId = req.body.id.toLowerCase();
  // db_con.query(sqlquery, (error, results) => {
  //   if (error) console.log(error);
  //   res.json(results);
  // });
  // try {
  //   // await User.deleteOne({ _id: userObjId });
  //   await User.deleteOne({ _id: userObjId });
  //   res.send({ status: "success" });
  // } catch (error) {
  //   console.log(error);
  // }
});

module.exports = router;
