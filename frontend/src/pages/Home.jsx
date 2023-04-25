import React from "react";
import OffersList from "../components/OfferList"; // Asuming the OfferList file is in the same folder
import "./styles.css";
import Map from "../components/Map";

function Home() {
  return (
    <div className="home-bar">
      <div className="home-offer-list">
        <OffersList />
      </div>

      <div className="home-mapa">
        <Map />
      </div>
    </div>
  );
}

export default Home;
