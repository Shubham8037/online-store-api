import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Online-Store
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="navbar-item">
              <Link to="/person/create/" className="nav-link">
                Create Person
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/product/create" className="nav-link">
                Create Product
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/product/update" className="nav-link">
                Edit Product
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
