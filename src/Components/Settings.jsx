import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaBell,
  FaCogs,
  FaShieldAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import AccSettings from "./SettingsComponents/AccSettings";
import Help from "./SettingsComponents/Help";
import PrivacySettings from "./SettingsComponents/PrivacySettings";
import SecuritySettings from "./SettingsComponents/SecuritySettings";
import NotificationSettings from "./SettingsComponents/NotificationSettings";
import Preferences from "./SettingsComponents/Preferences";

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
              to="/settings/"
              onClick={() => handleActiveLink("/settings")}
              className={`no-underline ${
                activeItem === "/settings"
                  ? "text-orange-yellow dark:text-orange-yellow"
                  : "text-dark-blue dark:text-white"
              } hover:text-orange-yellow dark:hover:text-orange-yellow`}
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
              className={`no-underline ${
                activeItem === "/settings/preferences"
                  ? "text-orange-yellow dark:text-orange-yellow"
                  : "text-dark-blue dark:text-white"
              } hover:text-orange-yellow dark:hover:text-orange-yellow`}
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
              className={`no-underline ${
                activeItem === "/settings/notifSettings"
                  ? "text-orange-yellow dark:text-orange-yellow"
                  : "text-dark-blue dark:text-white"
              } hover:text-orange-yellow dark:hover:text-orange-yellow`}
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
              className={`no-underline ${
                activeItem === "/settings/security"
                  ? "text-orange-yellow dark:text-orange-yellow"
                  : "text-dark-blue dark:text-white"
              } hover:text-orange-yellow dark:hover:text-orange-yellow`}
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
              className={`no-underline ${
                activeItem === "/settings/privacy"
                  ? "text-orange-yellow dark:text-orange-yellow"
                  : "text-dark-blue dark:text-white"
              } hover:text-orange-yellow dark:hover:text-orange-yellow`}
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
              className={`no-underline ${
                activeItem === "/settings/help"
                  ? "text-orange-yellow dark:text-orange-yellow"
                  : "text-dark-blue dark:text-white"
              } hover:text-orange-yellow dark:hover:text-orange-yellow`}
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
          <div className="hidden  pl-6 lg:flex lg:flex-col lg:gap-4 text-[18px] lg:pt-0 lg:h-auto dark:text-white">
            <Link
              to="/settings/"
              onClick={() => handleActiveLink("/settings")}
              className={`flex items-center space-x-2  no-underline ${
                activeItem === "/settings"
                  ? "text-orange-yellow dark:text-orange-yellow"
                  : "text-dark-blue dark:text-white"
              } hover:text-orange-yellow dark:hover:text-orange-yellow`}
            >
              <FaUser
                className={`${
                  activeItem === "/settings"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow size-5`}
              />
              <span
                className={`${
                  activeItem === "/settings"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              >
                Account settings
              </span>
            </Link>
            <Link
              to="/settings/preferences"
              onClick={() => handleActiveLink("/settings/preferences")}
              className={`flex items-center space-x-2 no-underline ${
                activeItem === "/settings/preferences"
                  ? "text-orange-yellow dark:text-orange-yellow"
                  : "text-dark-blue dark:text-white"
              } hover:text-orange-yellow dark:hover:text-orange-yellow`}
            >
              <FaCogs
                className={`${
                  activeItem === "/settings/preferences"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow size-5`}
              />
              <span
                className={`${
                  activeItem === "/settings/preferences"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              >
                Preferences
              </span>
            </Link>
            <Link
              to="/settings/notifSettings"
              onClick={() => handleActiveLink("/settings/notifSettings")}
              className={`flex items-center space-x-2 no-underline ${
                activeItem === "/settings/notifSettings"
                  ? "text-orange-yellow dark:text-orange-yellow"
                  : "text-dark-blue dark:text-white"
              } hover:text-orange-yellow dark:hover:text-orange-yellow`}
            >
              <FaBell
                className={`${
                  activeItem === "/settings/notifSettings"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow size-5`}
              />
              <span
                className={`${
                  activeItem === "/settings/notifSettings"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              >
                Notifications
              </span>
            </Link>
            <Link
              to="/settings/security"
              onClick={() => handleActiveLink("/settings/security")}
              className={`flex items-center space-x-2 no-underline ${
                activeItem === "/settings/security"
                  ? "text-orange-yellow dark:text-orange-yellow"
                  : "text-dark-blue dark:text-white"
              } hover:text-orange-yellow dark:hover:text-orange-yellow`}
            >
              <FaShieldAlt
                className={`${
                  activeItem === "/settings/security"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow size-5`}
              />
              <span
                className={`${
                  activeItem === "/settings/security"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              >
                Security
              </span>
            </Link>
            <Link
              to="/settings/privacy"
              onClick={() => handleActiveLink("/settings/privacy")}
              className={`flex items-center space-x-2 no-underline ${
                activeItem === "/settings/privacy"
                  ? "text-orange-yellow dark:text-orange-yellow"
                  : "text-dark-blue dark:text-white"
              } hover:text-orange-yellow dark:hover:text-orange-yellow`}
            >
              <FaLock
                className={`${
                  activeItem === "/settings/privacy"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow size-5`}
              />
              <span
                className={`${
                  activeItem === "/settings/privacy"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              >
                Data and privacy
              </span>
            </Link>
            <Link
              to="/settings/help"
              onClick={() => handleActiveLink("/settings/help")}
              className={`flex items-center space-x-2 no-underline ${
                activeItem === "/settings/help"
                  ? "text-orange-yellow dark:text-orange-yellow"
                  : "text-dark-blue dark:text-white"
              } hover:text-orange-yellow dark:hover:text-orange-yellow`}
            >
              <FaQuestionCircle
                className={`${
                  activeItem === "/settings/help"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow size-5`}
              />
              <span
                className={`${
                  activeItem === "/settings/help"
                    ? "text-orange-yellow dark:text-orange-yellow"
                    : "text-dark-blue dark:text-white"
                } hover:text-orange-yellow dark:hover:text-orange-yellow`}
              >
                Help
              </span>
            </Link>
          </div>
        </div>

        {/* Main Settings Content */}
        <div className="h-full w-full bg-blue-100 dark:bg-border-dark">
          <Routes>
            <Route path="/" element={<AccSettings />} />
            <Route path="preferences" element={<Preferences />} />
            <Route path="notifSettings" element={<NotificationSettings />} />
            <Route path="security" element={<SecuritySettings />} />
            <Route path="privacy" element={<PrivacySettings />} />
            <Route path="help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Settings;
