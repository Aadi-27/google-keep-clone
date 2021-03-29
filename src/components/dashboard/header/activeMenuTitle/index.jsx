import { useSelector } from "react-redux";
import { selectedMenu } from "../../../../redux/sideMenu";
import { isDarkModeOn } from "../../../../redux/toggleTheme";

const ActiveMenuTitle = () => {
  const title = useSelector(selectedMenu);
  const isDarkMode = useSelector(isDarkModeOn);

  return (
    <div className={`header-title ${isDarkMode ? "dark-mode-text" : ""}`}>
      {title}
    </div>
  );
};

export default ActiveMenuTitle;
