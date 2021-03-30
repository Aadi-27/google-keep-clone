import React from "react";
import { notesArray } from "../../../../../redux/notes";
import { useSelector } from "react-redux";
import NoteCard from "../../../../common/noteCard";

const DisplayNotes = () => {
  const allNotes = useSelector(notesArray);
  const pinnedNotes = allNotes.filter((note) => note.isPinned);
  const otherNotes = allNotes.filter(
    (note) => !note.isPinned && !note.isArchived
  );

  return (
    <div className="saved-notes-container">
      {!!pinnedNotes.length && (
        <div className="pinned-notes-wrapper">
          <p className="pinned-text">PINNED</p>
          <div className="note-cards-wrapper">
            {pinnedNotes.map((note) => {
              return (
                <NoteCard
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  desc={note.desc}
                  isArchived={note.isArchived}
                  isPinned={note.isPinned}
                />
              );
            })}
          </div>
        </div>
      )}
      <div className="other-notes-wrapper">
        {!!otherNotes.length && !!pinnedNotes.length && (
          <p className="others-text">OTHERS</p>
        )}
        <div className="note-cards-wrapper">
          {otherNotes.map((note) => {
            return (
              <NoteCard
                key={note.id}
                id={note.id}
                title={note.title}
                desc={note.desc}
                isArchived={note.isArchived}
                isPinned={note.isPinned}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DisplayNotes;
