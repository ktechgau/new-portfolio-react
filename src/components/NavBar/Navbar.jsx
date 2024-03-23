import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import burger from "../../assets/NavBar/burger.png";
import close from "../../assets/NavBar/close.png";
import logo from "../../assets/NavBar/logo.png";
import linkedin from "../../assets/NavBar/linkedin.png";
import Switcher from "../DarkMode/Switcher.jsx";
import "../../index.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className=" border-gray-200">
        <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              className="h-8"
              src={logo}
              alt="Karla Gaudet's personal logo leading to homepage"
            />
          </Link>

          {/* Hamburger menu for screens 768px smaller */}

          <div className="lg:hidden">
            <Switcher />
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <img
                className="h-10 w-10"
                src={menuOpen ? close : burger}
                alt="menu button for mobile screen view"
              />
            </button>
          </div>
          {/* Normal menu bar for screens larger than 768px*/}
          <div className="hidden lg:block">
            <ul className="flex space-x-6 text-xl flex-row">
              <li className="li">
                <Link to="/">Home</Link>
              </li>
              <li className="li">
                <Link to="/connect">Contact</Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/karla-gaudet-b95b2b261/"
                  target="_blank"
                >
                  <img
                    className="w-6 h-6"
                    src={linkedin}
                    alt="Linkedin Icon that takes yo to my LinkedIn profile"
                  />
                </a>
              </li>
              <li>
                <Switcher />
              </li>
            </ul>
          </div>
        </div>

        {/*Mobile view*/}
        {menuOpen && (
          <div className="lg:hidden p-5">
            <ul className="flex flex-col space-y-4 items-end pr-4">
              <li className="li">
                <Link to="/" onClick={handleClick}>
                  Home
                </Link>
              </li>
              <li className="li">
                <Link to="/connect" onClick={handleClick}>
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/karla-gaudet-b95b2b261/"
                  target="_blank"
                >
                  <img
                    className="w-6 h-6"
                    src={linkedin}
                    alt="Linkedin Icon that takes you to my LinkedIn profile"
                  />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
}
export default NavBar;
