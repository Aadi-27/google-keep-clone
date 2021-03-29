import React, { useState, useEffect } from "react";
import PinIcon from "../../../../../assets/pin-outline.svg";
import UnPinIcon from "../../../../../assets/pin-fill.svg";
import ArchiveIcon from "../../../../../assets/archive-outline-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  noteObj,
  editTitle,
  editDesc,
  toggleIsArchived,
  toggleIsPinned,
  emptyNote,
} from "../../../../../redux/noteObject";
import { modalIsOpen } from "../../../../../redux/toggleModal";
import { addNotes } from "../../../../../redux/notes";
import { isDarkModeOn } from "../../../../../redux/toggleTheme";

const CreateNotes = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  const note = useSelector(noteObj);
  const isModalOpen = useSelector(modalIsOpen);
  const isDarkMode = useSelector(isDarkModeOn);

  useEffect(() => {
    if (note.isArchived && !isModalOpen) {
      const newNote = { ...note, id: Date.now(), isArchived: true };
      dispatch(addNotes(newNote));
      dispatch(emptyNote());
      setIsExpanded(false);
    }
  }, [note, dispatch, isModalOpen]);

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
    dispatch(toggleIsPinned());
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newNote = { ...note, id: Date.now() };
    dispatch(addNotes(newNote));
    dispatch(emptyNote());
    setIsExpanded(false);
  };

  const handleArchiveNote = (e) => {
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
            <div className="pin-icon-wrapper" onClick={handlePinNote}>
              {note.isPinned ? (
                <img className="pin-icon" src={UnPinIcon} alt="unpin-note" />
              ) : (
                <img className="pin-icon" src={PinIcon} alt="pin-note" />
              )}
            </div>
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
            <div className="archive-icon-wrapper" onClick={handleArchiveNote}>
              <img
                className="archive-icon"
                src={ArchiveIcon}
                alt="archive-note"
              />
            </div>
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
