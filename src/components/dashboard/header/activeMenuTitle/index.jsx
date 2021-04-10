import { useSelector } from "react-redux";
import { selectedMenu } from "../../../../redux/sideMenu";

const ActiveMenuTitle = ({ isDarkMode }) => {
  const title = useSelector(selectedMenu);

  return (
    <div className={`header-title ${isDarkMode ? "dark-mode-text" : ""}`}>
      {title}
    </div>
  );
};

export default ActiveMenuTitle;
