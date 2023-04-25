import React, { useState } from "react";
import "./AddOffer.css";

const AddOffer = () => {
  const [formData, setFormData] = useState({
    id: 0,
    position: "",
    industry: "",
    experience: "",
    jobType: "",
    formOfEmployment: "",
    company: "",
    location: "",
    salaryMin: "",
    salaryMax: "",
    startOfferTime: "",
    endOfferTime: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/offer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("ERROR");
      }

      console.log("DONE");
    } catch (error) {
      console.error("error>", error);
    }
  };
  return (
    <div className="add-offer-container">
      <form className="add-offer-form" onSubmit={handleSubmit}>
        <label></label>
        <br />
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Industry:
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Experience:
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Job Type:
          <input
            type="text"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Form of Employment:
          <input
            type="text"
            name="formOfEmployment"
            value={formData.formOfEmployment}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Salary Min:
          <input
            type="text"
            name="salaryMin"
            value={formData.salaryMin}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          {" "}
          Salary Max:
          <input
            type="text"
            name="salaryMax"
            value={formData.salaryMax}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default AddOffer;
