import { configureStore } from "@reduxjs/toolkit";
import expandSideMenuReducer from "./expandSideMenu";
import globalSearchReducer from "./globalSearch";
import notesArrayReducer from "./notes";
import noteObjectReducer from "./noteObject";
import sideMenuReducer from "./sideMenu";

export default configureStore({
  reducer: {
    notesArray: notesArrayReducer,
    noteObject: noteObjectReducer,
    globalSearch: globalSearchReducer,
    sideMenu: sideMenuReducer,
    expandSideMenu: expandSideMenuReducer,
  },
});
