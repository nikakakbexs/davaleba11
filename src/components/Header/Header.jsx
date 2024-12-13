import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isSlideShowPage = location.pathname.startsWith("/slideshow");

  return (
    <header>
      <nav>
        <Link to="/">
          <img className="logo" src="/images/shared/logo.svg" alt="Logo" />
        </Link>
        <Link className="slideLink" to={isSlideShowPage ? "/" : "/slideshow/1"}>
          <h1>{isSlideShowPage ? "Return to gallery" : "Start slideshow"}</h1>
        </Link>
      </nav>
      <div className="line"></div>
    </header>
  );
};

export default Header;
