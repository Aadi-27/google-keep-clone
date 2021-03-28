import React from "react";
import "./index.css";
import { toggleSelectedMenu } from "../../../redux/sideMenu";
import { useDispatch } from "react-redux";

const SideMenuOption = ({ title, icon }) => {
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleSelectedMenu(title));
  };
  return (
    <li className="side-menu" onClick={toggleMenu}>
      <div className="side-menu-icon-wrapper">
        <img className="side-menu-icon" src={icon} alt="notes option" />
      </div>
      <span className="side-menu-title">{title}</span>
    </li>
  );
};

export default SideMenuOption;
