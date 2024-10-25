import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css'; // Custom CSS file for styling

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 px-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <h1 className="footer-logo">Sameer<span className="logo-highlight">Arora</span></h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <a href="#contact" className="btn btn-gradient">Connect With Me</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
