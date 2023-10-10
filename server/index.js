/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const app = express();
//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database connected"))
  .catch(() => console.log("databse not connected", err));

//middleware
app.use(express.json());
app.use(cors());

app.use("/", require("./routes/authRoutes"));
const port = 8000;

app.listen(port, () => console.log(`server is running on ${port}`));
