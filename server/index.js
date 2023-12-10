/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
require("dotenv").config();

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

//

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "script-src 'self'");
  next();
});
app.use((err, req, res, next) => {
  res
    .status(500)
    .json({ message: "An error occurred, please try again later." });
});

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
// new, security
// res.cookie("token", token, {
//   httpOnly: true,
//   secure: true, // set to true if your application runs over HTTPS
//   sameSite: "strict",
// });

// mongo database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database not connected", err));

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

// post endpoint to create reviews
app.post("/review", (req, res) => {
  const { reviewText, id, username, title } = req.body;
  ReviewModel.create({ reviewText, id, username, title })
    .then((review) => res.json(review))
    .catch((err) => res.json(err));
});

//get reviews by id
app.get("/review/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Use Mongoose to find reviews by the specified id
    const reviews = await ReviewModel.find({ id });

    res.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews by id:", error);
    res.status(500).json({ error: "Failed to fetch reviews by id" });
  }
});

//delete reviews by _id
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

//delete movie by fetching movie id and username
app.delete("/mywatchlist/:id/:username", (req, res) => {
  const id = req.params.id;
  const username = req.params.username;

  WatchlistModel.findOneAndDelete({ id, username })
    .then((movie) => {
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.json({ message: "Movie deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting movie:", error);
      res.status(500).json({ message: "Error deleting movie" });
    });
});

//get reviews by username
app.get("/myreviewlist/:username", async (req, res) => {
  try {
    const username = req.params.username;
    console.log("Requested reviews for username:", username); // Debugging line

    // Use Mongoose to find reviews by the specified id
    const reviews = await ReviewModel.find({ username });
    res.json(reviews);
    console.log("Retrieved reviews:", reviews); // Debugging line
  } catch (error) {
    console.error("Error fetching reviews by usernmae:", error);
    res.status(500).json({ error: "Failed to fetch reviews by usernmae" });
  }
});

//delete review by fetching review_id and username
app.delete("/myreviewlist/:_id/:username", (req, res) => {
  const _id = req.params._id;
  const username = req.params.username;

  ReviewModel.findOneAndDelete({ _id, username })
    .then((review) => {
      if (!review) {
        return res.status(404).json({ message: "review not found" });
      }
      res.json({ message: "review deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting review:", error);
      res.status(500).json({ message: "Error deleting review" });
    });
});

app.listen(port, () => console.log(`server is running on ${port}`));

module.exports = userRoute;
