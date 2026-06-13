import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

export const NavigationContext = createContext({});

export const NavigationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
    <NavigationContext.Provider value={{ selectedNavItem, setSelectedNavItem }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => useContext<any>(NavigationContext);
