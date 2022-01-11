import React, { useState, useEffect } from "react";
import "./Navbar.css";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <h3>Shunya</h3> <i className="fab fa-typo3" />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a to="/" className="nav-links" onClick={closeMobileMenu}>
                Main
              </a>
            </li>
            <li className="nav-item">
              <a to="/services" className="nav-links" onClick={closeMobileMenu}>
                Camera
              </a>
            </li>
            <li className="nav-item">
              <a to="/products" className="nav-links" onClick={closeMobileMenu}>
                Tuner
              </a>
            </li>

            <li className="nav-item">
              <a
                to="/contactus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Rocks
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
