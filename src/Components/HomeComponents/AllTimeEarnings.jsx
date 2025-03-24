import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Card, CardContent, CardHeader } from "../ui/card";

const AllTimeEarnings = () => {
  return (
    <Card className="dark:bg-gray-900">
      <CardHeader className="border-1 border-custom-white border-b-greyish-blue-dark dark:border-gray-900 dark:border-b-border-dark dark:border-2 dark:text-text-dark">
        <div className="flex justify-between items-center">
          <p className="text-2xl">All Time Earnings</p>
          <BiDotsHorizontalRounded className="size-10" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-custom-black text-3xl dark:text-text-dark">
          $ 6345.921
        </p>
      </CardContent>
    </Card>
  );
};

export default AllTimeEarnings;
