/* eslint-disable no-unused-vars */
import React, { useState } from "react";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
import { Modal } from "react-bootstrap";
// import { show } from "react-bootstrap";

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);
  return (
    <div className="card text-center mb-3">
      <div className="card-body">
        <img className="card-img-top" src={API_IMG + poster_path}></img>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-dark"
            style={{ margin: "0 auto" }}
            onClick={handleShow}
          >
            View movies
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
            </Modal.Body>
            <Modal.Footer>
              <button onClick={handleClose}>close</button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
