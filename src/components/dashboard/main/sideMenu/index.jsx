import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import SideMenuOption from "../../../common/sideMenuOption";
import NotesIcon from "../../../../assets/lightbulb-icon.svg";
import ArchiveIcon from "../../../../assets/archive-fill-icon.svg";
import NotesIconWhite from "../../../../assets/lightbulb-white.svg";
import ArchiveIconWhite from "../../../../assets/archive-fill-white.svg";
import {
  menuIsExpanded,
  shouldMenuContract,
} from "../../../../redux/expandSideMenu";
import { useSelector } from "react-redux";

const SideMenu = ({ isDarkMode }) => {
  const NOTES = "Notes";
  const ARCHIVES = "Archives";
  const isExpanded = useSelector(menuIsExpanded);
  const shouldContract = useSelector(shouldMenuContract);

  return (
    <div
      className={`side-menu-wrapper ${isDarkMode ? "dark-mode" : ""} ${
        isExpanded ? "slideIn" : shouldContract ? "slideOut" : "contracted-menu"
      }`}
    >
      <ul
        className={`side-menu-options ${isDarkMode ? "dark-mode-border" : ""}`}
      >
        <Link to="/notes">
          <SideMenuOption
            title={NOTES}
            icon={isDarkMode ? NotesIconWhite : NotesIcon}
          />
        </Link>
        <Link to="/archives">
          <SideMenuOption
            title={ARCHIVES}
            icon={isDarkMode ? ArchiveIconWhite : ArchiveIcon}
          />
        </Link>
      </ul>
    </div>
  );
};

export default SideMenu;
