import "./index.css";
import { handleDarkMode, isDarkModeOn } from "../../../../redux/toggleTheme";
import { useDispatch, useSelector } from "react-redux";

const ToggleTheme = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(isDarkModeOn);

  const handleToggle = (e) => {
    e.preventDefault();
    dispatch(handleDarkMode());
  };

  return (
    <div className="toggle-theme" onClick={handleToggle}>
      <label class="switch">
        <input type="checkbox" checked={isDarkMode} />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleTheme;
