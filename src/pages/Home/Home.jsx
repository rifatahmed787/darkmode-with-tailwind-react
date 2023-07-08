import { useContext } from "react";
import { DarkModeContext } from "../../DarkmoodContext/DarkmoodContext";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`min-h-screen ${darkMode ? "dark" : "light"}`}>
      <h1>hello home</h1>
    </div>
  );
};

export default Home;
