import "bootstrap/dist/css/bootstrap.min.css";
import video from "../../assets/video.webm";
import { Data } from "../card/data";
import Cards from "../card/card";

import "./home.css";

const Home = () => {
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
        <div className="column">
          {Data.map((item, index) => {
            return (
              <Cards
                key={index}
                title={item.title}
                price={item.price}
                img={item.img}
                des={item.des}
                ownerImg={item.ownerImg}
                ownName={item.ownName}
                link={item.link}
                ownerAddress={item.ownerAddress}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
