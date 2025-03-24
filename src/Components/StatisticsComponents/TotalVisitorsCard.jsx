import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";
const TotalVisitorsCard = () => {
  return (
    <Card className="m-0 flex flex-col h-full border-0 dark:bg-bg-dark">
      <CardContent className="flex flex-col gap-5">
        <div>
          <p className="text-[20px] font-medium text-gray-600 dark:text-gray-300 pb-2">
            Total Visitors:
          </p>
          <div className="flex items-center gap-1">
            <p className="text-3xl font-semibold pl-1">4,818</p>
            <IoMdTrendingUp className="text-green-500 mt-2" />
            <p className="text-green-500 mt-2">44.2%</p>
          </div>
        </div>
        <div>
          <p className="text-[20px] pb-2 font-medium text-gray-600 dark:text-gray-300">
            Engagement Rates:
          </p>
          <div className=" flex items-center gap-1">
            <p className="text-3xl font-semibold">118,818</p>
            <IoMdTrendingDown className="text-red-600 mt-2" />
            <p className="text-red-600 mt-2">2.8%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalVisitorsCard;
