import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../photos/website-logo.svg";
import { EnvironmentOutlined, CloseOutlined } from "@ant-design/icons";
import hamburger from "../../photos/hamburger.svg"
import { Link, useHistory } from "react-router-dom";

function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [headerStyle, setHeaderStyling] = useState("headercontainer");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    let scroll_pos = window.pageYOffset;
    if (scroll_pos > 30) {
      setHeaderStyling("headercontainer headBgWhite");
    } else {
      setHeaderStyling("headercontainer");
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const history = useHistory();

  const redirectToHome = () => {
    history.push("/");
  };

  return (
    <div className={headerStyle}>
      <div className="header">
        <div className="logoContainer" onClick={() => redirectToHome()}>
          >
          <div className="logoTextContainer">
            <span className="mainLogoText">Bike</span>
            <span className="helperLogoText">Helpers</span>
          </div>
        </div>

        <div className="navigationContainer">
          <div className="locationContainer">
            <EnvironmentOutlined className="locationIcon" />
            <span className="locationText">Delhi</span>
          </div>
          <Link to="/" className="navigationText">
            Home
          </Link>
          <Link to="/work" className="navigationText">
            How It Works
          </Link>
          <Link to="/services" className="navigationText">
            Services
          </Link>
          <Link to="/contact" className="navigationText">
            Contact Us
          </Link>
          {/* <Button
            type="primary"
            className="primaryButton navigationButton"
            shape="round"
            size="large"
          >
            Register / Login
          </Button> */}
        </div>
      </div>
      <div className="mobileHeader">
        <div className="mobileLogoContainer">
          {isNavVisible ? (
            <CloseOutlined className="hamburgerIcon" onClick={toggleNav} />
          ) : (
            <img
                src={hamburger}
                className="hamburgerIcon"
                onClick={toggleNav}
                alt="Toggle Logo"
              />
          )}
          <span className="mainLogoText">EzyHelpers</span>
        </div>
        {isNavVisible && (
          <div className="nav">
            <Link to="/" className="navigationText">
              Home
            </Link>
            <Link to="/aboutus" className="navigationText">
              About Us
            </Link>
            <Link to="/services" className="navigationText">
              Services
            </Link>
            <Link to="/contactus" className="navigationText">
              Contact Us
            </Link>
            {/* <Button
              type="primary"
              className="primaryButton navigationButton"
              shape="round"
              size="large"
            >
              Register / Login
            </Button> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
