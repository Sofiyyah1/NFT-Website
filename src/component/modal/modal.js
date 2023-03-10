import React from "react";
import Modal from "react-bootstrap/Modal";
import "./modal.css";

const CardModal = ({
  show,
  onHide,
  img,
  title,
  price,
  ownerImg,
  ownName,
  des,
  link,
  ownerAddress,
}) => {
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
            <p>{des}</p>

            <div className="nft-detail">
              <div className="profile-image">
                <img src={ownerImg} alt="profile-img" />
              </div>
              <p>{ownName}</p>
            </div>
            <div className="owner-address">
              <p> Owner's Address:</p>
              <a href={ownerAddress}>0x2953...4963</a>
            </div>
            <a href={link} className="buy-nft">
              Buy NFT
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CardModal;
