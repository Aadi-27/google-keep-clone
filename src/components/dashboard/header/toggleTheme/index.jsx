import { handleDarkMode, isDarkModeOn } from "../../../../redux/toggleTheme";
import { useDispatch, useSelector } from "react-redux";

const ToggleTheme = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(isDarkModeOn);

  const handleToggle = () => {
    dispatch(handleDarkMode());
    console.log(`aadi: ${isDarkMode}`);
  };

  return (
    <div className="toggle-theme" onClick={handleToggle}>
      <button>Toggle</button>
    </div>
  );
};

export default ToggleTheme;
