import React from "react";
import { Card } from "../ui/card";
import { PiListStarThin } from "react-icons/pi";

const Help = () => {
  return (
    <div className="h-full m-5 mr-8">
      <Card className="p-0 flex w-full bg-custom-white rounded-[3px] dark:bg-gray-900 dark:text-text-dark">
        <div className="flex flex-col p-4 justify-between border-b border-b-gray-300 dark:border-b-gray-500 rounded-t-[3px]">
          <p className="text-2xl pl-3">Help</p>
        </div>
        <div className="flex flex-wrap justify-between gap-2 md:flex-wrap md:justify-center px-5">
          {/* Card with hover effect */}
          <div className="border border-greyish-blue-dark rounded-[4px] flex flex-col justify-center items-center p-4 m-2 gap-2 shadow-sm shadow-greyish-blue-dark w-full sm:w-[45%] md:w-[40%] transition-transform duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-800 dark:shadow-sm">
            <PiListStarThin className="size-10 mt-2" />
            <p className="font-bold">Getting Started</p>
            <p className="text-gray-600 text-[13px] text-center w-50 mb-2 dark:text-gray-400">
              Get your account up and running in just a few easy steps.
            </p>
          </div>

          <div className="border border-greyish-blue-dark rounded-[4px] flex flex-col justify-center items-center p-4 m-2 gap-2 shadow-sm shadow-greyish-blue-dark w-full sm:w-[45%] md:w-[40%] transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-gray-800 dark:shadow-sm">
            <PiListStarThin className="size-10 mt-2" />
            <p className="font-bold">Account and Billing</p>
            <p className="text-gray-600 text-[13px] w-50 text-center mb-2 dark:text-gray-400">
              Managing your account, creating new users, and exporting data.
            </p>
          </div>

          <div className="border border-greyish-blue-dark rounded-[4px] flex flex-col justify-center items-center p-4 m-2 gap-2 shadow-sm shadow-greyish-blue-dark w-full sm:w-[45%] md:w-[40%] transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-gray-800 dark:shadow-sm">
            <PiListStarThin className="size-10 mt-2" />
            <p className="font-bold">Troubleshoot</p>
            <p className="text-gray-600 text-[13px] w-50 text-center mb-2 dark:text-gray-400">
              Answers to most common configuration issues.
            </p>
          </div>

          <div className="border border-greyish-blue-dark rounded-[4px] flex flex-col justify-center items-center p-4 m-2 gap-2 shadow-sm shadow-greyish-blue-dark w-full sm:w-[45%] md:w-[40%] transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-gray-800 dark:shadow-sm">
            <PiListStarThin className="size-10 mt-2" />
            <p className="font-bold">FAQs</p>
            <p className="text-gray-600 text-[13px] w-50 text-center mb-2 dark:text-gray-400">
              Frequently asked questions.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5 pb-10">
          <p className="font-bold text-blue-800  text-[18px]">
            Didn't find an answer to your questions?
          </p>
          <p className="text-[15px] text-gray-700 pb-4 dark:text-gray-400">
            Get in touch with us for details on additional services.
          </p>
          <div className="rounded-[2px] bg-greyish-blue-dark dark:bg-border-dark w-fit p-1 px-2 text-[14px] cursor-pointer">
            CONTACT US
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Help;
