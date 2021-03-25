import React from "react";
import "./index.css";

const NoteCard = ({ title, desc, isArchived, isPinned }) => {
  return (
    <div className="note-card-wrapper">
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
  );
};

export default NoteCard;
