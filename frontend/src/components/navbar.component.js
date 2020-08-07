import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/navigation.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar__logo" style={{ color: "#edff34" }}>
          ONLINE&mdash;STORE
        </Link>

        <div className="navbar__secondary">
          <ul className="navbar__lists">
            <li className="navbar__item">
              <Link to="/">Products</Link>
            </li>
            <li className="navbar__item">
              <Link to="/person/create/">Create Person</Link>
            </li>

            <li className="navbar__item">
              <Link to="/product/create">Create Product</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
