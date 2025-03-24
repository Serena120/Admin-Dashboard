import React from "react";
import AreaComponent from "./Charts/AreaComponent";
import HorizontalChart from "./Charts/HorizontalChart";
import StatisticsCardOne from "./StatisticsComponents/StatisticsCardOne";
import DonutPieChartComponent from "./Charts/DonutPieChartComponent";
import RadialChatComponent from "./Charts/RadialChatComponent";
import TotalVisitorsCard from "./StatisticsComponents/TotalVisitorsCard";

const Statistics = ({ isMenuOpen }) => {
  return (
    <div
      className={`w-screen bg-greyish-blue-dark dark:bg-border-dark transition-all duration-500 ease-in-out ${
        isMenuOpen ? "transform pl-60" : "transform pl-0"
      }`}
    >
      <div className="h-full w-full p-6 grid gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {/* card 1 */}
        <StatisticsCardOne
          heading={"Total balance"}
          amount="$15,700"
          percent="12.1%"
          message="You spent extra $1,222 compared to last month"
          transactions="50"
          categories="15"
        />

        {/* card 2 */}
        <StatisticsCardOne
          heading={"Income"}
          amount="$8,500"
          percent="6.3"
          message="You earned extra $500 compared to last month"
          transactions="27"
          categories="6"
        />

        {/* card 3 */}
        <StatisticsCardOne
          heading={"Expense"}
          amount="$6,222"
          percent="2.4"
          message="You spent extra $1,222 compared to last month"
          transactions="23"
          categories="9"
        />

        {/* card 4 */}
        <TotalVisitorsCard />

        {/* row 2 */}
        <div className="col-span-2">
          <AreaComponent />
        </div>
        <div className="col-span-2 row-span-2">
          <HorizontalChart />
        </div>

        <div className="col-span-2 flex gap-2">
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
