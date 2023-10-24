import React, { useState, useEffect } from 'react';
import './Receive.css';

const ReceiveBlood = () => {
  const [donors, setDonors] = useState([]);
  const items = JSON.parse(localStorage.getItem('token'));

  useEffect(() => {
    fetch('/showDonation', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${items}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDonors(data.donation);
      })
      .catch((error) => {
        console.error('Error fetching donor data:', error);
      });
  }, []);

  const handleReceive = (donorId) => {
    fetch('/recieve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${items}`,
      },
      body: JSON.stringify({d_id: donorId }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend if needed
      })
      .catch((error) => {
        console.error('Error receiving blood:', error);
      });
  };

  return (
    <div className="transa">
      <h2>Blood Donor Information</h2>
      {donors ? (
        <table className="stock">
          <thead>
            <tr>
              <th>Blood Type</th>
              <th>Donation Date</th>
              <th>Hospital</th>
              <th>Is Available</th>
              <th>Receive</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={index}>
                <td>{donor.blood}</td>
                <td>{donor.donation_date}</td>
                <td>{donor.hospital}</td>
                <td>{donor.is_available.toString()}</td>
                <td>
                  <button onClick={() => handleReceive(donor.id)}>Receive</button>
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

export default ReceiveBlood;