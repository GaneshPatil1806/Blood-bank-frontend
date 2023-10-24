import React, { useState } from 'react';
import './Receive.css'

const ReceiveBlood = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const items = JSON.parse(localStorage.getItem('token'));
  

  const handleReceiveBlood = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('/recieve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${items}`,
        },
      });

      if (response.ok) {
        
      } else {

        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      setError('Internal Server Error');
    }

    setIsLoading(false);
  };

  return (
    <div>
      <button onClick={handleReceiveBlood} disabled={isLoading}>
        {isLoading ? 'Receiving...' : 'Receive Blood'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ReceiveBlood;