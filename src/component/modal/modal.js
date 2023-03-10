import React from "react";
import Modal from "react-bootstrap/Modal";
import "./modal.css";

import Avatar from "../../assets/images/image-avatar.png";

const CardModal = ({ show, onHide, img, title, price }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {title} <span className="eth"> {price}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-col">
          <img src={img} alt="Card modal" />
          <div className="description">
            <h4>Description</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>

            <div className="avatar">
              <img src={Avatar} alt="" />
              <p>John Doe</p>
            </div>
            <div className="wallet">
              <p> Wallet:</p>
              <a href="#">
                <span>a42f4693fede4c5a78364391413a47018975df5e</span>
              </a>
            </div>
            <a
              href="https://opensea.io/assets/ethereum/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/0"
              className="buy-nft"
            >
              Buy NFT
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CardModal;
