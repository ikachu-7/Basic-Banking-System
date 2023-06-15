import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div>
      <nav className="nav-bar">
        <img src="logo.svg" alt="nav" />
        <div className="nav-items">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/history">History</NavLink>
          <NavLink to="*">blog</NavLink>
          <NavLink to="*">contact</NavLink>
        </div>
        <button onClick={()=>navigate('/transaction',{state: {NAME:"",EMAIL:"",BANK:""}})}>Transaction</button>
      </nav>
    </div>
  );
};

export default Navbar;
