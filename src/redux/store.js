import { configureStore } from "@reduxjs/toolkit";
import expandSideMenuReducer from "./expandSideMenu";
import globalSearchReducer from "./globalSearch";
import notesArrayReducer from "./notes";
import noteObjectReducer from "./noteObject";
import sideMenuReducer from "./sideMenu";
import { loadData } from "./localStorage";
import toggleThemeReducer from "./toggleTheme";

const persistedData = loadData();

export default configureStore({
  reducer: {
    notesArray: notesArrayReducer,
    noteObject: noteObjectReducer,
    globalSearch: globalSearchReducer,
    sideMenu: sideMenuReducer,
    toggleTheme: toggleThemeReducer,
    expandSideMenu: expandSideMenuReducer,
  },
  preloadedState: persistedData,
});
