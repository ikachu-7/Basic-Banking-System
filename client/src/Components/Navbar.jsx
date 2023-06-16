// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate()

//   return (
//     <div>
//       <nav className="nav-bar">
//       <h1 className="navbar-logo"><span style={{fontSize:"40px"}}>🏦</span> Silvergate</h1>
//         <div className="nav-items">
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/history">History</NavLink>
//           <NavLink to="*">blog</NavLink>
//           <NavLink to="*">contact</NavLink>
//         </div>
//         <button onClick={()=>navigate('/transaction',{state: {NAME:"",EMAIL:"",BANK:""}})}>Transaction</button>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <nav className={`nav-bar ${expanded ? "expanded" : ""}`}>
        <h1 className="navbar-logo">
          <span style={{ fontSize: "40px" }}>🏦</span> Silvergate
        </h1>
        <div className={`nav-items ${expanded ? "expanded" : ""}`}>
          <NavLink exact to="/" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/history" onClick={toggleMenu}>
            History
          </NavLink>
          <NavLink to="*" onClick={toggleMenu}>
            Blog
          </NavLink>
          <NavLink to="*" onClick={toggleMenu}>
            Contact
          </NavLink>
        </div>
        <button onClick={() => navigate("/transaction", { state: { NAME: "", EMAIL: "", BANK: "" } })}>
          Transaction
        </button>
        <div className={`menu-toggle ${expanded ? "expanded" : ""}`} onClick={toggleMenu}>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
