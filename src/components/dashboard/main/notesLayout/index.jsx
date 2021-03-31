import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { searchValue } from "../../../../redux/globalSearch";
import { selectedMenu } from "../../../../redux/sideMenu";
import { notesArray } from "../../../../redux/notes";
import CreateNotes from "./createNotes";
import SavedNotesLayout from "./SavedNotesLayout";
import SearchedNotesLayout from "./SearchedNotesLayout";
import ArchivedNotesLayout from "./archivedNotesLayout";

const NotesLayout = () => {
  const searchedNotes = useSelector(searchValue);
  const selectedSideMenu = useSelector(selectedMenu);
  const allNotes = useSelector(notesArray);
  return (
    <div className="notes-layout-wrapper">
      {searchedNotes.length ? (
        <SearchedNotesLayout allNotes={allNotes} />
      ) : selectedSideMenu === "Archives" ? (
        <ArchivedNotesLayout allNotes={allNotes} />
      ) : (
        <>
          <CreateNotes />
          <SavedNotesLayout allNotes={allNotes} />
        </>
      )}
    </div>
  );
};

export default NotesLayout;
