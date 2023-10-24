import React, { useState, useEffect } from "react";
import './Transactions.css'

const BloodTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const items = JSON.parse(localStorage.getItem('token'));
 
  useEffect(() => {
    fetch("/transaction", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${items}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setIsEmpty(true);
        } else {
          setTransactions(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching transaction data:", error);
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
              <p>Donor ID: {transaction.donar_id}</p>
              <p>Receiver ID: {transaction.receiver_id}</p>
              <p>Blood Type: {transaction.blood}</p>
              <p>Quantity: {transaction.quantity}</p>
              <p>Created At: {transaction.created_at}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BloodTransaction;