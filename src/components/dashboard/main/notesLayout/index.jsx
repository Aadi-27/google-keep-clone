import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { searchValue } from "../../../../redux/globalSearch";
import { selectedMenu } from "../../../../redux/sideMenu";
import CreateNotes from "./createNotes";
import SavedNotesLayout from "./savedNotesLayout";
import SearchedNotesLayout from "./searchedNotesLayout";
import ArchivedNotesLayout from "./archivedNotesLayout";

const NotesLayout = () => {
  const searchedNotes = useSelector(searchValue);
  const selectedSideMenu = useSelector(selectedMenu);
  return (
    <div className="notes-layout-wrapper">
      {searchedNotes.length ? (
        <SearchedNotesLayout />
      ) : selectedSideMenu === "Archives" ? (
        <ArchivedNotesLayout />
      ) : (
        <>
          <CreateNotes />
          <SavedNotesLayout />
        </>
      )}
    </div>
  );
};

export default NotesLayout;
