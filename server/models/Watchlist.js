/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongoose = require("mongoose");
const { Schema } = mongoose;

const WatchlistSchema = new mongoose.Schema({
  title: String,
  reviewText: String,
  userEmail: String,
  id: String,
});
//reviews is the name of database collection
const WatchlistModel = mongoose.model("watchlist", WatchlistSchema);

module.exports = WatchlistModel;
