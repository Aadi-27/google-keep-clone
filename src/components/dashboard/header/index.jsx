import React from "react";
import "./index.css";
import ActiveMenuTitle from "./activeMenuTitle";
import GlobalSearch from "./globalSearch";
import HamburgerMenu from "./hamburgerMenu";
import ToggleTheme from "./toggleTheme";

const Header = () => {
  return (
    <Header>
      <div className="header-wrapper">
        <HamburgerMenu />
        <ActiveMenuTitle />
        <GlobalSearch />
        <ToggleTheme />
      </div>
      <hr className="seperator-hr" />
    </Header>
  );
};

export default Header;
