import React from 'react';
import {} from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
 

  // function Logout() {
  //   fetch("/logout", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setisRLoggedIn(false);
  //   setisDLoggedIn(false);
  //   navigate("/");
  // }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#/">Blood Bank Management</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/activeDon">Active Donations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/success">Success</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/donate">Donate</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/getall">Quantity</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/transactions">Transactions</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default NavBar;