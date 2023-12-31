import { useContext } from "react";
import { DarkModeContext } from "../../DarkmoodContext/DarkmoodContext";

const Sidebar = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`text-black h-full ${darkMode ? "dark" : "light"}`}>
      hello sidebar
    </div>
  );
};

export default Sidebar;
