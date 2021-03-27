import {
  toggleSideMenu,
  menuIsExpanded,
} from "../../../../redux/expandSideMenu";
import { useSelector, useDispatch } from "react-redux";
import HamburgerIcon from "../../../../assets/hamburger-round-icon.svg";

function HamburgerMenu() {
  const dispatch = useDispatch();
  const data = useSelector(menuIsExpanded);
  const expandMenu = () => {
    dispatch(toggleSideMenu());
    console.log(data);
  };
  return (
    <div className="hamburger-menu" onClick={expandMenu}>
      <img src={HamburgerIcon} alt="menu" />
    </div>
  );
}

export default HamburgerMenu;
