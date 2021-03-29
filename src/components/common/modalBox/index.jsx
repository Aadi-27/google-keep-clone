import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PinIcon from "../../../assets/pin-outline.svg";
import UnPinIcon from "../../../assets/pin-fill.svg";
import ArchiveIcon from "../../../assets/archive-outline-icon.svg";
import UnArchiveIcon from "../../../assets/archive-fill-icon.svg";
import PinIconWhite from "../../../assets/pin-outline-white.svg";
import UnPinIconWhite from "../../../assets/pin-fill-white.svg";
import ArchiveIconWhite from "../../../assets/archive-outline-white.svg";
import UnArchiveIconWhite from "../../../assets/archive-fill-white.svg";
import {
  editNote,
  noteObj,
  emptyNote,
  editTitle,
  editDesc,
  toggleIsArchived,
  toggleIsPinned,
} from "../../../redux/noteObject";
import { editNotes } from "../../../redux/notes";
import { isDarkModeOn } from "../../../redux/toggleTheme";
import { useSelector, useDispatch } from "react-redux";

const ModalBox = ({ noteObject, onClose }) => {
  const dispatch = useDispatch();
  const note = useSelector(noteObj);
  const isDarkMode = useSelector(isDarkModeOn);
  const { title, desc, isPinned, isArchived } = note;

  useEffect(() => {
    // const openedNote = { ...noteObject };
    // dispatch(editNote(openedNote));
    // console.log(`aaa: ${JSON.stringify(openedNote)}`);
    console.log(`yo`);

    // return () => {
    //   dispatch(emptyNote());
    // };
  }, []);

  const handleInputChange = (e) => {
    dispatch(editTitle(e.target.value));
  };
  const handleTextAreaChange = (e) => {
    dispatch(editDesc(e.target.value));
  };
  const handleClick = (e) => {
    if (
      e.target.className === "modal-container" ||
      e.target.className === "create-note-submit-btn"
    ) {
      const editedNoteObj = { ...note };
      // dispatch(emptyNote());
      dispatch(editNotes(editedNoteObj));
      onClose(e);
      console.log(`aadi: ${JSON.stringify(note)}`);
    }
  };
  const togglePin = (e) => {
    dispatch(toggleIsPinned());
  };
  const toggleArchive = (e) => {
    e.preventDefault();
    dispatch(toggleIsArchived());
  };

  return ReactDOM.createPortal(
    <div className="modal-container" onClick={handleClick}>
      <div className="modal-box-wrapper">
        <form
          className={`edit-note-wrapper default-input-styles ${
            isDarkMode ? "dark-mode dark-mode-border dark-mode-shadow" : ""
          }`}
          onSubmit={handleClick}
        >
          <div className="note-card-header">
            <input
              placeholder="Title"
              className="create-note-input"
              onChange={handleInputChange}
              name="title"
              value={title}
              autoComplete="off"
            />
            {isDarkMode ? (
              <div className="pin-unpin-card" onClick={togglePin}>
                {isPinned ? (
                  <img
                    src={UnPinIconWhite}
                    className="pin-icon"
                    alt="unpin-note"
                  />
                ) : (
                  <img src={PinIconWhite} className="pin-icon" alt="pin-note" />
                )}
              </div>
            ) : (
              <div className="pin-unpin-card" onClick={togglePin}>
                {isPinned ? (
                  <img src={UnPinIcon} className="pin-icon" alt="unpin-note" />
                ) : (
                  <img src={PinIcon} className="pin-icon" alt="pin-note" />
                )}
              </div>
            )}
          </div>
          <textarea
            placeholder="Type a text..."
            className="modal-note-desc"
            rows={6}
            onChange={handleTextAreaChange}
            name="description"
            value={desc}
            autoComplete="off"
          >
            {""}
          </textarea>
          {isDarkMode ? (
            <div className="note-card-footer-archive" onClick={toggleArchive}>
              {isArchived ? (
                <img
                  className="unarchive-note-icon"
                  src={UnArchiveIconWhite}
                  alt="unarchive-note"
                />
              ) : (
                <img
                  className="archive-note-icon"
                  src={ArchiveIconWhite}
                  alt="archive-note"
                />
              )}
            </div>
          ) : (
            <div className="note-card-footer-archive" onClick={toggleArchive}>
              {isArchived ? (
                <img
                  className="unarchive-note-icon"
                  src={UnArchiveIcon}
                  alt="unarchive-note"
                />
              ) : (
                <img
                  className="archive-note-icon"
                  src={ArchiveIcon}
                  alt="archive-note"
                />
              )}
            </div>
          )}
          <div className="create-note-submit-btn" role="button">
            Close
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ModalBox;
