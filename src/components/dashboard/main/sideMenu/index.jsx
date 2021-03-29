import React from "react";
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
import { isDarkModeOn } from "../../../../redux/toggleTheme";
import { useSelector } from "react-redux";

const SideMenu = () => {
  const NOTES = "Notes";
  const ARCHIVES = "Archives";
  const isExpanded = useSelector(menuIsExpanded);
  const shouldContract = useSelector(shouldMenuContract);
  const isDarkMode = useSelector(isDarkModeOn);

  return (
    <div
      className={`side-menu-wrapper ${isDarkMode ? "dark-mode" : ""} ${
        isExpanded ? "slideIn" : shouldContract ? "slideOut" : "contracted-menu"
      }`}
    >
      <ul
        className={`side-menu-options ${isDarkMode ? "dark-mode-border" : ""}`}
      >
        <SideMenuOption
          title={NOTES}
          icon={isDarkMode ? NotesIconWhite : NotesIcon}
        />
        <SideMenuOption
          title={ARCHIVES}
          icon={isDarkMode ? ArchiveIconWhite : ArchiveIcon}
        />
      </ul>
    </div>
  );
};

export default SideMenu;
