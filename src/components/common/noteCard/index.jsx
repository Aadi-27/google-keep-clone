import React, { useState, useRef } from "react";
import "./index.css";
import PinIcon from "../../../assets/pin-outline.svg";
import UnPinIcon from "../../../assets/pin-fill.svg";
import DeleteIcon from "../../../assets/delete.svg";
import ArchiveIcon from "../../../assets/archive-outline-icon.svg";
import UnArchiveIcon from "../../../assets/archive-fill-icon.svg";
import { pinNotes, deleteNotes, archiveNotes } from "../../../redux/notes";
import { useDispatch } from "react-redux";
import Modal from "../modalBox";

const NoteCard = ({ id, title, desc, isArchived, isPinned }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pinRef = useRef(null);
  const archiveRef = useRef(null);
  const deleteRef = useRef(null);
  const dispatch = useDispatch();

  const handleToggleModal = (e) => {
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
      <div className="note-card-wrapper" onClick={handleToggleModal}>
        <div className="note-card-header">
          <h3>{title}</h3>
          <div className="pin-unpin-card" onClick={togglePin} ref={pinRef}>
            {isPinned ? (
              <img src={UnPinIcon} className="pin-icon" alt="unpin-note" />
            ) : (
              <img src={PinIcon} className="pin-icon" alt="pin-note" />
            )}
          </div>
        </div>
        <div className="note-card-desc-wrapper">
          <p className="note-card-desc">{desc}</p>
        </div>
        <div
          className="note-card-footer-archive"
          onClick={toggleArchive}
          ref={archiveRef}
        >
          {isArchived ? (
            <img
              className="unarchive-note-icon"
              src={UnArchiveIcon}
              alt="archive-note"
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
          className="note-card-footer-delete"
          ref={deleteRef}
          onClick={handleDelete}
        >
          <img
            className="delete-note-icon"
            src={DeleteIcon}
            alt="delete-note"
          />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={title}
          desc={desc}
          isArchived={isArchived}
          isPinned={isPinned}
          onClose={handleToggleModal}
        />
      )}
    </>
  );
};

export default NoteCard;
