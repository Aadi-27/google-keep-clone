import { useSelector } from "react-redux";
import { selectedMenu } from "../../../../redux/sideMenu";

const ActiveMenuTitle = () => {
  const title = useSelector(selectedMenu);
  return <span className="header-title">{title}</span>;
};

export default ActiveMenuTitle;
