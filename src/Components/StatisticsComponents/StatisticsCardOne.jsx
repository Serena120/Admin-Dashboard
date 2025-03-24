import React from "react";
import { HiArrowNarrowUp } from "react-icons/hi";
import { GrTransaction } from "react-icons/gr";
import { BiSolidCategory } from "react-icons/bi";
import { Card, CardContent } from "../ui/card";
const StatisticsCardOne = ({
  heading,
  amount,
  percent,
  message,
  transactions,
  categories,
}) => {
  return (
    <div>
      <Card className="border-0 dark:bg-gray-900">
        <CardContent className="flex flex-col gap-4 ">
          <p className="font-bold text-[18px]">{heading}</p>
          <p className="font-bold text-3xl">
            {amount}
            <span className="text-gray-300">.00</span>
          </p>
          <div className="flex gap-2 ">
            <div className="flex flex-col gap-3 w-38">
              <p className="flex justify-center items-center bg-green-100 text-green-700 text-[14px] w-fit p-[2px] pl-1 pr-2 rounded-full">
                <HiArrowNarrowUp />
                {percent}%
              </p>
              <p className="text-gray-600 text-[13.5px]">{message}</p>
            </div>
            <div className="flex flex-col justify-end gap-2">
              <p className="flex text-[12px] font-medium gap-1 items-center">
                <GrTransaction className="bg-purple-200 p-1.5 text-purple-800 h-6 w-6 rounded-full size-2 " />
                {transactions} transactions
              </p>
              <p className="flex text-[12px] font-medium gap-1 items-center">
                <BiSolidCategory className="bg-purple-200 p-1.5 text-purple-800 h-6 w-6 rounded-full size-2 " />
                {categories} categories
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default StatisticsCardOne;
