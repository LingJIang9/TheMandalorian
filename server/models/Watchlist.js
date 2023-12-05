/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongoose = require("mongoose");
const { Schema } = mongoose;

const WatchlistSchema = new Schema({
  poster_path: String,
  title: String,
  id: String,
  vote_average: String,
  release_date: String,
  username: String,
});
//reviews is the name of database collection
const WatchlistModel = mongoose.model("watchlist", WatchlistSchema);

module.exports = WatchlistModel;
