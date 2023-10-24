import React, { useState, useEffect } from "react";
import './ActiveDon.css'

const BloodDonorTable = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('token'));
    fetch("/activeDonation", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${items}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDonors(data.donation);
      })
      .catch((error) => {
        console.error("Error fetching donor data:");
      });
  }, []);

  return (
    <div className="BloodDonorTable"> {/* Corrected class name */}
      <h2>Blood Donor Information</h2>
      {donors ? (
        <table className="stock"> {/* Corrected class name */}
          <thead>
            <tr>
              <th>Blood Type</th>
              <th>Donation Date</th>
              <th>Hospital</th>
              <th>Is Available</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={index}>
                <td>{donor.blood}</td>
                <td>{donor.donation_date}</td>
                <td>{donor.hospital}</td>
                <td>{donor.is_available.toString()}</td> {/* Convert boolean to string */}
          
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No donors data present.</p>
      )}
    </div>
  );
};

export default BloodDonorTable;
