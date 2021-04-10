import "../index.css";
import {
  handleModal,
  handleModalId,
  modal,
  modalId,
} from "../../../../../redux/toggleModal";
import { useSelector, useDispatch } from "react-redux";
import CreateNotes from "../createNotes";
import NoteCard from "../../../../common/noteCard";
import Modal from "../../../../common/modalBox";

const DisplayNotes = ({
  inputValue,
  isDarkMode,
  showCreateNotes,
  pinnedNotes,
  otherNotes,
}) => {
  const isModalOpen = useSelector(modal);
  const openedNoteId = useSelector(modalId);
  const dispatch = useDispatch();

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
    <div className="notes-layout-wrapper">
      {showCreateNotes && inputValue.length === 0 && (
        <CreateNotes isDarkMode={isDarkMode} />
      )}
      <div className="saved-notes-container">
        {pinnedNotes && !!pinnedNotes.length && inputValue.length === 0 && (
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
                    isDarkMode={isDarkMode}
                  />
                );
              })}
            </div>
          </div>
        )}
        <div className="other-notes-wrapper">
          {otherNotes &&
            pinnedNotes &&
            !!otherNotes.length &&
            !!pinnedNotes.length && <p className="others-text">OTHERS</p>}
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
                  isDarkMode={isDarkMode}
                />
              );
            })}
          </div>
          {isModalOpen && (
            <Modal
              noteId={openedNoteId}
              onClose={handleCloseModal}
              isDarkMode={isDarkMode}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayNotes;
