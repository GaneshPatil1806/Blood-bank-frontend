import React, { useState, useEffect } from "react";
import './Transactions.css'

const BloodTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    // Make a GET request to your backend API to fetch the blood donation transactions
    fetch("/api/show_transaction") // Replace with the actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        if (data.donation && data.donation.length > 0) {
          setTransactions(data.donation); // Update the state with the fetched data
        } else {
          setIsEmpty(true);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="BloodTransactionContainer">
      <h2>Blood Donation Transactions</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : isEmpty ? (
        <p>Your donation history is empty.</p>
      ) : (
        <div className="transactionList">
          {transactions.map((transaction, index) => (
            <div className="transactionItem" key={index}>
              {/* Display transaction details here */}
              <p>Transaction ID: {transaction.transaction_id}</p>
              <p>Donor ID: {transaction.donor_id}</p>
              <p>Receiver ID: {transaction.receiver_id}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BloodTransaction;