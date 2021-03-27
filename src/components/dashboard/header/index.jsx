import React from "react";
import "./index.css";
import ActiveMenuTitle from "./activeMenuTitle";
import GlobalSearch from "./globalSearch";
import HamburgerMenu from "./hamburgerMenu";
import ToggleTheme from "./toggleTheme";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-items-wrapper">
        <HamburgerMenu />
        <ActiveMenuTitle />
        <GlobalSearch />
        <ToggleTheme />
      </div>
      <hr className="seperator-hr" />
    </header>
  );
};

export default Header;
