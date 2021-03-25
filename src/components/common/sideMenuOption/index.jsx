import React from "react";
import "./index.css";

const SideMenuOption = ({ title, icon }) => {
  return (
    <li className="side-menu">
      <div className="side-menu-icon-wrapper">
        <img className="side-menu-icon" src={icon} alt="notes option" />
      </div>
      <span className="side-menu-title">{title}</span>
    </li>
  );
};

export default SideMenuOption;
