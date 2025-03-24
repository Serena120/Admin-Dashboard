import React from "react";
import { Card } from "../ui/card";
import darkMode from "../../assets/dark_mode.png";
import lightMode from "../../assets/light_mode.png";
import { RxDragHandleDots2 } from "react-icons/rx";
import { FaGithub, FaLinkedin, FaTwitch } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { useDark } from "../Context/ThemeContext";

const Preferences = () => {
  const { dark, setDark } = useDark();

  const handleThemeChange = (theme) => {
    setDark(theme === "dark");
  };

  return (
    <div className="h-full m-5 mr-8">
      <Card className="p-0 flex w-full bg-custom-white rounded-[3px] dark:bg-gray-900 dark:text-text-dark">
        <div className="flex flex-col p-8 justify-between border-b border-b-gray-300 dark:border-b-gray-500 rounded-t-[3px]">
          <p className="text-2xl">Preferences</p>
        </div>

        <div className="px-8 pb-8 flex flex-col gap-6">
          {/* section 1 */}
          <div className="gap-4 border-b border-b-gray-300 dark:border-b-gray-500 pb-5">
            <p className="text-[20px] font-semibold">Choose theme</p>
            <p className="text-[14px] text-gray-700 dark:text-text-secondary-dark">
              Customizing your workspace, make it more enjoyable and comfortable
              to work!
            </p>

            <div className="flex gap-4 my-4 rounded-[4px]">
              <div
                className={`flex flex-col justify-center items-center gap-2 cursor-pointer border-1 rounded-[4px] bg-gray-200 dark:bg-text-dark ${
                  dark ? "border-blue-700" : "border-gray-300"
                }`}
                onClick={() => handleThemeChange("dark")}
              >
                <img src={darkMode} className="rounded-[8px] h-40 p-4" />
                <p className="text-gray-700 dark:text-text-dark dark:bg-border-dark bg-custom-white w-full p-2 font-semibold rounded-b-[3px]">
                  Dark mode
                </p>
              </div>

              <div
                className={`flex flex-col gap-2 cursor-pointer border-1 rounded-[4px] bg-gray-200 dark:bg-text-dark ${
                  !dark ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => handleThemeChange("light")}
              >
                <img src={lightMode} className="rounded-[4px] h-40 p-4" />
                <p className="text-gray-700 dark:text-text-dark bg-custom-white dark:bg-border-dark w-full p-2 font-semibold rounded-b-[3px]">
                  Light mode
                </p>
              </div>
            </div>
          </div>

          {/* section 3 */}
          <div className="gap-4 pb-6">
            <p className="text-[20px] font-semibold">Apps & Integration</p>
            <p className="text-[14px] text-gray-700 dark:text-text-secondary-dark">
              Improve communication and productivity by utilizing social media
              share, Slack, and Github integration
            </p>

            <div className="flex flex-col justify-center gap-2 cursor-pointer my-4">
              <p className="text-gray-400 text-[12px]">SOCIAL MEDIA</p>
              {/* item 1 */}
              <div className="flex w-full items-center gap-2">
                <RxDragHandleDots2 className="size-8 text-gray-300" />
                <div className="flex gap-2 items-center text-gray-600 bg-custom-white dark:bg-text-dark w-full p-2 font-semibold rounded-[4px] border-1 h-10 text-[15px]">
                  <FaLinkedin className="size-4" />
                  Connect Linkedin Account
                </div>
                <div className="font-semibold flex justify-center items-center gap-1 bg-blue-600 dark:bg-blue-900 text-custom-white text-[14px] border-0 rounded-[3px] h-[39px] w-40 p-2 ml-1">
                  Connect <MdArrowRightAlt className="mt-1" />
                </div>
              </div>
              {/* item 2 */}
              <div className="flex w-full items-center gap-2">
                <RxDragHandleDots2 className="size-8 text-gray-300" />
                <div className="flex gap-2 items-center text-gray-600 bg-custom-white dark:bg-text-dark w-full p-2 font-semibold rounded-[4px] border-1 h-10 text-[15px]">
                  <SiIndeed className="size-4" />
                  Connect Indeed Account
                </div>
                <div className="font-semibold flex justify-center items-center gap-1 bg-blue-600 dark:bg-blue-900 text-custom-white text-[14px] border-0 rounded-[3px] h-[39px] w-40 p-2 ml-1">
                  Connect <MdArrowRightAlt className="mt-1" />
                </div>
              </div>

              {/* item 3 */}
              <div className="flex w-full items-center gap-2">
                <RxDragHandleDots2 className="size-8 text-gray-300" />
                <div className="flex gap-2 items-center text-gray-600 bg-custom-white dark:bg-text-dark w-full p-2 font-semibold rounded-[4px] border-1 h-10 text-[15px]">
                  <FaTwitter className="size-4" />
                  Connect Twitter Account
                </div>
                <div className="flex justify-center items-center gap-1 bg-blue-600 dark:bg-blue-900 text-custom-white text-[14px] border-0 rounded-[3px] h-[39px] w-40 p-2 ml-1 font-semibold">
                  Connect <MdArrowRightAlt className="mt-1" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-2 cursor-pointer mt-4">
              <p className="text-gray-400 text-[12px]">APP INTEGRATION</p>
              <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                {/* item 1 */}
                <div className="flex w-full items-center gap-2">
                  <RxDragHandleDots2 className="size-8 text-gray-300" />
                  <div className="flex gap-2 items-center text-gray-600 bg-custom-white dark:bg-text-dark w-full p-2 font-semibold rounded-[4px] border-1 h-10 text-[15px]">
                    <FaGithub className="size-4" />
                    Connect Github Account
                  </div>
                  <div className="font-semibold flex justify-center items-center gap-1 bg-blue-600 dark:bg-blue-900 text-custom-white text-[14px] border-0 rounded-[3px] h-[39px] w-40 p-2 ml-1">
                    Connect <MdArrowRightAlt className="mt-1" />
                  </div>
                </div>
              </div>
            </div>
            {/* App integration ends here */}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Preferences;
