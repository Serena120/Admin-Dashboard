import React from "react";
import AreaComponent from "./Charts/AreaComponent";
import { Card, CardContent } from "@/components/ui/card";
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";
import HorizontalChart from "./Charts/HorizontalChart";
import StatisticsCardOne from "./StatisticsComponents/StatisticsCardOne";
import DonutPieChartComponent from "./Charts/DonutPieChartComponent";
import RadialChatComponent from "./Charts/RadialChatComponent";

const Statistics = ({ isMenuOpen }) => {
  return (
    <div
      className={`w-screen bg-greyish-blue-dark dark:bg-border-dark transition-all duration-500 ease-in-out ${
        isMenuOpen ? "transform pl-60" : "transform pl-0"
      }`}
    >
      <div className="h-full w-full p-6 grid gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <div>
          <StatisticsCardOne
            heading={"Total balance"}
            amount="$15,700"
            percent="12.1%"
            message="You spent extra $1,222 compared to last month"
            transactions="50"
            categories="15"
          />
        </div>

        <div>
          <StatisticsCardOne
            heading={"Income"}
            amount="$8,500"
            percent="6.3"
            message="You earned extra $500 compared to last month"
            transactions="27"
            categories="6"
          />
        </div>
        <div>
          <StatisticsCardOne
            heading={"Expense"}
            amount="$6,222"
            percent="2.4"
            message="You spent extra $1,222 compared to last month"
            transactions="23"
            categories="9"
          />
        </div>
        <div className="">
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
        </div>
        {/* row 2 */}
        <div className=" col-span-2">
          <AreaComponent />
        </div>
        <div className=" col-span-2 row-span-2">
          <HorizontalChart />
        </div>

        <div className=" col-span-2 flex gap-2">
          <div className="w-full">
            <RadialChatComponent />
          </div>
          <div className="w-full h-full">
            <DonutPieChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
