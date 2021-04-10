import React, { useState } from "react";
import { v4 } from "node-uuid";
import PinIcon from "../../../../../assets/pin-outline.svg";
import UnPinIcon from "../../../../../assets/pin-fill.svg";
import ArchiveIcon from "../../../../../assets/archive-outline-icon.svg";
import UnArchiveIcon from "../../../../../assets/archive-fill-icon.svg";
import PinIconWhite from "../../../../../assets/pin-outline-white.svg";
import UnPinIconWhite from "../../../../../assets/pin-fill-white.svg";
import ArchiveIconWhite from "../../../../../assets/archive-outline-white.svg";
import UnArchiveIconWhite from "../../../../../assets/archive-fill-white.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  noteObj,
  editTitle,
  editDesc,
  toggleIsArchived,
  toggleIsPinned,
  emptyNote,
} from "../../../../../redux/noteObject";
import { addNotes } from "../../../../../redux/notes";

const CreateNotes = ({ isDarkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  const note = useSelector(noteObj);

  const handleExpandInput = () => {
    setIsExpanded(true);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    dispatch(editTitle(e.target.value));
  };
  const handleTextAreaChange = (e) => {
    e.preventDefault();
    dispatch(editDesc(e.target.value));
  };

  const handlePinNote = () => {
    if (note.isArchived && !note.isPinned) {
      dispatch(toggleIsArchived());
    }
    dispatch(toggleIsPinned());
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newNote = { ...note, id: v4() };
    dispatch(addNotes(newNote));
    dispatch(emptyNote());
    setIsExpanded(false);
  };

  const handleArchiveNote = () => {
    if (note.isPinned && !note.isArchived) {
      dispatch(toggleIsPinned());
    }
    dispatch(toggleIsArchived());
  };

  return (
    <div className="create-note-wrapper">
      <form
        className={`create-note-input-wrapper default-input-styles ${
          isDarkMode
            ? "dark-mode dark-mode-border dark-mode-font dark-mode-shadow"
            : ""
        } ${isExpanded ? "expand-input" : ""}`}
        onSubmit={handleOnSubmit}
      >
        {isExpanded ? (
          <div className="create-note-header">
            <input
              placeholder="Title"
              className="create-note-input"
              onChange={handleInputChange}
              name="title"
              value={note.title}
              autoComplete="off"
            />
            {isDarkMode ? (
              <div className="pin-icon-wrapper" onClick={handlePinNote}>
                {note.isPinned ? (
                  <img
                    className="pin-icon"
                    src={UnPinIconWhite}
                    alt="unpin-note"
                  />
                ) : (
                  <img className="pin-icon" src={PinIconWhite} alt="pin-note" />
                )}
              </div>
            ) : (
              <div className="pin-icon-wrapper" onClick={handlePinNote}>
                {note.isPinned ? (
                  <img className="pin-icon" src={UnPinIcon} alt="unpin-note" />
                ) : (
                  <img className="pin-icon" src={PinIcon} alt="pin-note" />
                )}
              </div>
            )}
          </div>
        ) : null}
        <textarea
          placeholder="Type a text..."
          className="create-note-desc"
          rows={isExpanded ? 6 : 1}
          onChange={handleTextAreaChange}
          onFocus={handleExpandInput}
          name="description"
          value={isExpanded ? note.desc : ""}
          autoComplete="off"
        >
          {""}
        </textarea>
        {isExpanded && (
          <>
            {isDarkMode ? (
              <div className="archive-icon-wrapper" onClick={handleArchiveNote}>
                {note.isArchived ? (
                  <img
                    className="archive-icon"
                    src={UnArchiveIconWhite}
                    alt="archive-note"
                  />
                ) : (
                  <img
                    className="archive-icon"
                    src={ArchiveIconWhite}
                    alt="archive-note"
                  />
                )}
              </div>
            ) : (
              <div className="archive-icon-wrapper" onClick={handleArchiveNote}>
                {note.isArchived ? (
                  <img
                    className="archive-icon"
                    src={UnArchiveIcon}
                    alt="archive-note"
                  />
                ) : (
                  <img
                    className="archive-icon"
                    src={ArchiveIcon}
                    alt="archive-note"
                  />
                )}
              </div>
            )}
            <div
              className="create-note-submit-btn"
              role="button"
              onClick={handleOnSubmit}
            >
              Close
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default CreateNotes;
