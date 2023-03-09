import Modal from "react-bootstrap/Modal";
// import Data from "../card/data";
import Ape from "../../assets/card-img/ape-0.png";
import Avatar from "../../assets/images/image-avatar.png";

import "./modal.css";

function CardModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ApeDocs <span className="eth"> 0.091 ETH</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-col">
          <img src={Ape} alt="" />
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
}

export default CardModal;
