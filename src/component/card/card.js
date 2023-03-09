import React from "react";
import Card from "react-bootstrap/Card";
import IconEthereum from "../../assets/images/icon-ethereum.svg";
import Clock from "../../assets/images/icon-clock.svg";
import "./card.css";

const Cards = ({ props }) => {
  return (
    <>
      <div className="card">
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <p className="title">{props.title}</p>
          <div className="previews">
            <div className="preview">
              <img src={IconEthereum} alt="" />
              <p>{props.price}</p>
            </div>
            <div className="preview">
              <img src={Clock} alt="" />
              <p>Lorem</p>
            </div>
          </div>
        </Card.Body>
      </div>
    </>
  );
};

export default Cards;
