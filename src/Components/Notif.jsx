import React from "react";
import { Card } from "./ui/card";

const Notif = ({
  icon,
  main,
  description,
  date,
  from,
  read,
  toggleRead,
  color,
}) => {
  return (
    <div className="notification ">
      {read === false ? (
        <Card
          className="rounded-[4px] bg-custom-white dark:bg-gray-900 dark:text-text-dark p-0 ml-2 mr-6 cursor-pointer"
          onClick={toggleRead}
        >
          <div className="flex gap-2 p-2">
            <div
              className="w-2"
              style={{
                backgroundColor: color,
              }}
            ></div>

            <div className="w-12 h-12 flex justify-center items-center">
              {icon}
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-[16px]">
                {main} {from}
              </p>
              <p className="text-[15px]">{description}</p>
              <p className="text-gray-500 text-[14px]">{date} | time</p>
            </div>
          </div>
        </Card>
      ) : (
        <Card
          className="rounded-[4px] bg-blue-50 dark:bg-gray-800  p-0 ml-2 mr-6 cursor-pointer"
          onClick={toggleRead}
        >
          <div className="flex gap-2 p-2">
            <div
              className="w-2"
              style={{
                backgroundColor: color,
              }}
            ></div>

            <div className="w-12 h-12 flex justify-center items-center">
              {icon}
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600 font-medium text-[16px] dark:text-text-secondary-dark">
                {main} {from}
              </p>
              <p className="text-gray-500 text-[15px] dark:text-text-secondary-dark">
                {description}
              </p>
              <p className="text-gray-500 text-[14px] ">{date}</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Notif;
