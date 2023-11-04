/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
import { Modal } from "react-bootstrap";
import "../components/MovieBox";
import axios from "axios";

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
  id,
  reviewText,
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const [showReviewModal, setShowReviewModal] = useState(false);
  const handleShowReviewModal = () => setShowReviewModal(true);

  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  //review
  const handleReviewSubmit = () => {
    axios
      .post("/review", { reviewText: newReview, id })
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

  const handleDeleteReviewModal = (_id) => {
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
  };

  return (
    <div className="card text-center mb-3 ">
      <div className="card-body">
        <img className="card-img-top" src={API_IMG + poster_path}></img>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-dark btn-sm"
            style={{ margin: "0 auto" }}
            onClick={handleShow}
          >
            View movies
          </button>
          <button
            type="button"
            className="btn btn-dark btn-sm"
            style={{ margin: "2px auto" }}
            onClick={handleShowReviewModal}
          >
            Write a review
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
                    {review.reviewText}

                    <button
                      type="button"
                      onClick={() => handleDeleteReviewModal(review._id)}
                      className="btn btn-secondary btn-sm"
                      style={{ display: "flex" }}
                    >
                      Delete
                    </button>
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
