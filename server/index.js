/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const UserModel = require("./models/user");
const ReviewModel = require("./models/Reviews");

const port = 3000;

//middleware
const app = express();
app.use(express.json());
app.use(cors());

// mongo database connection
mongoose
  .connect(
    "mongodb+srv://jiangling9981:xyXA3Uvjpsq4QqpI@cluster0.dcosvtu.mongodb.net/"
  )
  .then(() => console.log("database connected"))
  .catch((err) => console.log("database not connected", err));

//POST endpoint
app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
//post endpoint to handle login
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

// post endpoint to handle reviews
app.post("/review", (req, res) => {
  const { reviewText, id } = req.body;
  ReviewModel.create({ reviewText, id })
    .then((review) => res.json(review))
    .catch((err) => res.json(err));
});

//define a route to get reviews by id
app.get("/review/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Use Mongoose to find reviews by the specified id
    const reviews = await ReviewModel.find({ id }); // Replace 'Review' with your actual Mongoose model

    res.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews by id:", error);
    res.status(500).json({ error: "Failed to fetch reviews by id" });
  }
});

app.listen(port, () => console.log(`server is running on ${port}`));
