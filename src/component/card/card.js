import React from "react";
import CardModal from "../modal/modal";
import Card from "react-bootstrap/Card";
import IconEthereum from "../../assets/images/icon-ethereum.svg";
import Clock from "../../assets/images/icon-clock.svg";
import "./card.css";

const Cards = ({ title, price, img }) => {
  console.log("Cards props:", title, price, img);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="card" onClick={() => setModalShow(true)}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <div className="previews">
            <p className="title">{title}</p>
            <div className="preview-comp">
              {" "}
              <div className="preview">
                <img src={IconEthereum} alt="" />
                <p>{price}</p>
              </div>
              <div className="preview">
                <img src={Clock} alt="" />
                <p>Lorem</p>
              </div>
            </div>
          </div>
        </Card.Body>
      </div>
      <CardModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        img={img}
        title={title}
        price={price}
      />
    </>
  );
};

export default Cards;
