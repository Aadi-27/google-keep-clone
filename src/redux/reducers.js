import { combineReducers } from "redux";
import globalSearchReducer from "./globalSearch";
import notesArrayReducer from "./notes";
import noteObjectReducer from "./noteObject";
import sideMenuReducer from "./sideMenu";
import toggleModalReducer from "./toggleModal";

const allNotesAppReducers = combineReducers({
  globalSearchReducer,
  notesArrayReducer,
  noteObjectReducer,
  sideMenuReducer,
  toggleModalReducer,
});

export default allNotesAppReducers;
