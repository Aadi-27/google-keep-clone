import { notesArray } from "../../../../../redux/notes";
import {
  handleModal,
  handleModalId,
  modal,
  modalId,
} from "../../../../../redux/toggleModal";
import { useSelector, useDispatch } from "react-redux";
import NoteCard from "../../../../common/noteCard";
import Modal from "../../../../common/modalBox";

const DisplayNotes = () => {
  const allNotes = useSelector(notesArray);
  const isModalOpen = useSelector(modal);
  const openedNoteId = useSelector(modalId);
  const dispatch = useDispatch();

  const pinnedNotes = allNotes.filter((note) => note.isPinned);
  const otherNotes = allNotes.filter(
    (note) => !note.isPinned && !note.isArchived
  );

  const handleOpenedNoteId = (id, e) => {
    if (
      e.target.className === "pin-unpin-card hide" ||
      e.target.className === "pin-icon" ||
      e.target.className === "note-card-footer-archive hide" ||
      e.target.className === "archive-note-icon" ||
      e.target.className === "note-card-footer-delete hide" ||
      e.target.className === "delete-note-icon"
    ) {
      return;
    }
    dispatch(handleModalId(id));
    dispatch(handleModal());
  };
  const handleCloseModal = () => {
    dispatch(handleModal());
  };

  return (
    <div className="saved-notes-container">
      {!!pinnedNotes.length && (
        <div className="pinned-notes-wrapper">
          <p className="pinned-text">PINNED</p>
          <div className="note-cards-wrapper">
            {pinnedNotes.map((note) => {
              return (
                <NoteCard
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  desc={note.desc}
                  isArchived={note.isArchived}
                  isPinned={note.isPinned}
                  handleOpenedNoteId={handleOpenedNoteId}
                />
              );
            })}
          </div>
        </div>
      )}
      <div className="other-notes-wrapper">
        {!!otherNotes.length && !!pinnedNotes.length && (
          <p className="others-text">OTHERS</p>
        )}
        <div className="note-cards-wrapper">
          {otherNotes.map((note) => {
            return (
              <NoteCard
                key={note.id}
                id={note.id}
                title={note.title}
                desc={note.desc}
                isArchived={note.isArchived}
                isPinned={note.isPinned}
                handleOpenedNoteId={handleOpenedNoteId}
              />
            );
          })}
        </div>
        {isModalOpen && (
          <Modal noteId={openedNoteId} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default DisplayNotes;
