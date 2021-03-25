import React from "react";
import "./index.css";
import SideMenuOption from "../../../common/sideMenuOption";
import NotesIcon from "../../../../assets/lightbulb-icon.svg";
import ArchiveIcon from "../../../../assets/archive-fill-icon.svg";

const SideMenu = () => {
  const NOTES = "Notes";
  const ARCHIVES = "Archives";
  return (
    <div className="side-menu-wrapper">
      <ul className="side-menu-options">
        <SideMenuOption title={NOTES} icon={NotesIcon} />
        <SideMenuOption title={ARCHIVES} icon={ArchiveIcon} />
      </ul>
    </div>
  );
};

export default SideMenu;
