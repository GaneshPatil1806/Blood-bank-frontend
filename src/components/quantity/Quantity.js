import React, { useEffect, useState } from 'react';
import './Quantity.css';

const BloodSamples = () => {
  // const [bloodData, setBloodData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

   const bloodData = [
    { bloodType: "A+", quantity: 25 },
    { bloodType: "B+", quantity: 15 },
    { bloodType: "O+", quantity: 30 },
    { bloodType: "AB+", quantity: 20 },
    { bloodType: "A-", quantity: 10 },
    { bloodType: "B-", quantity: 5 },
    { bloodType: "O-", quantity: 15 },
    { bloodType: "AB-", quantity: 8 },
  ];
  
  // useEffect(() => {
  //   fetch('/getblood')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBloodData(data.blood);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <div className="BloodSamplesContainer">
      <h2>Blood Samples and Quantities</h2>
      <div className="sampleList">
        {true ? (
          <p>Loading...</p>
        ) : (
          bloodData.map((sample, index) => (
            <div className="sampleBox" key={index}>
              <h3>{sample.blood}</h3>
              <p>Quantity: {sample.sum}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BloodSamples;
