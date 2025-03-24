import React from "react";
import { IoSearch } from "react-icons/io5";
import HamburgerMenu from "./HamburgerMenu";
import { useDark } from "./Context/ThemeContext";
import { useContext } from "react";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

const Header = ({ setIsMenuOpen, isMenuOpen }) => {
  // const darkMode = false;
  const { dark, setDark } = useDark();
  return (
    <div className="Header bg-greyish-blue-light h-20 p-2 flex justify-end items-center gap-5 overflow-x-hidden dark:bg-bg-dark">
      {/* search bar */}
      <button
        className="h-11 text-custom-white flex justify-center items-center bg-greyish-blue-dark dark:bg-bg-dark dark:bg-midnight "
        onClick={() => setDark(!dark)}
      >
        {dark ? <IoSunnySharp /> : <IoMoonSharp />}
      </button>
      <div className="flex justify-end items-center gap-2 bg-dark-blue dark:bg-border-dark h-11 w-fit border-1 rounded mr-12">
        <input
          className="text-greyish-blue-dark w-80 pl-3 outline-0 "
          type="text"
          placeholder="Search"
        />
        <IoSearch className="text-greyish-blue-dark h-fit mr-3 cursor-pointer" />
      </div>

      {/* hamburger menu */}
      <div>
        <HamburgerMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </div>
    </div>
  );
};

export default Header;
