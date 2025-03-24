import React from "react";
import PieChartComponent from "./Charts/PieChartComponent";
import HorizontalChart from "./Charts/HorizontalChart";
import BarChartComponent from "./Charts/BarChartComponent";
import { Card, CardContent, CardHeader } from "./ui/card";
import { RiStarSFill } from "react-icons/ri";
import map from "../assets/blue_map.png";
import lines from "../assets/lines.png";
import "../App.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Home = ({ isMenuOpen }) => {
  const person = [
    { name: "John Doe", sales: 3200 },
    { name: "Mary Jane", sales: 5600 },
    { name: "Carl Davis", sales: 4600 },
  ];

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

        <div className="rounded-[2px] h-fit">
          <Card className="bg-dark-blue border-0 m-0">
            <div className="border-2 border-dark-blue pb-2 border-b-greyish-blue-dark dark:border-dark-blue dark:border-b-border-dark  dark:text-text-dark">
              <p className="text-orange-yellow text-2xl pl-5">Last Sales</p>
            </div>
            <CardContent>
              {person.map((person, index) => {
                return (
                  <div key={index} className="flex gap-2 justify-between">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <RiStarSFill
                          key={i}
                          className={`${
                            i < Math.floor(person.sales / 1000)
                              ? "text-orange-yellow"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-custom-white">{person.name}</p>
                    <p className="text-orange-yellow ">#{person.sales}</p>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        <div className="rounded-[2px] h-fit">
          <BarChartComponent />
        </div>

        <div className="lg:row-span-2 lg:col-span-2 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 rounded-[2px]">
          <Card className="bg-dark-blue border-0 p-0">
            <div className="flex justify-between border-1 rounded-t-md border-dark-blue border-b-greyish-blue-dark text-orange-yellow text-2xl p-2 mt-2 dark:border-dark-blue dark:border-b-border-dark dark:border-2 dark:text-text-dark">
              <p className="pl-3">World Activity</p>
              <BiDotsHorizontalRounded className="size-10" />
            </div>
            <CardContent className="flex h-100 gap-1">
              <div className="p-2 flex flex-col gap-2 items-center">
                <img
                  src={lines}
                  className="text-custom-white max-w-60 h-20 py-2"
                />
                <div className="flex flex-col max-w-55 justify-center items-center text-orange-yellow font-medium font-robo max-te text-[60px]">
                  <p>800.890</p>
                  <p className="text-[15px] text-justify font-sans text-custom-white">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, took a galley of type and scrambled it to
                    make a type specimen book.
                  </p>
                </div>
              </div>
              <div className="pb-2">
                <img src={map} className="h-full" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-[2px] m-0 ">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
