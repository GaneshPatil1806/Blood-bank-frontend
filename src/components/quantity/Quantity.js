import React, { useEffect, useState } from 'react';
import './Quantity.css';

const BloodSamples = () => {
  const [bloodData, setBloodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/getblood')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBloodData(data.blood);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="BloodSamplesContainer">
      <h2>Blood Samples and Quantities</h2>
      <div className="sampleList">
        {isLoading ? (
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
