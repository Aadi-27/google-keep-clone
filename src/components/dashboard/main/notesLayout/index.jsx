import React from "react";
import "./index.css";
import CreateNotes from "./createNotes";
import DisplayNotes from "./displayNotes";

const NotesLayout = () => {
  return (
    <div className="notes-layout-wrapper">
      <CreateNotes />
      <DisplayNotes />
    </div>
  );
};

export default NotesLayout;
