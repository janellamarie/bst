import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

export const HeaderContext = createContext({});

export const HeaderContextProvider = ({ children }) => {
  const [selectedNavItem, setSelectedNavItem] = useState<string>("general");

  const location = useLocation();

  useEffect(() => {
    console.warn(location.pathname);
    if (location.pathname === "/") {
      setSelectedNavItem("general");
    } else {
      setSelectedNavItem(location.pathname.substring(1));
    }
  }, [location]);

  return (
    <HeaderContext.Provider value={{ selectedNavItem, setSelectedNavItem }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => useContext<any>(HeaderContext);
