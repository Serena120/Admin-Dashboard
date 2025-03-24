import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { Card, CardContent } from "@/Components/ui/card";

const LastSalesCard = () => {
  const person = [
    { name: "John Doe", sales: 3200 },
    { name: "Mary Jane", sales: 5600 },
    { name: "Carl Davis", sales: 4600 },
  ];
  return (
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
  );
};

export default LastSalesCard;
