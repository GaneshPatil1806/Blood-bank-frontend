import React, { useState, useEffect } from "react";
import './ActiveDon.css'

const BloodDonorTable = () => {
  const [donors, setDonors] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    fetch("/transcation", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
  
        setDonors(data.donors);
      })
      .catch((error) => {
        console.error("Error fetching donor data:", error);
      });
  }, []);
  

  const handleRequestBlood = () => {
    if (isUserLoggedIn === true) {
      // TODO: req the blood if accepted delete from the blood bank
      // history.push("/success");
    } else {
      // history.push("/login");
    }
  };

  return (
    <div className="stock">
      <h2>Blood Donor Information</h2>
      {donors && donors.length() > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Blood Type</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={index}>
                <td>{donor.first_name}</td>
                <td>{donor.last_name}</td>
                <td>{donor.blood}</td>
                <td>
                  <button onClick={handleRequestBlood}>Request Blood</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading donor data...</p>
      )}
    </div>
  );
};

export default BloodDonorTable;