import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import ActiveMenuTitle from "./activeMenuTitle";
import GlobalSearch from "./globalSearch";
import HamburgerMenu from "./hamburgerMenu";
import ToggleTheme from "./toggleTheme";

const Header = ({ isDarkMode }) => {
  return (
    <header className={`header-wrapper ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="header-items-wrapper">
        <HamburgerMenu isDarkMode={isDarkMode} />
        <ActiveMenuTitle isDarkMode={isDarkMode} />
        <Link to="/search">
          <GlobalSearch />
        </Link>
        <ToggleTheme isDarkMode={isDarkMode} />
      </div>
      <hr className={`seperator-hr ${isDarkMode ? "dark-mode-hr" : ""}`} />
    </header>
  );
};

export default Header;
