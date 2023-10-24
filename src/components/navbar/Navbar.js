import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const NavBar = ({isLoggedIn, setIsLoggedIn}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => {
      setIsLoggedIn(false); // Set the user as logged out
      navigate("/login"); 
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">Blood Bank Management</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                {isLoggedIn ? (
                  <button className="nav-item button" onClick={handleLogout}>Logout</button>
                ) : (
                  <Link className="nav-link" to="/login">Login</Link>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/activeDon">Active Donations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donate">Donate</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/getall">Quantity</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/transactions">Transactions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/receive">Receive</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;