import NoteCard from "../../../../common/noteCard";
import {
  handleModal,
  handleModalId,
  modal,
  modalId,
} from "../../../../../redux/toggleModal";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../../../common/modalBox";

const ArchivedNotesLayout = ({ allNotes }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(modal);
  const openedNoteId = useSelector(modalId);

  const archivedNotes = allNotes.filter(
    (note) => note.isArchived && !note.isPinned
  );
  const handleModalClose = () => {
    dispatch(handleModal());
  };
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
  return (
    <div className="notes-container">
      <div className="note-cards-wrapper">
        {archivedNotes.map((note) => {
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
        {isModalOpen && (
          <Modal noteId={openedNoteId} onClose={handleModalClose} />
        )}
      </div>
    </div>
  );
};

export default ArchivedNotesLayout;
