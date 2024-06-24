import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import checkAuth from "../auth/checkAuth";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MedicineListItem({ post, refresh }) {
  const user = useSelector((state) => state.auth.user);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    axios
      .delete(`https://medicalstore.mashupstack.com/api/medicine/${post.id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((response) => {
        console.log("Delete Successful");
        refresh();
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        setShowModal(false);
      });
  };

  return (
    <>
      <div className="card border-dark">
        <div className="card-body">
          <strong>{post.name}</strong>
          <button
            className="btn btn-danger float-right"
            onClick={() => setShowModal(true)}
          >
            Delete
          </button>
          <Link
            to={`/edit/${post.id}`}
            className="btn btn-primary float-right mr-2"
          >
            Edit
          </Link>
          <Link
            to={`/view/${post.id}`}
            className="btn btn-info float-right mr-2"
          >
            View
          </Link>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this medicine?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default checkAuth(MedicineListItem);
