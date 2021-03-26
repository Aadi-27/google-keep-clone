import React, { useState } from "react";
import "./index.css";
import Modal from "../modalBox";

const NoteCard = ({ title, desc, isArchived, isPinned }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="note-card-wrapper" onClick={handleToggleModal}>
        <div className="note-card-header">
          <h3>{title}</h3>
          <span>pin</span>
        </div>
        <p className="note-card-body">{desc}</p>
        <div className="note-card-footer">
          <span>Archive</span>
          <span>Delete</span>
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
