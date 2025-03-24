import React from "react";
import { Card } from "../ui/card";
import { GrNext } from "react-icons/gr";
const SecuritySettings = () => {
  return (
    <div className="h-full m-5 mr-8">
      <Card className="p-0 flex w-full bg-custom-white rounded-[3px] dark:bg-gray-900">
        <div className="flex flex-col p-8 justify-between border-b border-b-gray-300 dark:border-b-gray-500 rounded-t-[3px]">
          <p className="text-2xl">Password and security</p>
        </div>
        {/* section 2 */}
        <div className="px-8 pb-8 flex flex-col gap-6">
          <div className=" gap-4 border border-white dark:border-gray-900 border-b-gray-300 dark:border-b-gray-500 pb-5">
            <p className="text-[18px] font-semibold">Login & recovery</p>
            <p className="text-[14px] text-gray-700 dark:text-text-secondary-dark ">
              Manage your passwords, login preferences and recovery methods.
            </p>
            <div className="flex flex-col  border border-gray-300 dark:border-gray-500 my-4 rounded-[4px]">
              <div>
                <p className="flex items-center justify-between px-4 py-2 border-b border-b-gray-300 dark:border-b-gray-500 rounded-t-[4px] cursor-pointer hover:bg-greyish-blue-light dark:hover:bg-gray-800">
                  Change Password{" "}
                  <GrNext className="size-3 text-gray-500" onClick={() => {}} />
                </p>
              </div>
              <p className="flex items-center justify-between px-4 py-2 border border-white dark:border-gray-800 rounded-t-[4px] cursor-pointer hover:bg-greyish-blue-light dark:hover:bg-gray-800">
                Two factor authentication{" "}
                <GrNext className="size-3 text-gray-500" />
              </p>
            </div>
          </div>
          {/* section 3 */}
          <div className=" gap-4 border-b border-b-gray-300 dark:border-b-gray-500 pb-5">
            <p className="text-[18px] font-semibold">Security checks</p>
            <p className="text-[14px] text-gray-700 dark:text-text-secondary-dark">
              Review security issues by running checks across apps, devices and
              emails sent.
            </p>
            <div className="flex flex-col  border border-gray-300 dark:border-gray-500 my-4 rounded-[4px]">
              <div>
                <p className="flex items-center justify-between px-4 py-2 border-b border-b-gray-300 dark:border-b-gray-500 rounded-t-[4px] cursor-pointer hover:bg-greyish-blue-light dark:hover:bg-gray-800">
                  Where you're logged in
                  <GrNext className="size-3 text-gray-500" onClick={() => {}} />
                </p>
              </div>
              <p className="flex items-center justify-between px-4 py-2 border-b border-b-gray-300 dark:border-b-gray-500 rounded-t-[4px] cursor-pointer hover:bg-greyish-blue-light dark:hover:bg-gray-800">
                Login alerts
                <GrNext className="size-3 text-gray-500" onClick={() => {}} />
              </p>
              <p className="flex items-center justify-between px-4 py-2 border border-white dark:border-gray-900 rounded-t-[4px] cursor-pointer hover:bg-greyish-blue-light dark:hover:bg-gray-800">
                Recent emails
                <GrNext className="size-3 text-gray-500" />
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SecuritySettings;
