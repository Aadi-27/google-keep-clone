import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  editNote,
  noteObj,
  emptyNote,
  editTitle,
  editDesc,
} from "../../../redux/noteObject";
import { editNotes } from "../../../redux/notes";
import { useSelector, useDispatch } from "react-redux";

const ModalBox = ({ noteObject, onClose }) => {
  const dispatch = useDispatch();
  const note = useSelector(noteObj);

  useEffect(() => {
    const openedNote = { ...noteObject };
    dispatch(editNote(openedNote));
  }, [noteObject, dispatch]);

  const handleInputChange = (e) => {
    dispatch(editTitle(e.target.value));
  };
  const handleTextAreaChange = (e) => {
    dispatch(editDesc(e.target.value));
  };
  const handleClick = (e) => {
    if (e.target.className === "modal-container") {
      const editedNoteObj = { ...note };
      console.log(`aadii ${JSON.stringify(editedNoteObj)}`);
      dispatch(emptyNote());
      dispatch(editNotes(editedNoteObj));
      onClose(e);
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
            value={note.title}
            autoComplete="off"
          />
          <textarea
            placeholder="Type a text..."
            className="create-note-desc"
            rows={6}
            onChange={handleTextAreaChange}
            name="description"
            value={note.desc}
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
