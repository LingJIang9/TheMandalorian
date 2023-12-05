/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
import { Modal } from "react-bootstrap";

import axios from "axios";
import { useAuth } from "./context/AuthContext.jsx";

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
  id,
  reviewText,
  username,
}) => {
  const { isLoggedIn } = useAuth();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [showReviewModal, setShowReviewModal] = useState(false);

  // only user login can write a review
  const handleShowReviewModal = () => {
    if (isLoggedIn) {
      setShowReviewModal(true);
    } else {
      alert("You can register and login to write a review.");
    }
  };

  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const { authUser } = useAuth();

  //display review
  const handleReviewSubmit = () => {
    if (!authUser) {
      console.error("No user logged in");
      return;
    }

    const reviewData = {
      reviewText: newReview,
      id: id,
      username: authUser.Name,
    };

    axios
      .post("/review", reviewData)
      .then((response) => {
        console.log("Review submitted successfully", response.data);
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
      });
    setShowReviewModal(false);
  };

  const fetchReviewsById = (id) => {
    axios
      .get(`/review/${id}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews by id:", error);
      });
  };

  useEffect(() => {
    fetchReviewsById(id);
  }, [id]);

  //delete feature

  const handleDeleteReviewModal = (_id, username) => {
    console.log("Attempting to delete review by:", username);
    console.log("Current logged in user:", authUser?.Name);

    {
      axios
        .delete(`/review/${_id}`)
        .then((response) => {
          console.log("Review deleted successfully", response.data);

          const updatedReviews = reviews.filter((review) => review._id !== _id);
          setReviews(updatedReviews);
        })
        .catch((error) => {
          console.error("Error deleting review:", error);
        });
    }
  };

  // add movie to the watchlist

  const handleAddWatchlist = () => {
    if (isLoggedIn) {
      alert("Added to watchlist!");
    } else {
      alert("Please log in to add to watchlist.");
      return;
    }
    const movieData = {
      poster_path: poster_path,
      title: title,
      id: id,
      vote_average: vote_average,
      release_date: release_date,
      username: authUser.Name,
    };

    axios
      .post("/mywatchlist", movieData)
      .then((response) => {
        console.log("Movie added successfully", response.data);
      })
      .catch((error) => {
        console.error("Error adding movie:", error);
      });
  };

  return (
    <div className="card text-center mb-3 ">
      <div className="card-body">
        <img className="card-img-top" src={API_IMG + poster_path}></img>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-dark btn-sm"
            style={{ margin: "2px" }}
            onClick={handleShow}
          >
            View movie info
          </button>
          <button
            type="button"
            className="btn btn-dark btn-sm"
            style={{ margin: "2px" }}
            onClick={handleShowReviewModal}
          >
            Write a review
          </button>
          <button
            type="button"
            className="btn btn-dark btn-sm"
            style={{ margin: "2px" }}
            onClick={handleAddWatchlist}
          >
            Add to Watchlist
          </button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                className="card-img-top"
                style={{ width: "14em" }}
                src={API_IMG + poster_path}
              ></img>
              <h3>{title}</h3>
              <h4>ImDb:{vote_average}</h4>
              <h5>Release date:{release_date}</h5>
              <br></br>
              <h6>Overview</h6>
              <p>{overview}</p>
              <h6>ID</h6>
              <p>{id}</p>
              <h6>Reviews</h6>
              <ul className="list-group list-group-flush">
                {reviews.map((review) => (
                  <li key={review._id} className="list-group-item ">
                    <strong>{review.username}: </strong> {review.reviewText}
                    {authUser?.Name === review.username && (
                      <button
                        type="button"
                        onClick={() =>
                          handleDeleteReviewModal(review._id, review.username)
                        }
                        className="btn btn-secondary btn-sm"
                      >
                        Delete
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={handleClose} className="btn btn-dark">
                close
              </button>
            </Modal.Footer>
          </Modal>
          <Modal
            show={showReviewModal}
            onHide={() => setShowReviewModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Write a Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="form-group">
                  <label htmlFor="review">Your Review</label>
                  <textarea
                    className="form-control"
                    id="review"
                    rows="5"
                    placeholder="Write your review here"
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                  ></textarea>
                </div>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <button onClick={() => setShowReviewModal(false)}>Close</button>
              <button onClick={handleReviewSubmit}>Submit</button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
