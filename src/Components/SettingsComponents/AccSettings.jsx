"use client";
import React from "react";
import { Card } from "../ui/card";
import { Button } from "@/components/ui/button";
import girl from "../../assets/girl.jpg";

const AccSettings = () => {
  return (
    <div className="h-full m-5 mr-8 ">
      <Card className="p-0 flex w-full bg-custom-white  rounded-[3px] dark:bg-gray-900 dark:text-text-dark">
        {/* header */}
        <div className="flex p-8 justify-between border-b border-b-gray-300 dark:border-b-gray-500 rounded-t-[3px]">
          <div className="">
            <p className="text-2xl dark:text-midnight">Account Settings</p>
            <p className="text-gray-500 ">lorem ipsum</p>
          </div>
          <button className="bg-gray-200 h-11 flex justify-center items-center dark:bg-border-dark dark:text-text-dark">
            Save Changes
          </button>
        </div>
        {/* form content */}

        <form className="px-8 pb-8 flex flex-col gap-6 ">
          {/* section 1 */}
          <div className="flex gap-4 border-b border-b-gray-300 dark:border-b-gray-500 pb-5">
            <img src={girl} className="h-16 w-16 rounded-full" />
            <div className="flex flex-col justify-center">
              <p className="font-semibold">Change Photo</p>
              <p className="text-[14px] text-gray-500 pl-1">lorem ipsum</p>
            </div>
          </div>
          {/* section 2 */}
          <div className="grid grid-cols-3 h-full w-full lg:gap-6 md:gap-2 font-semibold border-b border-b-gray-300 dark:border-b-gray-500 pb-8">
            <p className="flex flex-col gap-3">
              Full Name
              <input
                className="border-1 border-gray-500 dark:border-gray-300 rounded-[2px] p-1 px-2 mr-2 h-10"
                type="text"
                placeholder="John Doe"
              />
            </p>
            <p className="flex flex-col gap-3">
              Email Address
              <input
                className="border-1 border-gray-500 dark:border-gray-300 rounded-[2px] p-1 px-2 mr-2 h-10"
                type="email"
                placeholder="john.doe@example.com"
              />
            </p>
            <p className="flex flex-col gap-3">
              Phone Number
              <input
                className="border-1 border-gray-500 dark:border-gray-300 rounded-[2px] p-1 px-2 mr-2 h-10"
                type="tel"
                placeholder="+1 234 567 890"
              />
            </p>
            <p className="flex flex-col gap-3">
              Country
              <input
                className="border-1 border-gray-500 dark:border-gray-300 rounded-[2px] p-1 px-2 mr-2 h-10"
                type="text"
                placeholder="United States"
              />
            </p>
            <p className="flex flex-col gap-3">
              Language
              <input
                className="border-1 border-gray-500 dark:border-gray-300 rounded-[2px] p-1 px-2 mr-2 h-10"
                type="text"
                placeholder="English"
              />
            </p>
          </div>
          {/* section 3 */}
          <div className="grid grid-cols-3 h-full w-full lg:gap-6 md:gap-2 font-semibold border-b border-b-gray-300 dark:border-b-gray-500 pb-8">
            <p className="flex flex-col gap-3">
              Company Name
              <input
                className="border-1 border-gray-500 dark:border-gray-300 rounded-[2px] p-1 px-2 mr-2 h-10"
                type="text"
                placeholder="Acme Corp"
              />
            </p>
            <p className="flex flex-col gap-3">
              Company Size
              <input
                className="border-1 border-gray-500 dark:border-gray-300 rounded-[2px] p-1 px-2 mr-2 h-10"
                type="text"
                placeholder="50-100"
              />
            </p>
            <p className="flex flex-col gap-3">
              Company Website
              <input
                className="border-1 border-gray-500 dark:border-gray-300 rounded-[2px] p-1 px-2 mr-2 h-10"
                type="url"
                placeholder="https://www.acmecorp.com"
              />
            </p>
          </div>
          {/* section 4 */}
          <div className="flex flex-col gap-[2px]">
            <p className="text-[18px]">Deactivate Your Account</p>
            <p className="text-[15px] text-gray-500">
              When you delete your Account, the data associated with your
              account will be deleted. You can no longer log in to that account.
            </p>
            <p className="text-blue-400 text-[15px] cursor-pointer">
              Delete account
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AccSettings;
