import "./index.css";
import { handleDarkMode } from "../../../../redux/toggleTheme";
import { useDispatch } from "react-redux";

const ToggleTheme = ({ isDarkMode }) => {
  const dispatch = useDispatch();

  const handleToggle = (e) => {
    e.preventDefault();
    dispatch(handleDarkMode());
  };

  return (
    <div className="toggle-theme" onClick={handleToggle}>
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} readOnly />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleTheme;
