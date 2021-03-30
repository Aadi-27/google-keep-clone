import { searchValue } from "../../../../../redux/globalSearch";
import {
  handleModal,
  handleModalId,
  modal,
  modalId,
} from "../../../../../redux/toggleModal";
import { useSelector, useDispatch } from "react-redux";
import NoteCard from "../../../../common/noteCard";
import Modal from "../../../../common/modalBox";

const SearchedResultsLayout = ({ allNotes }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(modal);
  const openedNoteId = useSelector(modalId);
  const inputValue = useSelector(searchValue);

  const searchedNotes = allNotes.filter((note) => {
    if (
      note.title.toLowerCase().includes(inputValue.toLowerCase()) ||
      note.desc.toLowerCase().includes(inputValue.toLowerCase())
    ) {
      return true;
    }
    return false;
  });
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
  const handleModalClose = () => {
    dispatch(handleModal());
  };

  return (
    <div className="notes-container">
      <div className="note-cards-wrapper">
        {searchedNotes.map((note) => {
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

export default SearchedResultsLayout;
