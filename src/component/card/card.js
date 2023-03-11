import React from "react";
import CardModal from "../modal/modal";
import Card from "react-bootstrap/Card";
import IconEthereum from "../../assets/images/icon-ethereum.svg";
import "./card.css";

const Cards = ({
  title,
  price,
  img,
  ownerImg,
  ownName,
  des,
  link,
  ownerAddress,
}) => {
  console.log("Cards props:", title, price, img);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="card" onClick={() => setModalShow(true)}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <div className="nft-info">
            <p className="title">{title}</p>
            <div className="nft-details">
              <div className="nft-detail">
                <img
                  className="profile-image"
                  src={ownerImg}
                  alt="profile-img"
                />

                <p>{ownName}</p>
              </div>
              <div className="nft-detail">
                <img src={IconEthereum} className="ethereum" alt="ethereum" />
                <p>{price}</p>
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
        ownerImg={ownerImg}
        ownName={ownName}
        des={des}
        link={link}
        ownerAddress={ownerAddress}
      />
    </>
  );
};

export default Cards;
