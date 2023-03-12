import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="chatapp-logo">
        <p><Link to="/">Chatapp</Link></p>
      </div>
      <div className="links-container">
        <Link to="/register">Register</Link>
        <Link to="/login">Log In</Link>
      </div>
    </nav>
  )
}

export default Navbar;