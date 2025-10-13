<<<<<<< HEAD
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src="/FFL_Logo.png" alt="Logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">Why</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Departments</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Model</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Connect</a></li>
          </ul>
        </div>
      </div>
    </nav>
=======
import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#about">
            <img src="/FFL_Logo.png" alt="Logo"/>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">Why</a></li>
              <li className="nav-item"><a className="nav-link" href="#education">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#experience">Departments</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Model</a></li> 
              <li className="nav-item"><a className="nav-link" href="#projects">Connect</a></li>
              <li className="nav-item"><a className="nav-link" href="#certifications">Certifications</a></li>
              <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero directly below navbar */}
      <section
        className="hero"
        style={{ backgroundImage: `url(/Martin_Luther_King.jpg)` }}
      >
        <div className="overlay">
          <div className="quote">
            <p>
              “The function of education is to teach one to think intensively and to think critically. 
              But education which stops with efficiency may prove the greatest menace to society. 
              Intelligence plus character — that is the goal of true education.”
            </p>
            <p className="author">
              <em>
                The Purpose of Education <br />
                Martin Luther King, Jr. <br />
                Morehouse College, GA, 1947
              </em>
            </p>
          </div>
        </div>
      </section>
    </>
>>>>>>> ed50a2b85e969a84fb08d4ccd2e00cc336e14016
  );
};

export default Navbar;
