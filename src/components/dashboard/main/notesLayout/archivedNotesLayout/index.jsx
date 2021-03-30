import NoteCard from "../../../../common/noteCard";

const ArchivedNotesLayout = ({ allNotes }) => {
  const archivedNotes = allNotes.filter(
    (note) => note.isArchived && !note.isPinned
  );
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default ArchivedNotesLayout;
