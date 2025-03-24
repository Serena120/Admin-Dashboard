import React from "react";
import PieChartComponent from "./Charts/PieChartComponent";
import HorizontalChart from "./Charts/HorizontalChart";
import LastSalesCard from "./HomeComponents/LastSalesCard";
import BarChartComponent from "./Charts/BarChartComponent";
import WorldActivityCard from "./HomeComponents/WorldActivityCard";
import AllTimeEarnings from "./HomeComponents/AllTimeEarnings";

const Home = ({ isMenuOpen }) => {
  return (
    <div
      className={`Home w-screen bg-greyish-blue-dark dark:bg-border-dark transition-all duration-500 ease-in-out ${
        isMenuOpen ? "transform pl-60" : "transform pl-0"
      }`}
    >
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 p-4 pl-6 mr-5">
        <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 lg:row-span-3 rounded-[2px]">
          <HorizontalChart />
        </div>

        <div className="w-full lg:row-span-2 md:row-span-2 sm:row-span-2 h-fit rounded-[2px]">
          <PieChartComponent />
        </div>

        {/* should be a component */}
        <div className="rounded-[2px] h-fit">
          <LastSalesCard />
        </div>

        <div className="rounded-[2px] h-fit">
          <BarChartComponent />
        </div>

        <div className="lg:row-span-2 lg:col-span-2 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 rounded-[2px]">
          <WorldActivityCard />
        </div>

        <div className="rounded-[2px] m-0 ">
          <AllTimeEarnings />
        </div>
      </div>
    </div>
  );
};

export default Home;
