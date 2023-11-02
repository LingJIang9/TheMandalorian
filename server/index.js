/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const UserModel = require("./models/User");
const port = 3000;
// const movieRoutes = require("./routes/movies");
// const dotenv = require("dotenv").config();

//middleware
const app = express();
app.use(express.json());
app.use(cors());
// app.use("/api", movieRoutes);

// mongo database connection
mongoose
  .connect(
    "mongodb+srv://jiangling9981:xyXA3Uvjpsq4QqpI@cluster0.dcosvtu.mongodb.net/"
  )
  .then(() => console.log("database connected"))
  .catch((err) => console.log("database not connected", err));

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("success");
        } else {
          res.json("password incorrect");
        }
      } else {
        res.json("user not exists");
      }
    })
    .catch((err) => res.json(err));
});
// app.use("/", require("./routes/authRoutes"));

app.listen(port, () => console.log(`server is running on ${port}`));
