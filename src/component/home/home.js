import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import video from "../../assets/video.webm";
import Data from "../card/data";
import Cards from "../card/card";
import CardModal from "../modal/modal";

import "./home.css";

const Home = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div className="heading">
        <video src={video} autoPlay loop muted playsInline />
        <div className="content">
          <h1>Collectible Make Me Richer</h1>
          <h5>The Richest NFT Trader Are Here</h5>
        </div>
      </div>
      <section className="collectible">
        <h2>NFT COLLECTION</h2>
        <div className="column" onClick={() => setModalShow(true)}>
          {Data.map((props, index) => {
            return <Cards key={index} props={props} />;
          })}
        </div>
        <CardModal show={modalShow} onHide={() => setModalShow(false)} />
      </section>
    </div>
  );
};

export default Home;
