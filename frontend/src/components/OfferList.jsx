import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OfferList.css";

const OffersList = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/offer");
      setOffers(response.data);
    } catch (error) {
      console.error("Błąd podczas pobierania ofert pracy:", error);
    }
  };

  return (
    <div className="offers-container">
      {offers.map((offer) => (
        <div key={offer.id} className="offer-card">
          <h3>{offer.position}</h3>
          <p>{offer.company}</p>
          <p>Lokalizacja: {offer.location}</p>
          <p>
            Wynagrodzenie: {offer.salaryMin} - {offer.salaryMax} PLN / rok
          </p>
          <p>Umowa: {offer.formOfEmployment}</p>
          <p>Doświadczenie: {offer.experience}</p>
        </div>
      ))}
    </div>
  );
};

export default OffersList;
