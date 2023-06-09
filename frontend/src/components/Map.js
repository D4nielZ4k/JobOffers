/* global google */
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 52.2297, lng: 21.0122 }, // Center map on Warsaw, Poland
        zoom: 10,
      });
    });
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "100%",
        minHeight: "400px",
      }}
    ></div>
  );
};

export default Map;
