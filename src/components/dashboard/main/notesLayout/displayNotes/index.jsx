import React from "react";
import "./index.css";
import { notesArray } from "../../../../../redux/notes";
import { useSelector } from "react-redux";
import NoteCard from "../../../../common/noteCard";

const DisplayNotes = () => {
  const allNotes = useSelector(notesArray);
  console.log(allNotes);
  return (
    <div className="note-cards-wrapper">
      {allNotes.map((note, index) => {
        return (
          <NoteCard
            key={index}
            title={note.title}
            desc={note.desc}
            isArchived={note.isArchived}
            isPinned={note.isPinned}
          />
        );
      })}
    </div>
  );
};

export default DisplayNotes;
