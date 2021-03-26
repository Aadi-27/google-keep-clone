import React from "react";
import "./index.css";
import SideMenuOption from "../../../Common/sideMenuOption";
import NotesIcon from "../../../../Assets/lightbulb-icon.svg";
import ArchiveIcon from "../../../../Assets/archive-fill-icon.svg";

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
