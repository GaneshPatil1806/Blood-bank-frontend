import React, { useState } from "react";
import './Donate.css'
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from 'react-toastify';

const Donate = () => {
  const [DonateData, setDonateData] = useState({
    hospital: "",
    quantity: "1",
    weight: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const items = JSON.parse(localStorage.getItem('token'));


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors
    console.log(items);
    const response = await fetch("/donate", {
    method: "POST",
      headers: {
      "Content-Type": "application/json",
        "Authorization": `Bearer ${items}`,
  },
    body: JSON.stringify(DonateData),
});

  if (response.ok) {
    const data = await response.json();
    if (data.error) {
      setError(data.error); // Set the error message in state
    } else {
      navigate("/success");
    }
  } else {
    const errorData = await response.text();
    setError(errorData); // Set the error message in state
  }

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
        <label htmlFor="hospital">HOSPITAL</label>
        <input
          type="text"
          id="hospital"
          name="hospital"
          value={DonateData.hospital}
          onChange={handleChange}
          required
        />

        <label htmlFor="weight">WEIGHT</label>
        <input
          type="text"
          id="weight"
          name="weight"
          value={DonateData.weight}
          onChange={handleChange}
          required
        />

        {error && <div className="error-message">{error}</div>}

        <button type="submit">Submit Donate</button>
      </form>
    </div>
  </div>
);
};

export default Donate;