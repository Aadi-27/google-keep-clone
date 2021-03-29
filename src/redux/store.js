import { configureStore } from "@reduxjs/toolkit";
import expandSideMenuReducer from "./expandSideMenu";
import globalSearchReducer from "./globalSearch";
import notesArrayReducer from "./notes";
import noteObjectReducer from "./noteObject";
import sideMenuReducer from "./sideMenu";
import toggleModalReducer from "./toggleModal";
import { loadData } from "./localStorage";
import toggleThemeReducer from "./toggleTheme";

const persistedData = loadData();

export default configureStore({
  reducer: {
    notesArray: notesArrayReducer,
    noteObject: noteObjectReducer,
    globalSearch: globalSearchReducer,
    sideMenu: sideMenuReducer,
    toggleModal: toggleModalReducer,
    toggleTheme: toggleThemeReducer,
    expandSideMenu: expandSideMenuReducer,
  },
  preloadedState: persistedData,
});
