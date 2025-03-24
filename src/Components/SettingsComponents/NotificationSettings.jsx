import React from "react";
import { Card } from "../ui/card";
import { GrNext } from "react-icons/gr";
const NotificationSettings = () => {
  return (
    <div className="h-full m-5 mr-8">
      <Card className="p-0 flex w-full bg-custom-white rounded-[3px] dark:text-text-dark dark:bg-gray-900">
        <div className="flex flex-col p-8 justify-between border-b border-b-gray-300 dark:border-b-gray-500 rounded-t-[3px]">
          <p className="text-2xl">Notification settings</p>
          <p>
            Select the kinds of notifications you get about your activities and
            recommendations
          </p>
        </div>
        {/* section 2 */}
        <div className="px-8 pb-8 flex flex-col gap-2">
          <div className="flex flex-col border border-gray-300 dark:border-gray-500 dark:border-b-gray-500 my-4 rounded-[4px] ">
            <div className="flex items-center justify-between px-4 py-2 border-b border-b-gray-300 dark:border-b-gray-500 dark:hover:bg-gray-700 rounded-t-[4px] cursor-pointer hover:bg-greyish-blue-light gap-2">
              <div>
                <p className="text-[18px] font-semibold">Email notifications</p>
                <p className="text-[14px] text-gray-700 dark:text-gray-400">
                  Get emails to find out what's going on when you're not online.
                  You can turn these off.
                </p>
              </div>
              <GrNext className="size-3 text-gray-500" onClick={() => {}} />
            </div>

            <div className="flex items-center justify-between px-4 py-2  rounded-t-[4px] cursor-pointer hover:bg-greyish-blue-light dark:hover:bg-gray-700 gap-2">
              <div>
                <p className="text-[18px] font-semibold">Push notifications</p>
                <p className="text-[14px] text-gray-700 dark:text-gray-400 ">
                  Get push notifications in-app to find out what's going on when
                  you're online.
                </p>
              </div>
              <GrNext className="size-3 text-gray-500" onClick={() => {}} />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-t-[4px] border border-gray-300 dark:border-gray-500 px-4 py-2 cursor-pointer  gap-2">
            <div>
              <p className="text-[18px] font-semibold">Advanced filters</p>
              <p className="text-[14px] text-gray-700 dark:text-gray-400">
                Fine-tune the notifications you'd like to see and those you
                don't.
              </p>
            </div>
            <div className="hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer p-1 w-26 h-8 flex justify-center items-center rounded-[4px] border border-gray-500 text-[13px] font-semibold">
              Set up filters
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NotificationSettings;
