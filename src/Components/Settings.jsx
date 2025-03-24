import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaBell,
  FaCogs,
  FaShieldAlt,
  FaQuestionCircle,
} from "react-icons/fa";

const Settings = ({ isMenuOpen }) => {
  const [activeItem, setActiveItem] = useState("/settings");

  const handleActiveLink = (path) => {
    setActiveItem(path);
  };

  return (
    <div
      className={`w-screen h-screen transition-all duration-500 ease-in-out ${
        isMenuOpen ? "transform pl-60" : "transform pl-0"
      }`}
    >
      <div className="h-full w-full flex flex-col lg:flex-row">
        <div className="h-15 w-full bg-blue-50 dark:bg-border-dark flex flex-col justify-start items-center gap-4 pt-8 pb-8 text-[20px] lg:flex lg:w-60 lg:h-auto">
          {/* Mobile Menu */}
          <div className="flex flex-row justify-evenly gap-6 lg:hidden">
            <Link
              to="/settings/account"
              onClick={() => handleActiveLink("/settings")}
            >
              <FaUser
                className={`${
                  activeItem === "/settings"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              />
            </Link>
            <Link
              to="/settings/preferences"
              onClick={() => handleActiveLink("/settings/preferences")}
            >
              <FaCogs
                className={`${
                  activeItem === "/settings/preferences"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              />
            </Link>
            <Link
              to="/settings/notifSettings"
              onClick={() => handleActiveLink("/settings/notifSettings")}
            >
              <FaBell
                className={`${
                  activeItem === "/settings/notifSettings"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              />
            </Link>
            <Link
              to="/settings/security"
              onClick={() => handleActiveLink("/settings/security")}
            >
              <FaShieldAlt
                className={`${
                  activeItem === "/settings/security"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              />
            </Link>

            <Link
              to="/settings/privacy"
              onClick={() => handleActiveLink("/settings/privacy")}
            >
              <FaLock
                className={`${
                  activeItem === "/settings/privacy"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              />
            </Link>
            <Link
              to="/settings/help"
              onClick={() => handleActiveLink("/settings/help")}
            >
              <FaQuestionCircle
                className={`${
                  activeItem === "/settings/help"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden px-4 lg:flex lg:flex-col lg:gap-4 text-[18px] lg:pt-0 lg:h-auto dark:text-white">
            <Link
              to="/settings/account"
              onClick={() => handleActiveLink("/settings")}
            >
              <div
                className={`flex items-center gap-3  ${
                  activeItem === "/settings"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              >
                <FaUser className="size-5" />
                <p>Account settings</p>
              </div>
            </Link>

            <Link
              to="/settings/preferences"
              onClick={() => handleActiveLink("/settings/preferences")}
            >
              <div
                className={`flex items-center gap-3  ${
                  activeItem === "/settings/preferences"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              >
                <FaCogs />
                <p>Preferences</p>
              </div>
            </Link>

            <Link
              to="/settings/notifSettings"
              onClick={() => handleActiveLink("/settings/notifSettings")}
            >
              <div
                className={`flex items-center gap-3  ${
                  activeItem === "/settings/notifSettings"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              >
                <FaBell />
                <p>Notifications</p>
              </div>
            </Link>

            <Link
              to="/settings/security"
              onClick={() => handleActiveLink("/settings/security")}
            >
              <div
                className={`flex items-center gap-3  ${
                  activeItem === "/settings/security"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              >
                <FaShieldAlt />
                <p>Security</p>
              </div>
            </Link>

            <Link
              to="/settings/privacy"
              onClick={() => handleActiveLink("/settings/privacy")}
            >
              <div
                className={`flex items-center gap-3  ${
                  activeItem === "/settings/privacy"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              >
                <FaLock />
                <p>Data and privacy</p>
              </div>
            </Link>

            <Link
              to="/settings/help"
              onClick={() => handleActiveLink("/settings/help")}
            >
              <div
                className={`flex items-center gap-3  ${
                  activeItem === "/settings/help"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              >
                <FaQuestionCircle />
                <p>Help</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Settings Content */}
        <div className="w-full bg-blue-50 dark:bg-gray-800 dark:text-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Settings;
