import React from "react";
import { Card } from "../ui/card";
import { GrNext } from "react-icons/gr";
import { FaFingerprint } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa6";
import { PiDownloadLight } from "react-icons/pi";
import { MdOutlineEdit } from "react-icons/md";

const PrivacySettings = () => {
  return (
    <div className="h-full m-5 mr-8">
      <Card className="p-0 flex w-full bg-custom-white dark:bg-gray-900 rounded-[3px] dark:text-text-dark">
        <div className="flex flex-col p-8 justify-between border-b border-b-gray-300 dark:border-b-gray-500 rounded-t-[3px]">
          <p className="text-2xl">Data & Privacy</p>
        </div>

        {/* Section 2 - Manage your privacy settings */}
        <div className="px-8 pb-8 flex flex-col gap-6">
          <div className="gap-4 border border-white dark:border-gray-900">
            <p className="text-[18px] font-semibold">
              Manage your privacy settings
            </p>
            <div className="flex flex-col my-4 rounded-[4px] ">
              {/* Item 1 */}
              <div className="flex items-center justify-between px-4 py-3 border-y border-y-gray-300 dark:border-y-gray-500 rounded-[4px] cursor-pointer hover:bg-greyish-blue-light dark:hover:bg-gray-800">
                <FaFingerprint className="text-xl text-gray-600" />
                <div className="flex-1 pl-4">
                  <p className="text-md font-medium text-gray-800 dark:text-text-dark">
                    Permissions you've given
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Keep track of the data and permission you're sharing with
                    the apps and sites you use.
                  </p>
                </div>
                <GrNext className="text-gray-500 text-md ml-auto" />
              </div>
              {/* Item 2 */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-b-gray-300 dark:border-b-gray-500 rounded-[4px] cursor-pointer hover:bg-greyish-blue-light dark:hover:bg-gray-800">
                <FaRegIdCard className="text-xl text-gray-600" />
                <div className="flex-1 pl-4">
                  <p className="text-md font-medium text-gray-800 dark:text-text-dark">
                    Blocked accounts
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Review and edit the people you previously blocked.
                  </p>
                </div>
                <GrNext className="text-gray-500 text-md ml-auto" />
              </div>
            </div>
          </div>

          {/* Section 3 - Manage your data */}
          <div className="gap-4 pb-5">
            <p className="text-[18px] font-semibold">Manage your data</p>
            <div className="flex flex-col my-4 rounded-[4px]">
              {/* Item 1 */}
              <div className="flex items-center justify-between px-4 py-3 border-y border-y-gray-300 dark:border-y-gray-500 rounded-[4px] cursor-pointer hover:bg-greyish-blue-light dark:hover:bg-gray-800">
                <PiDownloadLight className="text-xl text-gray-900 dark:text-gray-500" />
                <div className="flex-1 pl-4">
                  <p className="text-md font-medium text-gray-800 dark:text-text-dark">
                    Download your data
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Get a copy of your account data, such as personal and
                    payment information, and activity.
                  </p>
                </div>
                <GrNext className="text-gray-500 text-md ml-auto" />
              </div>
              {/* Item 2 */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-b-gray-300 dark:border-b-gray-500 rounded-[4px] cursor-pointer hover:bg-greyish-blue-light dark:hover:bg-gray-800">
                <MdOutlineEdit className="text-xl text-gray-600" />
                <div className="flex-1 pl-4">
                  <p className="text-md font-medium text-gray-800 dark:text-text-dark">
                    Correct your data
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Change or update your personal or payment information.
                  </p>
                </div>
                <GrNext className="text-gray-500 text-md ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PrivacySettings;
