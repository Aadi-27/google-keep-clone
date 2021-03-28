import { toggleSideMenu } from "../../../../redux/expandSideMenu";
import { useDispatch } from "react-redux";
import HamburgerIcon from "../../../../assets/hamburger-round-icon.svg";

function HamburgerMenu() {
  const dispatch = useDispatch();
  const expandMenu = () => {
    dispatch(toggleSideMenu());
  };
  return (
    <div className="hamburger-menu" onClick={expandMenu}>
      <img src={HamburgerIcon} alt="menu" />
    </div>
  );
}

export default HamburgerMenu;
