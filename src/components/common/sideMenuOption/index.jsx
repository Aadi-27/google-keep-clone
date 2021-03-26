import React from "react";
import "./index.css";
import { selectedMenu, toggleSelectedMenu } from "../../../redux/sideMenu";
import { useSelector, useDispatch } from "react-redux";

const SideMenuOption = ({ title, icon }) => {
  const dispatch = useDispatch();
  const data = useSelector(selectedMenu);
  const toggleMenu = () => {
    dispatch(toggleSelectedMenu(title));
    console.log(data);
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
