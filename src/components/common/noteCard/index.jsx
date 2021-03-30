import React, { useState, useRef } from "react";
import "./index.css";
import PinIcon from "../../../assets/pin-outline.svg";
import UnPinIcon from "../../../assets/pin-fill.svg";
import DeleteIcon from "../../../assets/delete.svg";
import ArchiveIcon from "../../../assets/archive-outline-icon.svg";
import UnArchiveIcon from "../../../assets/archive-fill-icon.svg";
import PinIconWhite from "../../../assets/pin-outline-white.svg";
import UnPinIconWhite from "../../../assets/pin-fill-white.svg";
import ArchiveIconWhite from "../../../assets/archive-outline-white.svg";
import UnArchiveIconWhite from "../../../assets/archive-fill-white.svg";
import DeleteIconWhite from "../../../assets/delete-white.svg";
import { pinNotes, deleteNotes, archiveNotes } from "../../../redux/notes";
import { isDarkModeOn } from "../../../redux/toggleTheme";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../modalBox";

const NoteCard = ({ id, title, desc, isArchived, isPinned }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pinRef = useRef(null);
  const archiveRef = useRef(null);
  const deleteRef = useRef(null);
  const dispatch = useDispatch();
  const isDarkMode = useSelector(isDarkModeOn);

  const handleToggleModal = (e) => {
    e.preventDefault();
    if (
      pinRef.current.contains(e.target) ||
      archiveRef.current.contains(e.target) ||
      deleteRef.current.contains(e.target)
    ) {
      return;
    }
    setIsModalOpen(!isModalOpen);
  };

  const togglePin = () => {
    dispatch(pinNotes(id));
  };
  const toggleArchive = () => {
    dispatch(archiveNotes(id));
  };
  const handleDelete = () => {
    dispatch(deleteNotes(id));
  };

  return (
    <>
      <div
        className={`note-card-wrapper ${isDarkMode ? "dark-mode-border" : ""}`}
        onClick={handleToggleModal}
      >
        <div className="note-card-header">
          <h3>{title}</h3>
          {isDarkMode ? (
            <div
              className="pin-unpin-card hide"
              onClick={togglePin}
              ref={pinRef}
            >
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
            <div
              className="pin-unpin-card hide"
              onClick={togglePin}
              ref={pinRef}
            >
              {isPinned ? (
                <img src={UnPinIcon} className="pin-icon" alt="unpin-note" />
              ) : (
                <img src={PinIcon} className="pin-icon" alt="pin-note" />
              )}
            </div>
          )}
        </div>
        <div className="note-card-desc-wrapper">
          <p className="note-card-desc">{desc}</p>
        </div>
        {isDarkMode ? (
          <>
            <div
              className="note-card-footer-archive hide"
              onClick={toggleArchive}
              ref={archiveRef}
            >
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
            <div
              className="note-card-footer-delete hide"
              ref={deleteRef}
              onClick={handleDelete}
            >
              <img
                className="delete-note-icon"
                src={DeleteIconWhite}
                alt="delete-note"
              />
            </div>
          </>
        ) : (
          <>
            <div
              className="note-card-footer-archive hide"
              onClick={toggleArchive}
              ref={archiveRef}
            >
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
            <div
              className="note-card-footer-delete hide"
              ref={deleteRef}
              onClick={handleDelete}
            >
              <img
                className="delete-note-icon"
                src={DeleteIcon}
                alt="delete-note"
              />
            </div>
          </>
        )}
      </div>
      {isModalOpen && (
        <Modal
          noteObject={{ id, title, desc, isArchived, isPinned }}
          onClose={handleToggleModal}
        />
      )}
    </>
  );
};

export default NoteCard;
