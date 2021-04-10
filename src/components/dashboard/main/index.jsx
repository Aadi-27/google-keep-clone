import { Switch, Route, Redirect } from "react-router-dom";
import "./index.css";
import SideMenu from "./sideMenu";
import SavedNotesLayout from "./notesLayout/displayNotes";
import { inputFocus, searchValue } from "../../../redux/globalSearch";
import { selectedMenu } from "../../../redux/sideMenu";
import { notesArray } from "../../../redux/notes";
import { useSelector } from "react-redux";

const Main = ({ isDarkMode }) => {
  const allNotes = useSelector(notesArray);
  const inputValue = useSelector(searchValue);
  const isSearchActive = useSelector(inputFocus);
  const activeMenu = useSelector(selectedMenu);
  const showCreateNotes = true;

  const pinnedNotes = allNotes.filter((note) => note.isPinned) || [];
  const otherNotes = allNotes.filter(
    (note) => !note.isPinned && !note.isArchived
  );
  const archivedNotes = allNotes.filter(
    (note) => note.isArchived && !note.isPinned
  );
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
    <div className={`main-wrapper ${isDarkMode ? "dark-mode" : ""}`}>
      <SideMenu isDarkMode={isDarkMode} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <SavedNotesLayout
              inputValue={inputValue}
              isDarkMode={isDarkMode}
              showCreateNotes={showCreateNotes}
              pinnedNotes={pinnedNotes}
              otherNotes={otherNotes}
            />
          )}
        />
        <Route
          path="/notes"
          render={() => (
            <SavedNotesLayout
              inputValue={inputValue}
              isDarkMode={isDarkMode}
              showCreateNotes={showCreateNotes}
              pinnedNotes={pinnedNotes}
              otherNotes={otherNotes}
            />
          )}
        />
        <Route
          path="/archives"
          render={() => (
            <SavedNotesLayout
              inputValue={inputValue}
              isDarkMode={isDarkMode}
              otherNotes={archivedNotes}
            />
          )}
        />
        <Route
          path="/search"
          render={() =>
            isSearchActive || inputValue.length ? (
              <SavedNotesLayout
                inputValue={inputValue}
                isDarkMode={isDarkMode}
                otherNotes={searchedNotes}
              />
            ) : (
              <Redirect to={`/${activeMenu.toLowerCase()}`} />
            )
          }
        />
      </Switch>
    </div>
  );
};

export default Main;
