import { searchValue } from "../../../../../redux/globalSearch";
import { useSelector } from "react-redux";
import NoteCard from "../../../../common/noteCard";

const SearchedResultsLayout = ({ allNotes }) => {
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchedResultsLayout;
