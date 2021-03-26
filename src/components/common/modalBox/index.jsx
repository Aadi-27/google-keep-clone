// import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const ModalBox = ({ title, desc, isArchived, isPinned, onClose }) => {
  const handleInputChange = () => {
    console.log("ddd");
  };
  const handleTextAreaChange = () => {
    console.log("aaa");
  };
  const handleClick = (e) => {
    if (e.target.className === "modal-container") {
      onClose();
    }
  };
  return ReactDOM.createPortal(
    <div className="modal-container" onClick={handleClick}>
      <div className="modal-box-wrapper">
        <form className="edit-note-wrapper default-input-styles">
          <input
            placeholder="Title"
            className="create-note-input"
            onChange={handleInputChange}
            name="title"
            value={title}
            autoComplete="off"
          />
          <textarea
            placeholder="Type a text..."
            className="create-note-desc"
            rows={6}
            onChange={handleTextAreaChange}
            name="description"
            value={desc}
            autoComplete="off"
          >
            {""}
          </textarea>
        </form>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ModalBox;
