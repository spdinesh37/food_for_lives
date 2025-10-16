import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src={`${process.env.PUBLIC_URL}/FFL_Logo.png`} alt="Logo" />
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
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Martin_Luther_King.jpg)` }}
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
  );
};

export default Navbar;
