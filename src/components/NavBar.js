import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white font-serif dark:bg-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto `}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                className={`block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ${
                  location.pathname === "/"
                    ? "bg-blue-700 md:bg-transparent md:text-sky-400"
                    : "bg-transparent" 
                } dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                className={`block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ${
                  location.pathname === "/projects"
                  ? "bg-blue-700 md:bg-transparent md:text-sky-400"
                  : "bg-transparent" 
              } dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent`}
            >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/links"
                  className={`block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ${
                    location.pathname === "/links"
                    ? "bg-blue-700 md:bg-transparent md:text-sky-400"
                    : "bg-transparent" 
                } dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                  Links
                </Link>
              </li>
              <li>
                <a
                  href="https://dsourav.substack.com/"
                  className={`block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ${
                    location.pathname === "/blogs"
                    ? "bg-blue-700 md:bg-transparent md:text-sky-400"
                    : "bg-transparent" 
                } dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                  Blogs
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ${
                    location.pathname === "/contact"
                    ? "bg-blue-700 md:bg-transparent md:text-sky-400"
                    : "bg-transparent" 
                } dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
