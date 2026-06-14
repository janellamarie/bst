import { useNavigationContext } from "../../contexts/NavigationContext";
import paths from "../../assets/json/paths.json";
import classNames from "classnames";
import { useNavigate } from "react-router";
import { useLayoutEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { AnimatePresence, motion } from "motion/react";

const TopNavigation = () => {
  const navigate = useNavigate();

  const { selectedNavItem, setSelectedNavItem } = useNavigationContext();

  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = (id: string, path: string) => {
    console.warn("navigating to...", path);
    setSelectedNavItem(id);
    navigate(path);
  };

  useLayoutEffect(() => {
    setExpanded(false);
  }, [selectedNavItem]);

  return (
    <>
      <div className="top-navigation-container">
        <div
          className="hamburger-menu-container"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? (
            <span className="material-symbols-outlined clickable-icon">
              close
            </span>
          ) : (
            <span className="material-symbols-outlined clickable-icon">
              dehaze
            </span>
          )}
          <span className="top-nav-heading heading">navigation</span>
        </div>

        <div className="socials-container">
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 0.9 }}>
            <TwitterIcon
              className="clickable-icon"
              onClick={() => window.open("https://x.com/innierizaki", "_blank")}
            />
          </motion.div>
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 0.9 }}>
            <InstagramIcon
              className="clickable-icon"
              onClick={() =>
                window.open("https://www.instagram.com/innielinokun/", "_blank")
              }
            />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="top-navigation-expanded-container"
            initial={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: -20 }}
          >
            {paths.map((p) => {
              const itemClass = classNames({
                "navigation-item": true,
                selected: selectedNavItem === p.id,
                bold: selectedNavItem === p.id,
              });

              return (
                <div
                  className={itemClass}
                  onClick={() => handleNavItemClick(p.id, p.path)}
                  onTouchEnd={() => handleNavItemClick(p.id, p.path)}
                >
                  {p.icon && (
                    <span className="material-symbols-outlined navigation-item-icon">
                      {p.icon}
                    </span>
                  )}
                  <span className="navigation-item-text">{p.text}</span>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {expanded && (
        <div
          className="top-navigation-backdrop"
          onClick={() => setExpanded(false)}
          onTouchEnd={() => setExpanded(false)}
        ></div>
      )}
    </>
  );
};

export default TopNavigation;
