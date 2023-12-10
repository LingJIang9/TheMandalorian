import React, { useState, useEffect } from "react";
import axios from "axios";

//toast to show message
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../components/context/AuthContext.jsx";

function MyReviewlist() {
  const { authUser } = useAuth();
  const [reviewlist, setReviewlist] = useState([]);

  useEffect(() => {
    if (authUser && authUser.Name) {
      axios
        .get(`/myreviewlist/${authUser.Name}`)
        .then((response) => {
          setReviewlist(response.data);
        })
        .catch((error) => {
          console.error("Error fetching reviewlist:", error);
        });
    }
  }, [authUser]);

  //delete review from reviewlist
  const HandleDeleteReview = (_id, username) => {
    if (!_id || !username) {
      console.error("Invalid _id or username:", _id, username);
      toast.error("Invalid parameters for movie deletion");
      return;
    }
    {
      axios
        .delete(`/myreviewlist/${_id}/${username}`)
        .then((response) => {
          console.log("movie deleted successfully", response.data);

          const updatedReviewlist = reviewlist.filter(
            (review) => review._id !== _id
          );
          setReviewlist(updatedReviewlist);
          toast("movie deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting movie:", error);
          toast.error("movie deleted failed");
        });
    }
  };

  return (
    <>
      <h1>My Reviewlist</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "30px",
        }}
      >
        {reviewlist.map((review) => (
          <div
            key={review._id} // Changed from review.id to review._id
            className="review-item"
            style={{
              margin: "10px",
              padding: "10px",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <li>Movie title: {review.title}</li>
              <li>Movie ID:{review.id}</li>
              <li>Review: {review.reviewText}</li>
              <button
                className="btn btn-secondary"
                onClick={() => HandleDeleteReview(review._id, authUser.Name)}
                style={{ marginLeft: "10px" }}
              >
                Delete Review
              </button>
            </ul>
          </div>
        ))}

        <ToastContainer
          position="top-center"
          autoClose={200}
          hideProgressBar={true}
        />
      </div>
    </>
  );
}
export default MyReviewlist;
