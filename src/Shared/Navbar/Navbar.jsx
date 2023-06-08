import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import resume from "../../assets/Resume/Personal Portfolio.pdf";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [IsSidebarOpen, setIsSidebarOpen] = useState(true);

  //for sidebar open and close
  const handleSidebarClose = () => setIsSidebarOpen(!IsSidebarOpen);

  //dark mode handle

  useEffect(() => {
    const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
    setDarkMode(darkModeEnabled);
  }, []);

  const toggleDarkMode = () => {
    const updatedMode = !darkMode;
    setDarkMode(updatedMode);
    localStorage.setItem("darkModeEnabled", updatedMode.toString());
    updateTheme(updatedMode);
  };

  const updateTheme = (darkModeEnabled) => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", darkModeEnabled);
  };

  return (
    <div className="bg-[#000000] dark">
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative">
          <div className="flex items-center  justify-end space-x-5 ">
            <div className="flex justify-center items-center gap-5 mr-20 ">
              <button type="button">
                <Icon icon="line-md:email" width="30" className="text-white" />
              </button>

              <button type="button">
                <Icon
                  icon="basil:notification-on-outline"
                  width="30"
                  className="text-white"
                />
              </button>

              {/*darkmood toggole button start here  */}

              <label
                htmlFor="toggleB"
                className="flex items-center cursor-pointer"
                onClick={toggleDarkMode}
              >
                <div className="relative">
                  <div
                    className={`block  w-14 h-8 rounded-full ${
                      darkMode ? "bg-black" : "bg-white"
                    }`}
                  ></div>
                  {darkMode ? (
                    <div className=" absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition flex justify-center items-center translate-x-full">
                      <Icon
                        icon="ion:moon-outline"
                        width="20"
                        className="text-black"
                      />
                    </div>
                  ) : (
                    <div className=" absolute left-1 top-1 bg-black w-6 h-6 rounded-full transition flex justify-center items-center -translate-x-0">
                      <Icon
                        icon="tabler:sun"
                        width="20"
                        className="text-white"
                      />
                    </div>
                  )}
                </div>
              </label>
            </div>
            <div className="w-px bg-gray-300 h-full mx-3"></div>
            <a
              href={resume}
              download
              className="flex justify-center items-center gap-2 bg-brand-button hover:bg-brand-buttonHover text-brand-text text-xl px-4 py-2 rounded-lg font-semibold"
            >
              <Icon icon="octicon:download-24" width="20" />
              Download Cv
            </a>

            {/* sidebar open close  */}
            <button
              type="button"
              className="bg-brand-button hover:bg-brand-buttonHover text-brand-text text-xl px-10 py-2 rounded-lg font-semibold"
              onClick={() => handleSidebarClose()}
            >
              <Icon icon="mdi:hamburger-menu" width="24" />
            </button>

            <div
              className={`fixed -left-80 top-0 h-full w-72 bg-white transition-transform transform ${
                IsSidebarOpen ? "translate-x-0 " : "translate-x-full"
              }`}
            ></div>
          </div>
          <div className="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <div className="flex items-center  justify-end space-x-5">
                      <button
                        type="button"
                        className="flex justify-center items-center gap-2 bg-brand-button hover:bg-brand-buttonHover text-brand-text text-xl px-4 py-2 rounded-lg font-semibold"
                      >
                        <Icon icon="octicon:download-24" width="20" />
                        Download Cv
                      </button>
                      <button
                        type="button"
                        className="bg-brand-button hover:bg-brand-buttonHover text-brand-text text-xl px-10 py-2 rounded-lg font-semibold"
                      >
                        <Icon icon="mdi:hamburger-menu" width="24" />
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
