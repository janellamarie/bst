import { useHeaderContext } from "./../../contexts/HeaderContext";
import paths from "./../../assets/json/paths.json";
import classNames from "classnames";
import { useNavigate } from "react-router";

const HeaderNavigation = () => {
  const navigate = useNavigate();

  const { selectedNavItem, setSelectedNavItem } = useHeaderContext();

  const handleClick = (id: string, path: string) => {
    console.warn("navigating to...", path);
    setSelectedNavItem(id);
    navigate(path);
  };

  return (
    <div className="navigation-container">
      {paths.map((p) => {
        const itemClass = classNames({
          "navigation-item": true,
          selected: selectedNavItem === p.id,
          bold: selectedNavItem === p.id,
        });

        return (
          <div
            className={itemClass}
            onClick={() => handleClick(p.id, p.path)}
            onTouchEnd={() => handleClick(p.id, p.path)}
          >
            <span className="navigation-item-text">{p.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default HeaderNavigation;
