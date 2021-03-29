import {
  toggleSideMenu,
  handleShouldContract,
} from "../../../../redux/expandSideMenu";
import { useDispatch, useSelector } from "react-redux";
import HamburgerIcon from "../../../../assets/hamburger-round-icon.svg";
import HamburgerIconWhite from "../../../../assets/hamburger-white.svg";
import { isDarkModeOn } from "../../../../redux/toggleTheme";

function HamburgerMenu() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(isDarkModeOn);

  const expandMenu = () => {
    dispatch(toggleSideMenu());
    dispatch(handleShouldContract());
  };
  return (
    <>
      {isDarkMode ? (
        <div className="hamburger-menu" onClick={expandMenu}>
          <img src={HamburgerIconWhite} alt="menu" />
        </div>
      ) : (
        <div className="hamburger-menu" onClick={expandMenu}>
          <img src={HamburgerIcon} alt="menu" />
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;
