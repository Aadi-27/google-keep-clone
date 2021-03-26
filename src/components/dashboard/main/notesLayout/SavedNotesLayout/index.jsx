import React from "react";
import "./index.css";
import { notesArray } from "../../../../../redux/notes";
import { useSelector } from "react-redux";
import NoteCard from "../../../../common/noteCard";

const DisplayNotes = () => {
  const allNotes = useSelector(notesArray);
  const pinnedNotes = allNotes.filter((note) => note.isPinned);
  return (
    <div className="notes-container">
      {!!pinnedNotes.length && (
        <>
          <h3>Pinned</h3>
          <div className="note-cards-wrapper">
            {pinnedNotes.map((note, index) => {
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
        </>
      )}
      {!!pinnedNotes.length && <h3>Others</h3>}
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
    </div>
  );
};

export default DisplayNotes;
