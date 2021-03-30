import "./index.css";
import { toggleSelectedMenu } from "../../../redux/sideMenu";
import { menuIsExpanded } from "../../../redux/expandSideMenu";
import { useSelector, useDispatch } from "react-redux";

const SideMenuOption = ({ title, icon }) => {
  const dispatch = useDispatch();
  const isExpanded = useSelector(menuIsExpanded);

  const toggleMenu = () => {
    dispatch(toggleSelectedMenu(title));
  };
  return (
    <li
      className={isExpanded ? "side-menu-expanded" : "side-menu"}
      onClick={toggleMenu}
    >
      <div
        className={`side-menu-icon-wrapper ${
          isExpanded ? "" : "side-menu-contracted"
        }`}
      >
        <img className="side-menu-icon" src={icon} alt="notes option" />
      </div>
      <span className="side-menu-title">{title}</span>
    </li>
  );
};

export default SideMenuOption;
