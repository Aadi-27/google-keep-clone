import {
  toggleSideMenu,
  handleShouldContract,
} from "../../../../redux/expandSideMenu";
import { useDispatch } from "react-redux";
import HamburgerIcon from "../../../../assets/hamburger-round-icon.svg";
import HamburgerIconWhite from "../../../../assets/hamburger-white.svg";

function HamburgerMenu({ isDarkMode }) {
  const dispatch = useDispatch();

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
