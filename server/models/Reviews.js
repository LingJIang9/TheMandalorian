/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReviewSchema = new mongoose.Schema({
  reviewText: String,
  // movie id
  id: String,
  //only user who logged in, can review, so the user's name will be there
  // name: String,
});
//reviews is the name of database collection
const ReviewModel = mongoose.model("reviews", ReviewSchema);

module.exports = ReviewModel;
