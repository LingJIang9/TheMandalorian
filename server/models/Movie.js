/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongoose = require("mongoose");
const { Schema } = mongoose;

const MovieSchema = new mongoose.Schema({
  title: String,
  id: String, // You may need to adjust this based on your data structure
});
//reviews is the name of database collection
const MovieModel = mongoose.model("movie", MovieSchema);

module.exports = MovieModel;
