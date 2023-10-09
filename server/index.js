/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database connected"))
  .catch(() => console.log("databse not connected"));
const app = express();

app.use("/", require("./routes/authRoutes"));
const port = 8000;

app.listen(port, () => console.log(`server is running on ${port}`));
