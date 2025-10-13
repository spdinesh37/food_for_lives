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
  );
};

export default Navbar;
