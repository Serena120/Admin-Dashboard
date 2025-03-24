import React from "react";
import map from "../../assets/blue_map.png";
import lines from "../../assets/lines.png";
import { Card, CardContent } from "../ui/card";
import { BiDotsHorizontalRounded } from "react-icons/bi";
const WorldActivityCard = () => {
  return (
    <Card className="bg-dark-blue border-0 p-0">
      <div className="flex justify-between border-1 rounded-t-md border-dark-blue border-b-greyish-blue-dark text-orange-yellow text-2xl p-2 mt-2 dark:border-dark-blue dark:border-b-border-dark dark:border-2 dark:text-text-dark">
        <p className="pl-3">World Activity</p>
        <BiDotsHorizontalRounded className="size-10" />
      </div>
      <CardContent className="flex h-100 gap-1">
        <div className="p-2 flex flex-col gap-2 items-center">
          <img src={lines} className="text-custom-white max-w-60 h-20 py-2" />
          <div className="flex flex-col max-w-55 justify-center items-center text-orange-yellow font-medium font-robo max-te text-[60px]">
            <p>800.890</p>
            <p className="text-[15px] text-justify font-sans text-custom-white">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, took a galley of type and scrambled it to make a type
              specimen book.
            </p>
          </div>
        </div>
        <div className="pb-2">
          <img src={map} className="h-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default WorldActivityCard;
