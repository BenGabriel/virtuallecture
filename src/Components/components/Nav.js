import React from "react";
import "./component.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h2>VIRTUAL LECTURER DELIVERY MULTIMEDIA SYSTEM</h2>
      <ul className="nav-links">
        <NavLink className="nav-item" to="/">
          Login
        </NavLink>
        <NavLink className="nav-item" to="/signup">
          Sign Up
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
