import React, { useState } from "react";
import './Donate.css'

const Donate = () => {
  const [DonateData, setDonateData] = useState({
    name: "",
    bloodType: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/blood/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DonateData),
    });
  
    console.log(response);

  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonateData({
      ...DonateData,
      [name]: value,
    });
  };

  return (
    <div className="Blood-box">
      <div className="BloodDonateContainer">
        <h1>Blood Donate Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">HOSPITAL</label>
          <input
            type="text"
            id="hospital"
            name="hospital"
            value={DonateData.hospital}
            onChange={handleChange}
            required
          />

          <label htmlFor="bloodType">QUANTITY</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={DonateData.quantity}
            onChange={handleChange}
            required
          />

          <label htmlFor="location">WEIGHT</label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={DonateData.weight}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Donate</button>
        </form>
      </div>
    </div>
  );
};

export default Donate;