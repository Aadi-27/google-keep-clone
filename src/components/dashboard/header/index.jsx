import React from "react";
import "./index.css";
import ActiveMenuTitle from "./activeMenuTitle";
import GlobalSearch from "./globalSearch";
import HamburgerMenu from "./hamburgerMenu";
import ToggleTheme from "./toggleTheme";
import { isDarkModeOn } from "../../../redux/toggleTheme";
import { useSelector } from "react-redux";

const Header = () => {
  const isDarkMode = useSelector(isDarkModeOn);

  return (
    <header className={`header-wrapper ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="header-items-wrapper">
        <HamburgerMenu />
        <ActiveMenuTitle />
        <GlobalSearch />
        <ToggleTheme />
      </div>
      <hr className={`seperator-hr ${isDarkMode ? "dark-mode-hr" : ""}`} />
    </header>
  );
};

export default Header;
