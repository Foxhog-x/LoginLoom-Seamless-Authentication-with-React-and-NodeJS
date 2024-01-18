const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  first_name: {
    type: "String",
    require: true,
  },
  last_name: {
    type: "String",
    require: true,
  },
  email: {
    type: "String",
    require: true,
  },
  password: {
    type: "String",
    require: true,
  },
  country: {
    type: "String",
    require: true,
  },
  state: {
    type: "String",
    require: true,
  },
  city: {
    type: "String",
    require: true,
  },
});

module.exports = mongoose.model("User", userSchema, "userlist");
