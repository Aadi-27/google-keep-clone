import "./index.css";
import SideMenu from "./sideMenu";
import NotesLayout from "./notesLayout";
import { isDarkModeOn } from "../../../redux/toggleTheme";
import { useSelector } from "react-redux";

const Main = () => {
  const isDarkMode = useSelector(isDarkModeOn);

  return (
    <div className={`main-wrapper ${isDarkMode ? "dark-mode" : ""}`}>
      <SideMenu />
      <NotesLayout />
    </div>
  );
};

export default Main;
