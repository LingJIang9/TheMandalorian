/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const bcrypt = require("bcrypt");
//hash password
const { hashPassword, comparePassword } = require("../server/helpers/auth");

const jwt = require("jsonwebtoken");

const UserModel = require("./models/user");
const ReviewModel = require("./models/Reviews");
const WatchlistModel = require("./models/Watchlist");

const port = 3000;

//router new
const userRoute = express.Router();

//middleware
const app = express();
app.use(express.json());
app.use(cors());

const secretKey = "mubi-movie";

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    req.user = decoded;
    next();
  });
};

// mongo database connection
mongoose
  .connect(
    "mongodb+srv://jiangling9981:xyXA3Uvjpsq4QqpI@cluster0.dcosvtu.mongodb.net/"
  )
  .then(() => console.log("database connected"))
  .catch((err) => console.log("database not connected", err));

//POST endpoint register

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  //hash register password
  const hashedPassword = await hashPassword(password);
  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.email === email) {
          res.json("user exists, please login");
        }
      } else {
        UserModel.create({ name, email, password: hashedPassword })
          .then((user) => {
            // Generate a JWT token after successfully creating a user
            const token = jwt.sign({ email, name }, secretKey);
            console.log("JWT Token:", token);

            // Set the token in an HTTP-only cookie
            res.cookie("token", token, { httpOnly: true });

            res.json({ result: "success", name });
          })
          .catch((err) => res.json(err));
      }
    })
    .catch((err) => res.json(err));
});

// POST endpoint to handle login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      res.json({ result: "user not exists, please register" });
    } else {
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        res.json({ result: "password match" });
      } else {
        res.json({ result: "password not match" });
      }
    }
  } catch (err) {
    res.json(err);
  }
});

// post endpoint to update reviews
app.post("/review", (req, res) => {
  const { reviewText, id, username } = req.body;
  ReviewModel.create({ reviewText, id, username })
    .then((review) => res.json(review))
    .catch((err) => res.json(err));
});

//get reviews by id
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

//define a route to delete reviews by _id
app.delete("/review/:_id", (req, res) => {
  const reviewId = req.params._id;

  ReviewModel.findByIdAndDelete(reviewId)
    .then((review) => {
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
      res.json({ message: "Review deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting review:", error);
      res.status(500).json({ message: "Error deleting review" });
    });
});

//fetch user name endpoint new
// Define a route to get user name by email new
app.get("/getUserByEmail", async (req, res) => {
  const { email } = req.query;

  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      res.json({ name: user.name });
    } else {
      res.json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user by email:", error);
    res.status(500).json({ error: "Failed to fetch user by email" });
  }
});

//save movie to watchlist collection
app.post("/mywatchlist", (req, res) => {
  const { poster_path, title, id, vote_average, release_date, username } =
    req.body;
  WatchlistModel.create({
    poster_path,
    title,
    id,
    vote_average,
    release_date,
    username,
  })
    .then((movies) => res.json(movies))
    .catch((err) => res.json(err));
});

app.get("/mywatchlist/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const movies = await WatchlistModel.find({ username });

    res.json(movies);
  } catch (error) {
    console.error("Error fetching movies by username:", error);
    res.status(500).json({ error: "Failed to fetch movies by username" });
  }
});

app.listen(port, () => console.log(`server is running on ${port}`));

module.exports = userRoute;
