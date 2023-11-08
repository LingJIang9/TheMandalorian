/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const express = require("express");
const mongoose = require("mongoose");
// const dotevn = require("dotenv").config();
const cors = require("cors");
const bcrypt = require("bcrypt");
//hash password
const { hashPassword, comparePassword } = require("../server/helpers/auth");
//++
const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");

const UserModel = require("./models/user");
const ReviewModel = require("./models/Reviews");

const port = 3000;

//middleware
const app = express();
app.use(express.json());
app.use(cors());
// app.use(express.urlendcoded({ extended: false }));
// app.use("/", require("./routes/authRoutes"));
//++
// app.use(cookieParser());

const secretKey = "mubi-movie";

//++
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

//post endpoint to login
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

app.listen(port, () => console.log(`server is running on ${port}`));
