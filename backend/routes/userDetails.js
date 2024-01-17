const express = require("express");
const User = require("../model/userModel");
const router = express.Router();

router.get("/", async (req, res) => {
  const user = await User.find({});
  try {
    if (user != null) {
      res.json(user);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/delete", async (req, res) => {
  const userObjId = req.body.id.toLowerCase();
  console.log(userObjId);
  try {
    // await User.deleteOne({ _id: userObjId });
    await User.deleteOne({ _id: userObjId });
    res.send({ status: "success" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
