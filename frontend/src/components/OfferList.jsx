import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faUserClock,
  faBriefcase,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";

function OfferList() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/api/offer");
      const data = await response.json();
      setOffers(data);
    }

    fetchData();
  }, []);

  return (
    <div className="offer-list">
      <h1>List of Offers</h1>
      {offers.map((offer) => (
        <div key={offer.id} className="offer-item">
          <div>
            {" "}
            <p className="company">{offer.company}</p>
            <p className="offer-salary">
              {" "}
              Salary: ${offer.salaryMin} - ${offer.salaryMax}
            </p>
            <p className="offer-industry">
              <FontAwesomeIcon icon={faIndustry} /> Industry: {offer.industry}
            </p>
            <p className="offer-experience">
              {" "}
              <FontAwesomeIcon icon={faUserClock} /> Experience:{" "}
              {offer.experience}
            </p>
            <p className="offer-jobType">
              {" "}
              <FontAwesomeIcon icon={faBriefcase} /> Job Type: {offer.jobType}
            </p>
            <p className="offer-formOfEmployment">
              {" "}
              <FontAwesomeIcon icon={faFileContract} />
              Form of Employment: {offer.formOfEmployment}
            </p>
          </div>
          <h2>{offer.position}</h2>

          <p className="description">{offer.description}</p>
          <div className="offer-details">
            <p className="offer-location">Location: {offer.location}</p>
            <p className="offer-startOfferTime">
              Start Offer Time: {offer.startOfferTime}
            </p>
            <p className="offer-endOfferTime">
              End Offer Time: {offer.endOfferTime}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OfferList;
