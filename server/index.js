/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const express = require("express");
const { mongoose } = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/user");

// const dotenv = require("dotenv").config();

//middleware
const app = express();
app.use(express.json());
app.use(cors());

// mongo database connection
mongoose
  .connect(
    "mongodb+srv://jiangling9981:h7i2R7Qv2ynWQ6lm@cluster0.3rmhtyz.mongodb.net/"
  )
  .then(() => console.log("database connected"))
  .catch(() => console.log("databse not connected", err));

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// app.use("/", require("./routes/authRoutes"));

const port = 3000;
app.listen(port, () => console.log(`server is running on ${port}`));
