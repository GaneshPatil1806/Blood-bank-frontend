import './App.css';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Register from './components/login/register/Register';
import ActiveDon from './components/activeDonations/ActiveDon';
import Home from './components/home/home';
import Success from './components/Success/Success';
import Donate from './components/donate/Donate'
import Trasactions from './components/transactions/Transactions';
import Quantity from './components/quantity/Quantity';
import Receive from './components/Receive/Receive';
import {react,useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route exact path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
          <Route exact path="/success" element={<Success />}></Route>
          <Route exact path="/donate" element={<Donate />}></Route>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/activeDon" element={<ActiveDon />}></Route>
          <Route exact path="/register" element={<Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route exact path="/getall" element={<Quantity />}></Route>
          <Route exact path="/transactions" element={<Trasactions/>}></Route>
          <Route exact path="/receive" element={<Receive/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
