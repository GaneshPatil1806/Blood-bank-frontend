import React, { useState, useEffect } from "react";
import './Transactions.css'

const BloodTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [dname, setdname] = useState([]);
  const [rname, setrname] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const items = JSON.parse(localStorage.getItem('token'));
  useEffect(() => {
    fetch("/transcation", {
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
          console.log(data);
          setrname(data.rname);
          setdname(data.dname);
          setTransactions(data.donation);
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
        {!transactions? (
          <p>There is no transaction history.</p>
        ) : (
          <div className="transactionList">
            {transactions.map((transaction, index) => (
              <div className="transactionItem" key={index}>
                <p>Donor Name: {dname}</p>
                <p>Receiver Name: {rname}</p>
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