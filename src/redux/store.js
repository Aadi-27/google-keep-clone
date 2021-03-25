import { configureStore } from "@reduxjs/toolkit";
import globalSearchReducer from "./globalSearch";
import notesReducer from "./notes";
import sideMenuReducer from "./sideMenu";

export default configureStore({
  reducer: {
    notes: notesReducer,
    globalSearch: globalSearchReducer,
    sideMenu: sideMenuReducer,
  },
});
