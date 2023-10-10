/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const User = require("../models/user");
const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if name was entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    //check password is good
    if (!password || password.length < 6) {
      return res.json({
        error: "password is required or less than 6 characters",
      });
    }
    // check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "email is taken already",
      });
    }
    const user = await User.create({ name, email, password });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  test,
  registerUser,
};
