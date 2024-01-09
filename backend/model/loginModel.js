const mongoose = require("mongoose");

const { Schema } = mongoose;

const userLoginSchema = new Schema({
  email: {
    type: "String",
    require: true,
  },
  password: {
    type: "String",
    require: true,
  },
});

const loginUser = mongoose.model("Loginuser", userLoginSchema);

module.exports = loginUser;
