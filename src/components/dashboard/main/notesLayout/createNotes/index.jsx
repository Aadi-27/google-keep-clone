import React, { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { addNotes } from "../../../../../redux/notes";

const CreateNotes = () => {
  const obj = {
    id: 0,
    title: "",
    desc: "",
    isArchived: false,
    isPinned: false,
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState(obj);
  const dispatch = useDispatch();

  const handleExpandInput = () => {
    setIsExpanded(true);
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    setNote({ ...note, title: e.target.value });
  };
  const handleTextAreaChange = (e) => {
    e.preventDefault();
    setNote({ ...note, desc: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const noteObj = { ...note, id: Date.now() };
    dispatch(addNotes(noteObj));
    setNote(obj);
  };

  return (
    <div className="create-note-wrapper">
      <form
        className={`create-note-input-wrapper default-input-styles ${
          isExpanded ? "expand-input" : ""
        }`}
      >
        {isExpanded ? (
          <input
            placeholder="Title"
            className="create-note-input"
            onChange={handleInputChange}
            name="title"
            value={note.title}
          />
        ) : null}
        <textarea
          placeholder="Type a text..."
          className="create-note-desc"
          onClick={handleExpandInput}
          rows={isExpanded ? 6 : 1}
          onChange={handleTextAreaChange}
          name="description"
          value={note.desc}
        >
          {""}
        </textarea>
        <button onClick={handleOnSubmit}>Add</button>
      </form>
    </div>
  );
};

export default CreateNotes;
