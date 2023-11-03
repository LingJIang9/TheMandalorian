/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReviewSchema = new mongoose.Schema({
  reviewText: String,
  id: String, // You may need to adjust this based on your data structure
});
//reviews is the name of database collection
const ReviewModel = mongoose.model("reviews", ReviewSchema);

module.exports = ReviewModel;
