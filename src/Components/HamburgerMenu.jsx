import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHome, IoIosSettings } from "react-icons/io";
import { GiNetworkBars } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";

const HamburgerMenu = ({ setIsMenuOpen, isMenuOpen }) => {
  const [selectedItem, setSelectedItem] = useState(""); // Track the selected item

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex h-full w-full">
      <nav
        className={`bg-dark-blue dark:bg-slate-900 text-custom-white z-10 w-60 h-full top-0 fixed left-0 flex flex-col justify-start items-center transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="nav-list cursor-pointer flex flex-col gap-8 mt-10">
          <Link to={"/"}>
            <li
              className={`flex items-center gap-2 ${
                selectedItem === "dashboard" || window.location.pathname === "/"
                  ? "text-orange-yellow" // Active state for selected item
                  : "text-custom-white dark:text-text-dark hover:text-orange-yellow"
              }`}
              onClick={() => handleItemClick("dashboard")}
            >
              <IoMdHome size={24} />
              Dashboard
            </li>
          </Link>

          <Link to={"/statistics"}>
            <li
              className={`flex items-center gap-2 ${
                selectedItem === "statistics" ||
                window.location.pathname === "/statistics"
                  ? "text-orange-yellow"
                  : "text-custom-white dark:text-text-dark hover:text-orange-yellow"
              }`}
              onClick={() => handleItemClick("statistics")}
            >
              <GiNetworkBars size={24} />
              Statistics
            </li>
          </Link>

          <Link to={"/inbox"}>
            <li
              className={`flex items-center gap-2 ${
                selectedItem === "inbox" ||
                window.location.pathname === "/inbox"
                  ? "text-orange-yellow"
                  : "text-custom-white dark:text-text-dark hover:text-orange-yellow"
              }`}
              onClick={() => handleItemClick("inbox")}
            >
              <IoIosMail size={24} />
              Inbox
            </li>
          </Link>

          <Link to={"/notifications"}>
            <li
              className={`flex items-center gap-2 ${
                selectedItem === "notifications" ||
                window.location.pathname === "/notifications"
                  ? "text-orange-yellow"
                  : "text-custom-white dark:text-text-dark hover:text-orange-yellow"
              }`}
              onClick={() => handleItemClick("notifications")}
            >
              <RiMessage2Fill size={24} />
              Notifications
            </li>
          </Link>

          <Link to={"/settings"}>
            <li
              className={`flex items-center gap-2 ${
                selectedItem === "settings" ||
                window.location.pathname === "/settings"
                  ? "text-orange-yellow"
                  : "text-custom-white dark:text-text-dark hover:text-orange-yellow"
              }`}
              onClick={() => handleItemClick("settings")}
            >
              <IoIosSettings size={24} />
              Settings
            </li>
          </Link>
        </ul>
      </nav>

      {/* Hamburger button */}
      <div
        className="hamburger-menu h-6 w-7 fixed top-7 right-0 cursor-pointer flex flex-col justify-around gap-1.5 mr-6"
        onClick={toggleMenu}
      >
        <div
          className={`h-2 bg-dark-blue dark:bg-text-secondary-dark transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-[10px] translate-x-[4px]" : ""
          }`}
        ></div>
        <div
          className={`h-2 bg-dark-blue dark:bg-text-secondary-dark transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-2 bg-dark-blue dark:bg-text-secondary-dark transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 translate-y-[-10px] translate-x-[4px]" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
