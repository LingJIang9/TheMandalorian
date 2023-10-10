/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
