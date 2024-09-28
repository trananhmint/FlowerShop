import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header_col">
        <Link to="/">Menu</Link>
        <Link to="/">Flowers</Link>
        <Link to="/">Our Story</Link>
      </div>
      <div className="header_col">
        <h1>Espoir</h1>
      </div>
      <div className="header_col">
        <i className="fa fa-search"></i>
        <i className="fa fa-comments"></i>
        <i className="fa fa-bell"></i>
        <i className="fa fa-shopping-cart"></i>
      </div>
    </div>
  );
}

export default Header;
