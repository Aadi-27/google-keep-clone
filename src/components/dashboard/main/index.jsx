import React from "react";
import SideMenu from "./sideMenu";
import NotesLayout from "./notesLayout";

const Main = () => {
  return (
    <div className="Main-wrapper">
      <SideMenu />
      <NotesLayout />
    </div>
  );
};

export default Main;
