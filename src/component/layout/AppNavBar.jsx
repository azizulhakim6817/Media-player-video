import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const AppNavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow mt-3">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Logo" width="50" height="auto" />
            </a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link-1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link-2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link-3
                </a>
              </li>
            </ul>
            <Link to="/" className="btn btn-primary fw-bold" type="submit">
              Video URL check Now
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppNavBar;
